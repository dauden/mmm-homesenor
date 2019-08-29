const NodeHelper = require("node_helper");
const sys = require('sys');
const sensor = require('node-dht-sensor').promises;

module.exports = NodeHelper.create({
	start: function() {
		console.log("Starting node helper: " + this.name);
	},

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		const self = this;

		if (notification === 'CONFIG') {
			this.config = payload;

			setInterval(function() {
				self.sendTemperature();
			}, this.config.updateInterval);
		}
		
	},

	sendTemperature: function() {
		const self = this;
		sensor.read(self.config.sensorType, self.config.gpioPin).then(
		    function (resp) {
		      self.sendSocketNotification('SENSORDATA', resp);
		    },
		    function (err) {
		        console.error('Failed to read sensor data:', err);
		    }
		);
	}
});
