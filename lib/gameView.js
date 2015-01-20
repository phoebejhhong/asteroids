(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function () {
    this.game = new Asteroids.Game();
    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
  };

  GameView.prototype.start = function () {
    var that = this;
    that.game.draw(that.ctx);
    that.bindKeyHandlers();
    setInterval(function() {
      that.game.checkCollisions();
      that.game.draw(that.ctx);
      that.game.moveObjects();
    }, 100);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var that = this;
    key('up', function(){
      that.game.ship.power([0, -0.5]);
    });
    key('down', function(){
      that.game.ship.power([0, 0.5]);
    });
    key('left', function(){
      that.game.ship.power([-0.5, 0]);
    });
    key('right', function(){
      that.game.ship.power([0.5, 0]);
    });
    key('space', function(){
      that.game.ship.fireBullet();
    });
  }
})();

var gv = new Asteroids.GameView();
gv.start();
