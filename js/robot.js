"use strict";

//Base prototype
const Robot = function() {
  this.damage = 50;
  this.health = 100;
  this.weapon = null;
  this.userName = null;
};


//Type: Drone
const Drone = function() {
  this.movement = "Aerial";
};

Drone.prototype = new Robot();

//Models
const Warthog = function() {
  this.name = "Warthog";
  this.healthRange = 50;
  this.damageRange = 20;
  this.weapon = "Charge";
};

Warthog.prototype = new Drone();


const Hawk = function() {
  this.name = "Hawk";
  this.healthRange = 600;
  this.damageRange = 20;
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
  this.healthRange = 30;
  this.damageRange = 20;
  this.weapon = "Punch";
};

Kangaroo.prototype = new Bipedal();

const MAN = function() {
  this.name = "MAN";
  this.healthRange = 35;
  this.damageRange = 20;
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
  this.healthRange = 40;
  this.damageRange = 20;
  this.weapon = "Flamethrower";
};

Raptor.prototype = new ATV();

const Jeep = function() {
  this.name = "Jeep";
  this.healthRange = 50;
  this.damageRange = 20;
  this.weapon = "Winch";
};

Jeep.prototype = new ATV();
