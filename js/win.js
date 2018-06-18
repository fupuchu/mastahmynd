var arr1 = [];
var arr2 = [];

var winCounter = 0;

function compareArray() {
  $('#alertBox').text(fixedHints);
  var x = arr2.join("")
  if (arr2.length === 4) {
    if (arr2.includes("X")) {
      attempts -= 1;
      var inputClass = document.querySelectorAll('.numGuess');
      inputClass.forEach(function(x){
        x.classList.remove('correct');
        x.classList.remove('wrong');
        x.classList.add('default');
      })
    }else {
      winCounter = 0;
      $("#alertBox").removeClass("wrong");
      for (var i = 0; i < arr2.length; i++) {
        if (arr1[i] == arr2[i]) {
          $('#num' + i).addClass('correct').removeClass('wrong');
          $('#num' + i).attr("readonly", true);
          $('#num' + i).removeClass('default');
        } else {
          $('#num' + i).removeClass('default');
          $('#num' + i).addClass('wrong');
          $('#num' + i).val(null);
        }
      }
      $("#history").text(x);
      checkWin();
    }
    $("#attemptNum").text(attempts);
  };
  if (wrongInput > 0 && arr2.length === 4 && arr2.includes("X")) {
    alertChange();
    $("#history").text(x);
  }
  if (attempts <= 5 && attempts >= 4 && arr2.length === 4) {
    warnBg();
  }else if (attempts === 10 && arr2.length === 4) {
    dangerBg();
    alertLose();
    $('.btn').hide();
  }
}


function checkWin() {
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
    } else if (arr1[i] === arr2[i]) {
      winCounter += 1;
    }
  }
  if (winCounter === 4) {
    alertWin();
    $('.btn').hide();
  }
}


function dangerBg(){
  $('body').css('background-color', 'rgb(156, 31, 31)');
}
function warnBg(){
  $('body').css('background-color', 'rgba(204, 121, 23, 0.89)');
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
