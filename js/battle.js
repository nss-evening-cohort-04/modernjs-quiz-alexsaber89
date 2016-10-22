"use strict";

const attackBtn = $("#attack_btn_container");
const player1 = $("#player_1_robot");
const player2 = $("#player_2_robot");

attackBtn.hide();
console.log(player1.val());
console.log(player2.val());

function checkIfAttackBtnShouldNowBeVisible() {
  if (player1.val() !== "Select your robot" && player2.val() !== "Select your robot") {
    attackBtn.show();
    console.log("Attack Button should now be visible.");
  } else {
    console.log("Attack Button should not be visible yet.");
  }
}


//Events
player1.change(checkIfAttackBtnShouldNowBeVisible);
player2.change(checkIfAttackBtnShouldNowBeVisible);

attackBtn.click(function() {
  $("#battle").html("Lorem ipsum dolor sit amet, eum at senserit liberavisse, eripuit suscipit consectetuer per te.");
});
