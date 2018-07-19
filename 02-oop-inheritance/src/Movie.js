class Movie extends EventEmmiter {
  constructor(title, year, duration) {
    super();
    this.title = title,
    this.year = year,
    this.duration = duration
    this.cast = [];
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

  addCast(actor){ //src: https://stackoverflow.com/questions/4775722/check-if-object-is-array
    if(Array.isArray(actor)) //check if is an array of actors
    {
      this.cast = this.cast.concat(actor);
    }
    else{
      this.cast.push(actor);
    }
  }

}

// export default Movie;
