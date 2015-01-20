(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var COLOR = 'white';
  var RADIUS = 50;


  var Asteroid = Asteroids.Asteroid = function (obj) {
    if (typeof obj.color === "undefined") {
      obj.color = COLOR;
    }
    if (typeof obj.radius === "undefined") {
      obj.radius = RADIUS;
    }

    obj.vel = Asteroids.Utils.randomVec(5);
    Asteroids.MovingObject.call(this, obj);
  }
  Asteroids.Utils.inherits(Asteroids.MovingObject, Asteroid);

  Asteroid.prototype.isCollidedWith = function(otherMovingObject) {
    var distBetween = Asteroids.Utils.dist(this.pos, otherMovingObject.pos);

    var isCollided = distBetween < this.radius + otherMovingObject.radius;
    if (isCollided) {
      if (otherMovingObject instanceof Asteroids.Ship ) {
        otherMovingObject.relocate();
      } else if (otherMovingObject instanceof Asteroids.Bullet ) {
        this.game.remove(this);
      }
    }

    return isCollided;
  };

})();
