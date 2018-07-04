
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

let social = {  // src : https://www.w3schools.com/js/js_objects.asp
  share: function(friendName){
    console.log(`Share ${this.title} with ${friendName}.`);
  },
  like: function(friendName){
    console.log(`${friendName} likes ${this.title}.`);
  }
};

class Actor{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
};

let pulpFiction = new Movie('Pulp Fiction', 1994, 154);

Object.assign(pulpFiction,social); //  src: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign
let logger = new Logger();

let newActor = new Actor('Samuel L. Jackson', 69 );


pulpFiction.on('play',logger.log);
pulpFiction.on('pause', logger.log);
pulpFiction.on('resume', logger.log);

pulpFiction.resume();
pulpFiction.play();
pulpFiction.pause();

pulpFiction.share('Samuel L. Jackson'); // output: Share Pulp Fiction with Samuel L. Jackson.
pulpFiction.like('Samuel L. Jackson');  // output: Samuel L. Jackson likes Pulp Fiction with .
