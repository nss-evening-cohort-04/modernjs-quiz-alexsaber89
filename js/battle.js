"use strict";

const attackBtnDiv = $("#attack_btn_container");
const attackBtn = $("#attack_btn");
const playerOneRobotChoices = $("#player_1_robot");
const playerOneRobotName = $("#player_1_name_input");
const playerTwoRobotChoices = $("#player_2_robot");
const playerTwoRobotName = $("#player_2_name_input");
const battleDetails = $("#battle");
let numberOfTurns = 0;
let playerOne = "";
let playerTwo = "";

//Functions
function checkIfUsersEnteredNames() {
  if(playerOneRobotName.val() !== "" && playerTwoRobotName.val() !== "") {
    console.log("Both users have entered their name.");
    checkIfAttackBtnShouldNowBeVisible();
  } else {
    window.alert("Please enter a name for each user.");
  }
}

function checkIfAttackBtnShouldNowBeVisible() {
  if (playerOneRobotChoices.val() !== "Select your robot" && playerTwoRobotChoices.val() !== "Select your robot") {
    attackBtnDiv.removeClass("invisible");
    attackBtnDiv.addClass("visible");
    console.log("Attack Button should now be visible.");
    playerOne = createNewPlayerObject(playerOneRobotChoices.val());
    playerOne.userName = playerOneRobotName.val();
    playerTwo = createNewPlayerObject(playerTwoRobotChoices.val());
    playerTwo.userName = playerTwoRobotName.val();
    console.log("playerOne: ",playerOne);
    console.log("playerTwo: ",playerTwo);
  } else {
    console.log("Attack Button should not be visible yet.");
  }
}

function createNewPlayerObject(playerChoice) {
  let player = "";
  switch (playerChoice) {
    case "Warthog":
      player = new Warthog();
      console.log(`New ${player.name} created`);
      break;
    case "Hawk":
      player = new Hawk();
      console.log(`New ${player.name} created`);
      break;
    case "Kangaroo":
      player = new Kangaroo();
      console.log(`New ${player.name} created`);
      break;
    case "MAN":
      player = new MAN();
      console.log(`New ${player.name} created`);
      break;
    case "Raptor":
      player = new Raptor();
      console.log(`New ${player.name} created`);
      break;
    case "Jeep":
      player = new Jeep();
      console.log(`New ${player.name} created`);
      break;
  }
  return player;
}

function displayBattleDetails() {
  numberOfTurns++;
  playerOne.healthRange -= playerTwo.damageRange;
  playerTwo.healthRange -= playerOne.damageRange;
  if(playerTwo.healthRange < 1) {
    $("#myModal").modal('show');
    $("#myModalLabel").html(`${playerOne.userName} wins!<br />`);
    $("#myModalLabel").append(`  Health Remaining:  ${playerOne.userName} = ${playerOne.healthRange}`);
    $("#myModalLabel").append(`  ${playerTwo.userName}: ${playerTwo.healthRange}`);
  } else if (playerOne.healthRange < 1) {
    $("#myModal").modal('show');
    $("#myModalLabel").html(`${playerTwo.userName} wins!<br />`);
    $("#myModalLabel").append(`  ${playerTwo.userName}: ${playerTwo.healthRange}`);
    $("#myModalLabel").append(`  Health Remaining:  ${playerOne.userName}: ${playerOne.healthRange}`);
  } else {
    battleDetails.html(`Turn ${numberOfTurns}: ${playerOne.userName} attacked ${playerTwo.userName} with ${playerOne.weapon} for ${playerOne.damageRange} damage (${playerTwo.healthRange} health remaining)`);
    battleDetails.append(`  ${playerTwo.userName} attacked ${playerOne.userName} with ${playerTwo.weapon} for ${playerTwo.damageRange} damage (${playerOne.healthRange} health remaining)`);
  }
}


//Events
playerOneRobotChoices.change(checkIfUsersEnteredNames);
playerTwoRobotChoices.change(checkIfUsersEnteredNames);
attackBtn.click(displayBattleDetails);
