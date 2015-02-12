(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function () {
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({game: this});
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 400;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    //TODO asteroids shouldn't appear in the center (where the ship stars)
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++){
      var randomPos = [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
      this.asteroids.push(new Asteroids.Asteroid({pos: randomPos, game: this}));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "#5F1AEF";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].draw(ctx);
    }
  };

  Game.prototype.moveObjects = function () {
    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].move();
    }
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship).concat(this.bullets);
  };

  Game.prototype.wrap = function (pos) {
    //TODO smooth wrapping
    if (pos[0] <= 0) {
      pos[0] = Game.DIM_X;
    } else if (pos[0] >= Game.DIM_X) {
      pos[0] = 0;
    }
    if (pos[1] <= 0) {
      pos[1] = Game.DIM_Y;
    } else if (pos[1] >= Game.DIM_Y) {
      pos[1] = 0;
    }
    return pos;
  };

  Game.prototype.isOutOfBounds = function (pos) {
    var flag = false;
     if (pos[0] <= 0) {
      flag = true;
    } else if (pos[0] >= Game.DIM_X) {
      flag = true;
    }
    if (pos[1] <= 0) {
      flag = true;
    } else if (pos[1] >= Game.DIM_Y) {
      flag = true;
    }
    return flag;
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        this.allObjects()[i].isCollidedWith(this.allObjects()[j]);
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (object) {
    if (object instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(object);
      this.asteroids = this.asteroids.slice(0, idx).concat(this.asteroids.slice(idx + 1));
    } else if (object instanceof Asteroids.Bullet) {
      var idx = this.bullets.indexOf(object);
      this.bullets = this.bullets.slice(0, idx).concat(this.bullets.slice(idx + 1));
    }
  };

})();
