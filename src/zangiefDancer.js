var Zangief = function (top, left, timeBetweenSteps) {
  FightingDancer.call(this, top, left, timeBetweenSteps);
};

Zangief.prototype = Object.create(FightingDancer.prototype);
Zangief.prototype.constructor = Zangief;

FightingDancer.prototype.specialMove = function() {
  //do something cool

};