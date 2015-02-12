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
    this.gameInterval = setInterval(function() {
      that.game.checkCollisions();
      that.game.draw(that.ctx);
      that.game.moveObjects();
      that.checkGameOver();
    }, 100);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var that = this;
    key('up', function(){
      that.game.ship.power([0, -1]);
    });
    key('down', function(){
      that.game.ship.power([0, 1]);
    });
    key('left', function(){
      that.game.ship.power([-1, 0]);
    });
    key('right', function(){
      that.game.ship.power([1, 0]);
    });
    key('space', function(){
      that.game.ship.fireBullet();
    });
  };

  GameView.prototype.checkGameOver = function (ctx) {
    if (this.game.asteroids.length === 0) {
      this.ctx.fillStyle = "#FFF";
      this.ctx.font="20px Georgia";
      this.ctx.fillText("Good Job!",400,200);
      this.renderButton();
    };
  };

  GameView.prototype.renderButton = function () {
    var button = document.getElementById('restart');
    button.style.visibility= "visible";
    var that = this;
    button.onclick = function (event) {
      event.currentTarget.style.visibility= "hidden";
      clearInterval(that.gameInterval);
      that.game = new Asteroids.Game();
      that.start();
    };
  };
})();

var gv = new Asteroids.GameView();
gv.bindKeyHandlers();
gv.start();
