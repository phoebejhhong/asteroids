(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (obj) {
    obj.radius = obj.radius || Ship.RADIUS;
    obj.color = obj.color || Ship.COLOR;
    obj.pos = [400, 200];
    obj.vel = [0,0];
    //TODO remove hard coded vals.
    Asteroids.MovingObject.call(this, obj);
  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, Ship);

  Ship.RADIUS = 20;
  Ship.COLOR = '#5F1AEF';

  Ship.prototype.relocate = function () {
    this.pos = [400, 200];
    this.vel = [0,0];
  };

  Ship.prototype.power = function (impulse) {
    var vel_x = impulse[0] + this.vel[0];
    var vel_y = impulse[1] + this.vel[1];
    this.vel = [vel_x, vel_y];
  };

  Ship.prototype.fireBullet = function () {
    var dir = Asteroids.Utils.normalize(this.vel);
    var offset_x =(dir[0] * this.radius);
    var offset_y =(dir[1]* this.radius);
    var new_pos = [this.pos[0] +  offset_x ,this.pos[1] + offset_y ];
    var new_vel = [this.vel[0] * 10, this.vel[1] * 10];
    var bullet = new Asteroids.Bullet({pos: new_pos, vel: new_vel , game: this.game });
    this.game.bullets.push(bullet);
  };
})();
