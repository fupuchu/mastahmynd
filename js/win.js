var arr1 = [];
var arr2 = [];

var attempts = 0;
var winCounter = 0;

function compareArray() {
  var x = arr2.join("")

  if (arr2.length === 4) {
    console.log('arr2 length is 4');
    if (arr2.includes("n")) {
      attempts -= 1;
    }
    $("#attemptCounter").text(attempts);
  };

  if (wrongInput > 0) {
    //put in html element to say there was a wrong input
    console.log("Replace the wrong input");
    console.log("current attempts " + attempts);
  }
  if (attempts === 10) {
    console.log("You lose...");
    $('.btn').hide();
  } else {
    wrongInput = 0;
    if (arr1.length == arr2.length) {
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
  for (var i = arr1.length; i--;){
    if (arr1[i] !== arr2[i]) {
      console.log("arrays not same")
      break;
    }else if (arr1[i] === arr2[i]) {
      console.log("You win!");
      winCounter += 1;
    }
  }
  if (winCounter === 4) {
    console.log("BIG WINNER!!!");
    $('.btn').hide();
  }
}
