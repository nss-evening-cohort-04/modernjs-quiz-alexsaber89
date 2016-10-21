"use strict";

//Base prototype
const Robot = function() {
  this.damage = 50;
  this.health = 100;
  this.weapon = null;
};



//Type: Drone
const Drone = function() {
  this.movement = "Aerial";
};

Drone.prototype = new Robot();

//Models
const Warthog = function() {
  this.name = "Warthog";
  this.health += 50;
  this.damageRange = null;
};

Warthog.prototype = new Drone();


const Hawk = function() {
  this.name = "Hawk";
  this.healthRange = null;
  this.damageRange = null;
};

Hawk.prototype = new Drone();


//Type: Bipedal
const Bipedal = function() {
  this.movement = "Ground";
};

Bipedal.prototype = new Robot();

//Models



//Type: ATV
const ATV = function() {
  this.movement = "Ground";
};

ATV.prototype = new Robot();

//Models
