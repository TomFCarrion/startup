
class EventEmmiter {
  constructor(){
    this.events = {};
  }


  on(event, listener){
    if (typeof this.events[event] !== 'object') {
        this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event){
    var i, listeners, length, args = [].slice.call(arguments, 1);

    if (typeof this.events[event] === 'object') {
        listeners = this.events[event].slice();
        length = listeners.length;

        for (i = 0; i < length; i++) {
            listeners[i].apply(this, args);
        }
    }
  }

  off(event, listener) {
    if(this.events.has(event)) {
       let listeners = this.listeners.get(event);
       listeners.delete(listener);
    }
  }


  }








}
