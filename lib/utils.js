(function () {
   if (typeof Asteroids === "undefined") {
     window.Asteroids = {};
   }

   var Utils = window.Asteroids.Utils = {};

   Utils.inherits = function (parentClass, childClass) {
    function Surrogate () {};
    Surrogate.prototype = parentClass.prototype
    childClass.prototype = new Surrogate();
  };

  Utils.dist = function (p1, p2) {
    return Math.sqrt((Math.pow((p1[0] - p2[0]), 2) + Math.pow((p1[1] - p2[1]), 2)));
  };

  Utils.randomVec = function (length) {
    var angle = Math.random() * 2 * Math.PI
    var new_x =  length * Math.cos(angle);
    var new_y =  length * Math.sin(angle);
    return [new_x, new_y];
  };

  Utils.norm = function (pos) {
    return Math.sqrt( Math.pow(pos[0], 2) +  Math.pow(pos[1], 2));
  }

  Utils.normalize = function (vec) {
    return [vec[0]/Utils.norm(vec), vec[1]/Utils.norm(vec)];
  }
})();
