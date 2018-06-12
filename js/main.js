var ansObj = {
  num0 : Math.floor(Math.random() * 10).toString(),
  num1 : Math.floor(Math.random() * 10).toString(),
  num2 : Math.floor(Math.random() * 10).toString(),
  num3 : Math.floor(Math.random() * 10).toString()
}
var userGuess = {
  num0 : null,
  num1 : null,
  num2 : null,
  num3 : null
}

var mainGuess = document.querySelectorAll('.numGuess');
$("#attemptBox").text(attempts);

console.log(ansObj);

function pushToArr1(){
  arr1 = [];
  Object.keys(ansObj).forEach(function(key){
    arr1.push(ansObj[key]);
  })
}

pushToArr1();

function checkAnswer(){
  arr2 = [];
  Object.keys(mainGuess).forEach(function(num){
    var iterated = mainGuess[num];
    console.log(iterated.value);
    arr2.push(iterated.value);
  })
  function historicGuess(){
    var historyStr = arr2.join("");
    $('#history').appendTo
  }
  compareArray();
}

var userGuess = {
  num0 : null,
  num1 : null,
  num2 : null,
  num3 : null
}

function attemptCheck(x){
  if ( x === 'correct') {
    console.log("Don't Change it");
  }else {
    console.log("Change this");
  }
}
function changeAttr(y){
  $('#' + y).attr("readonly", true);
}
