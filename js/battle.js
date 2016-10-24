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
    playerOneRobotChoices.removeClass("invisible");
    playerTwoRobotChoices.removeClass("invisible");
    playerOneRobotChoices.addClass("visible");
    playerTwoRobotChoices.addClass("visible");
  }
}

function checkIfAttackBtnShouldNowBeVisible() {
  if (playerOneRobotChoices.val() !== "Select your robot" && playerTwoRobotChoices.val() !== "Select your robot") {
    attackBtnDiv.removeClass("invisible");
    attackBtnDiv.addClass("visible");
    playerOne = createNewPlayerObject(playerOneRobotChoices.val());
    playerOne.userName = playerOneRobotName.val();
    playerTwo = createNewPlayerObject(playerTwoRobotChoices.val());
    playerTwo.userName = playerTwoRobotName.val();
  }
}

function createNewPlayerObject(playerChoice) {
  let player = "";
  switch (playerChoice) {
    case "Warthog":
      player = new Warthog();
      break;
    case "Hawk":
      player = new Hawk();
      break;
    case "Kangaroo":
      player = new Kangaroo();
      break;
    case "MAN":
      player = new MAN();
      break;
    case "Raptor":
      player = new Raptor();
      break;
    case "Jeep":
      player = new Jeep();
      break;
  }
  return player;
}

function displayBattleDetails() {
  numberOfTurns++;
  playerOne.healthRange -= playerTwo.damageRange;
  playerTwo.healthRange -= playerOne.damageRange;
  battleDetails.html(`Turn ${numberOfTurns}: ${playerOne.userName} (${playerOne.healthRange} health) attacked ${playerTwo.userName} with ${playerOne.weapon} for ${playerOne.damageRange} damage.`);
  battleDetails.append(`  ${playerTwo.userName} (${playerTwo.healthRange} health) attacked ${playerOne.userName} with ${playerTwo.weapon} for ${playerTwo.damageRange} damage.`);
  if(playerTwo.healthRange < 1) {
    displayWinnerModal(playerOne.userName);
  } else if (playerOne.healthRange < 1) {
    displayWinnerModal(playerTwo.userName);
  }
}

function displayWinnerModal(winner) {
  $("#myModal").modal('show');
  $("#myModalLabel").html(`${winner} wins!`);
}


//Events
playerOneRobotName.keyup(checkIfUsersEnteredNames);
playerTwoRobotName.keyup(checkIfUsersEnteredNames);
playerOneRobotChoices.change(checkIfAttackBtnShouldNowBeVisible);
playerTwoRobotChoices.change(checkIfAttackBtnShouldNowBeVisible);
attackBtn.click(displayBattleDetails);
