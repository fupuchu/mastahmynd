var ansObj = {
  num0 : Math.floor(Math.random() * 5).toString(),
  num1 : Math.floor(Math.random() * 5).toString(),
  num2 : Math.floor(Math.random() * 5).toString(),
  num3 : Math.floor(Math.random() * 5).toString()
}

var userGuess = {
  num0 : null,
  num1 : null,
  num2 : null,
  num3 : null
}

var mainGuess = document.querySelectorAll('.numGuess');
var attempts = 0;
$("#attempCounter").text(attempts);


function pushToArr1(){
  arr1 = [];
  Object.keys(ansObj).forEach(function(key){
    arr1.push(ansObj[key]);
  })
}

pushToArr1();
giveHints();

var wrongInput = 0;
function checkAnswer(event){
  attempts+= 1;
  event.preventDefault();
  arr2 = [];
  Object.keys(mainGuess).forEach(function(num){
    var iterated = mainGuess[num];
    if (iterated.value < 6 && iterated.value >= 0 && iterated.value.length !== 0) {
      arr2.push(iterated.value);
    }else {
      arr2.push("X");
      wrongInput += 1;
    }
    compareArray();
  })
}
function changeAttr(y){
  $('#' + y).attr("readonly", true);
}
var fixedHints;
function giveHints(){
  var hints = arr1[Math.floor(Math.random()*arr1.length)];
  fixedHints = "One of the number is: " + hints;
  $("#alertBox").html("One of the number is: " + hints);
}

function resetGame(){
  attempts = 0;
  $("#attemptNum").text(attempts);
  Object.keys(ansObj).forEach(function(num){
    ansObj[num] = Math.floor(Math.random() * 6).toString()
  });
  pushToArr1();
  giveHints();
  document.getElementById('form').reset();
  var inputClass = document.querySelectorAll('.numGuess');
  inputClass.forEach(function(x){
    x.classList.remove('correct');
    x.classList.remove('wrong');
    x.removeAttribute('readonly');
  })
  $("#history").text("Awaiting player's guess..");
  $("#alertBox").removeClass("correct");
  $("#alertBox").removeClass("wrong");
  $('#reset').remove();
  $('.btn').show();
}
