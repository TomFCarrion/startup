class EventEmmiter {
  constructor(){
    this.events = {};
  }


  on(eventName, listener){
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(listener); //cambio
  }

  emit(eventName) {
    let event = this.events[eventName];
    if (event) {
      event.forEach(function(fn) {
        fn(eventName);
      });
    }
  }

  off(eventName, callBack) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === callBack) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  }
  }







}
