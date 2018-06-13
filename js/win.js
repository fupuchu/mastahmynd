var arr1 = [];
var arr2 = [];

var attempts = 9;
var winCounter = 0;
function compareArray() {
  var x = arr2.join("")
  $("#attemptBox").text(attempts);
  if (wrongInput > 0) {
    console.log("Replace the wrong input");
    attempts = attempts - 1;
  }
  if (attempts === 10) {
    console.log("You lose...");
    $('.btn').hide();
  } else {
    wrongInput = 0;
    if (arr1.length == arr2.length) {
      for (var i = 0; i < arr2.length; i++) {
        if (arr1[i] == arr2[i]) {
          console.log(arr1[i] + " is equals to " + arr2[i]);
          $('#num' + i).addClass('correct').removeClass('wrong');
          $('#num' + i).attr("readonly", true);
        } else {
          console.log(arr1[i] + " is not equals to " + arr2[i]);
          $('#num' + i).addClass('wrong');
        }
      }
      $("#history").append("<span>" + x + "</span>")
      checkWin();
    }
  }
}
function checkWin() {
  if (arr1.length !== arr2.length)
    console.log("Don't check");
  for (var i = arr1.length; i--;){
    if (arr1[i] !== arr2[i]) {
      console.log("arrays not same")
      break;
    }else if (arr1[i] === arr2[i]) {
      console.log("You win!");
      winCounter++
    }
  }
  if (winCounter === 4) {
    console.log("BIG WINNER!!!");
  }
}
