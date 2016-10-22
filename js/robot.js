"use strict";

//Base prototype
const Robot = function() {
  this.damage = null;
  this.health = null;
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
  this.healthRange = Math.floor(Math.random()*(60-30+1)+30);//health range between 30 and 60
  this.damageRange = Math.floor(Math.random()*(15-5+1)+5);//damage range between 5 and 15
  this.weapon = "Charge";
};

Warthog.prototype = new Drone();


const Hawk = function() {
  this.name = "Hawk";
  this.healthRange = Math.floor(Math.random()*(50-20+1)+20);//health range between 20 and 50
  this.damageRange = Math.floor(Math.random()*(18-3+1)+3);//damage range between 3 and 18
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
  this.healthRange = Math.floor(Math.random()*(75-20+1)+20);//health range between 20 and 75
  this.damageRange = Math.floor(Math.random()*(25-5+1)+5);//damage range between 5 and 25
  this.weapon = "Punch";
};

Kangaroo.prototype = new Bipedal();

const MAN = function() {
  this.name = "MAN";
  this.healthRange = Math.floor(Math.random()*(70-30+1)+30);//health range between 30 and 70
  this.damageRange = Math.floor(Math.random()*(20-3+1)+3);//damage range between 3 and 20
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
  this.healthRange = Math.floor(Math.random()*(65-30+1)+30);//health range between 30 and 65
  this.damageRange = Math.floor(Math.random()*(20-5+1)+5);//damage range between 5 and 20
  this.weapon = "Flamethrower";
};

Raptor.prototype = new ATV();

const Jeep = function() {
  this.name = "Jeep";
  this.healthRange = Math.floor(Math.random()*(80-20+1)+20);//health range between 20 and 80
  this.damageRange = Math.floor(Math.random()*(30-5+1)+5);//damage range between 5 and 30
  this.weapon = "Winch";
};

Jeep.prototype = new ATV();
