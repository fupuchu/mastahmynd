var ansObj = {
  num0 : Math.floor(Math.random() * 10).toString(),
  num1 : Math.floor(Math.random() * 10).toString(),
  num2 : Math.floor(Math.random() * 10).toString(),
  num3 : Math.floor(Math.random() * 10).toString()
}

var correctCount;
var wrongCount;
var mainGuess = document.querySelectorAll('.numGuess');
var userGuess = {
  num0 : null,
  num1 : null,
  num2 : null,
  num3 : null
}

var attempts = 0;


function pushToArr1(){
  arr1 = [];
  Object.keys(ansObj).forEach(function(key){
    console.log(ansObj[key]);
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
  compareArray();
}

console.log(ansObj);

var userGuess = {
  num0 : null,
  num1 : null,
  num2 : null,
  num3 : null
}

var attempts = 0;

//checks if the class is correct
function attemptCheck(x){
  if ( x === 'correct') {
    console.log("Don't Change it");
  }else {
    console.log("Change this");
  }
}
//document.querySelector('#gameBoard').getAttribute('data-info')
// if class is == correct check for win data-state and if data-state = 4 , you win! else allow input to be edited again, might need to move it somewhere else to check overall
function changeAttr(y){
  $('#' + y).attr("readonly", true);
}

//seperate counter, add one counter at then end of every 4 guesses.
