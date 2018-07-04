
class Movie extends EventEmmiter {
  constructor(title, year, duration) {
    this.title = title,
    this.year = year,
    this.duration = duration
  }

  play() {
    console.log(`Playing ${this.title}...`);
  }

  pause() {
    console.log(`${this.title} is paused...`);
  }

  resume () {
    console.log(`Resuming ${this.title}...`);
  }
}

let pulpFiction = new Movie('Pulp Fiction', 1994, 154);
let karateKid = new Movie('The Karate Kid ', 1984 , 126 );

pulpFiction.play();
