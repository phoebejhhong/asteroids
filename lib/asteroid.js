(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (obj) {
    obj.color = obj.color || Asteroid.COLOR;
    obj.radius = obj.radius || Asteroid.RADIUS;
    obj.vel = Asteroids.Utils.randomVec(5);

    Asteroids.MovingObject.call(this, obj);
  }

  Asteroid.COLOR = 'white';
  Asteroid.RADIUS = 50;

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
