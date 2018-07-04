
function Movie (title, year, duration){
  this.title = title,
  this.year = year,
  this.duration = duration
}

Movie.prototype.play = function play() {
  console.log(`Playing ${this.title}...`);
};

Movie.prototype.pause = function pause() {
  console.log(`${this.title} is paused...`);
};

Movie.prototype.resume = function resume () {
  console.log(`Resuming ${this.title}...`);
};

let pulpFiction = new Movie('Pulp Fiction', 1994, 154);
let karateKid = new Movie('The Karate Kid ', 1984 , 126 );

pulpFiction.play();
