"use strict";

const attackBtn = $("#attack_btn_container");
const playerOneRobotChoice = $("#player_1_robot");
const playerOneRobotName = $("#player_1_name_input");
const playerTwoRobotChoice = $("#player_2_robot");
const playerTwoRobotName = $("#player_1_name_input");

attackBtn.hide();

function checkIfUsersEnteredNames() {
  if(playerOneRobotName.val() !== "" && playerTwoRobotName.val() !== "") {
    checkIfAttackBtnShouldNowBeVisible();
    console.log("Both users have entered their name.");
  } else {
    window.alert("Please enter a name for each user.");
  }
}

function checkIfAttackBtnShouldNowBeVisible() {
  if (playerOneRobotChoice.val() !== "Select your robot" && playerTwoRobotChoice.val() !== "Select your robot") {
    attackBtn.show();
    console.log("Attack Button should now be visible.");
  } else {
    console.log("Attack Button should not be visible yet.");
  }
}


//Events
playerOneRobotChoice.change(checkIfUsersEnteredNames);
playerTwoRobotChoice.change(checkIfUsersEnteredNames);

attackBtn.click(function() {
  $("#battle").html("Lorem ipsum dolor sit amet, eum at senserit liberavisse, eripuit suscipit consectetuer per te.");
});
