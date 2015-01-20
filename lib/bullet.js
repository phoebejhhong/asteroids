(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var COLOR = '#5F1AEF';
  var RADIUS = 5;

  var Bullet = Asteroids.Bullet = function(obj) {
    if (typeof obj.color === "undefined") {
      obj.color = COLOR;
    }
    if (typeof obj.radius === "undefined") {
      obj.radius = RADIUS;
    }

    Asteroids.MovingObject.call(this, obj);

  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, Bullet);

  Bullet.prototype.isWrappable = false;
  })();
