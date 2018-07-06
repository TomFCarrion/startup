"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

;
// export default Actor;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmmiter = function () {
  function EventEmmiter() {
    _classCallCheck(this, EventEmmiter);

    this.events = {};
  }

  _createClass(EventEmmiter, [{
    key: "on",
    value: function on(eventName, listener) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(listener); //cambio
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var event = this.events[eventName];
      if (event) {
        event.forEach(function (fn) {
          fn(eventName);
        });
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callBack) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === callBack) {
            this.events[eventName].splice(i, 1);
            break;
          }
        };
      }
    }
  }]);

  return EventEmmiter;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: 'log',
    value: function log(info) {
      console.log('The ' + info + ' event has been emited');
    }
  }]);

  return Logger;
}();
// export default Logger;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmmiter) {
  _inherits(Movie, _EventEmmiter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.title = title, _this.year = year, _this.duration = duration;
    _this.cast = [];
    return _this;
  }

  _createClass(Movie, [{
    key: 'play',
    value: function play() {
      this.emit('play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.emit('pause');
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.emit('resume');
    }
  }, {
    key: 'addCast',
    value: function addCast(actor) {
      //src: https://stackoverflow.com/questions/4775722/check-if-object-is-array
      if (Array.isArray(actor)) //check if is an array of actors
        {
          this.cast = this.cast.concat(actor);
        } else {
        this.cast.push(actor);
      }
    }
  }]);

  return Movie;
}(EventEmmiter);

// export default Movie;
"use strict";

var social = { // src : https://www.w3schools.com/js/js_objects.asp
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName + ".");
  },
  like: function like(friendName) {
    console.log(friendName + " likes " + this.title + ".");
  }
};

// export default social;

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
pulpFiction.addCast(newActor);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];
pulpFiction.addCast(otherCast);

console.log(pulpFiction.cast[0].name);

console.log(pulpFiction.cast[3].name + pulpFiction.cast[3].age );
