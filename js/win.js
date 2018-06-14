var arr1 = [];
var arr2 = [];

var attempts = 0;
var winCounter = 0;

function compareArray() {
  $('#alertBox').text(fixedHints);
  var x = arr2.join("")
  if (arr2.length === 4) {
    if (arr2.includes("X")) {
      attempts -= 1;
    }
    console.log("current" + attempts);
    $("#attemptNum").text(attempts);
  };
  if (wrongInput > 0) {
    alertChange();
  }
  if (attempts === 10) {
    alertLose();
    $('.btn').hide();
  } else {
    wrongInput = 0;
    if (arr1.length == arr2.length) {
      winCounter = 0;
      for (var i = 0; i < arr2.length; i++) {
        if (arr1[i] == arr2[i]) {
          $('#num' + i).addClass('correct').removeClass('wrong');
          $('#num' + i).attr("readonly", true);
        } else {
          $('#num' + i).addClass('wrong');
        }
      }
      $("#history").text(x);
      checkWin();
    }
  }
}
function checkWin() {
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      console.log("Wrong number! " + arr2[i])
    } else if (arr1[i] === arr2[i]) {
      winCounter += 1;
      console.log(winCounter);
    }
  }
  if (winCounter == 4) {
    alertWin();
    $('.btn').hide();
  }
}

function alertChange(){
  $("#alertBox").html("Invalid Input!").addClass("wrong");
}
function alertLose(){
  var icon = "<i class=\"fas fa-times-square\"></i>"
  var answer = arr1.join("");
  $("#alertBox").html(icon + " You lose! " + icon + "<br>The correct number is " + answer).addClass("wrong");
  $('#mainGuess').append("<div id=\"reset\" onclick=\"resetGame()\">Try Again?</div>")
}
function alertWin(){
  var icon = "<i class=\"fal fa-smile\"></i>"
  $("#alertBox").html(icon +  " You win! " + icon).addClass("correct");
  $('#mainGuess').append("<div id=\"reset\" onclick=\"resetGame()\">Try Again?</div>")
}
