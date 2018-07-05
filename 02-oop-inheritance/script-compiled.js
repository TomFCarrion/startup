import actor from 'src/Actor.js';
import Movie from 'src/Movie.js';
import Logger from 'src/Logger.js';
import Social from 'src/Social.js';

let pulpFiction = new Movie('Pulp Fiction', 1994, 154);

Object.assign(pulpFiction, social); //  src: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign
let logger = new Logger();

let newActor = new Actor('Samuel L. Jackson', 69);

pulpFiction.on('play', logger.log);
pulpFiction.on('pause', logger.log);
pulpFiction.on('resume', logger.log);

pulpFiction.resume();
pulpFiction.play();
pulpFiction.pause();

pulpFiction.share('Samuel L. Jackson'); // output: Share Pulp Fiction with Samuel L. Jackson.
pulpFiction.like('Samuel L. Jackson'); // output: Samuel L. Jackson likes Pulp Fiction with .
pulpFiction.addCast(newActor);
let otherCast = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
pulpFiction.addCast(otherCast);

console.log(pulpFiction.cast[0].name);

console.log(pulpFiction.cast[3].name + pulpFiction.cast[3].age);
