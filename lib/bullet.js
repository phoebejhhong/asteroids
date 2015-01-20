(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (obj) {
    obj.radius = obj.radius || Bullet.RADIUS;
    obj.color = obj.color || Bullet.COLOR;

    Asteroids.MovingObject.call(this, obj);
  };

  Bullet.COLOR = '#5F1AEF';
  Bullet.RADIUS = 5;

  Asteroids.Utils.inherits(Asteroids.MovingObject, Bullet);

  Bullet.prototype.isWrappable = false;

})();
