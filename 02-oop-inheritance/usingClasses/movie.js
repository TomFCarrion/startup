
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

class Movie extends EventEmmiter {
  constructor(title, year, duration) {
    super();
    this.title = title,
    this.year = year,
    this.duration = duration
  }


  play(){
    this.emit('play');
  }

  pause(){
    this.emit('pause');
  }

  resume(){
    this.emit('resume');
  }

}

class Logger{
  log(info){
    console.log('The '+ info +' event has been emited');
  }
}


let pulpFiction = new Movie('Pulp Fiction', 1994, 154);
let logger = new Logger();


pulpFiction.on('play',logger.log);
pulpFiction.on('pause', logger.log);
pulpFiction.on('resume', logger.log);

pulpFiction.resume();
pulpFiction.play();
pulpFiction.pause();
