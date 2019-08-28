Module.register("mmm-homesenor",{

  defaults: {
    prependString: 'Home Status: ',
    updateInterval: 5000,
    animationSpeed: 0,
    data: [{
      name: 'Living Room temperature:'
      valueProperty: 'temperature'
      unit: 'c'
    },{
      name: 'Living Room humditity:'
      valueProperty: 'humditity',
      unit: 'c'
    }]
  },

  start: function() {
    this.html = this.config.prependString;
    this.currentValue = null;
    this.sendSocketNotification('CONFIG', this.config);
  },

  socketNotificationReceived: function(notification, payload) {
      if (notification === 'SENSORDATA') {
        this.currentValue = payload;
        this.updateDom(this.config.animationSpeed);
      }
  },

  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement("div");

    // Append &deg; + unit
    if(this.currentValue){
      for (let item of this.config.data) {
        this.html += `<br>&deg;' ${item.name} ${this.currentValue[item.valueProperty]} ${item.unit.toUpperCase()}`; 
      }
    }

    wrapper.innerHTML = this.config.prependString + this.currentValue;
    return wrapper;
  }
});