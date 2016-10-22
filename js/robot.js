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
  this.weapon = "Charge";
};

Warthog.prototype = new Drone();


const Hawk = function() {
  this.name = "Hawk";
  this.healthRange = null;
  this.damageRange = null;
  this.weapon = "Talons";
};

Hawk.prototype = new Drone();


//Type: Bipedal
const Bipedal = function() {
  this.movement = "Ground";
};

Bipedal.prototype = new Robot();

//Models
const Kangaroo = function() {
  this.name = "Kangaroo";
  this.healthRange = null;
  this.damageRange = null;
  this.weapon = "Punch";
};

Kangaroo.prototype = new Bipedal();

const MAN = function() {
  this.name = "M.A.N.";
  this.healthRange = null;
  this.damageRange = null;
  this.weapon = "Knowledge";
};

MAN.prototype = new Bipedal();


//Type: ATV
const ATV = function() {
  this.movement = "Ground";
};

ATV.prototype = new Robot();

//Models
const Raptor = function() {
  this.name = "Raptor";
  this.healthRange = null;
  this.damageRange = null;
  this.weapon = "Flamethrower";
};

Raptor.prototype = new ATV();

const Jheep = function() {
  this.name = "Jheep";
  this.healthRange = null;
  this.damageRange = null;
  this.weapon = "Winch";
};

Jheep.prototype = new ATV();
