Module.register("mmm-homesenor",{

  defaults: {
    prependString: 'Home Status: ',
    updateInterval: 300000,
    animationSpeed: 0,
    data: [{
      name: 'Living Room &#127777;:',
      valueProperty: 'temperature',
      unit: 'c'
    },{
      name: 'Living Room &#10054;:',
      valueProperty: 'humidity',
      unit: '%'
    }]
  },

  start: function() {
    this.html = ''
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

    this.html = ''
    if(this.currentValue){
      for (let item of this.config.data) {
        this.html += `<br>${item.name} ${Number(this.currentValue[item.valueProperty]).toFixed(1)}${ item.valueProperty === 'temperature' ? '&deg;' : ''}${item.unit.toUpperCase()}`; 
      }
      wrapper.innerHTML = this.config.prependString + this.html;
    }
    else
      wrapper.innerHTML = this.config.prependString;
    return wrapper;
  }
});