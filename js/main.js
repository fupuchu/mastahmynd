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

var wrongInput = 0;
function checkAnswer(event){
  attempts++;
  event.preventDefault();
  arr2 = [];
  Object.keys(mainGuess).forEach(function(num){
    var iterated = mainGuess[num];
    console.log(iterated.value);
    if (iterated.value < 10 && iterated.value >= 0) {
      arr2.push(iterated.value);
    }else {
      arr2.push("X");
      console.log("Wrong input for " + mainGuess[num].id);
      wrongInput++;
      console.log("Wrong Input Counter " + wrongInput);
    }
    compareArray();
  })
  function historicGuess(){
    var historyStr = arr2.join("");
    $('#history').appendTo
  }
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

function resetGame(){
  ansObj = {
    num0 : Math.floor(Math.random() * 10).toString(),
    num1 : Math.floor(Math.random() * 10).toString(),
    num2 : Math.floor(Math.random() * 10).toString(),
    num3 : Math.floor(Math.random() * 10).toString()
  }
  //foreach push new value
  userGuess = {
    num0 : null,
    num1 : null,
    num2 : null,
    num3 : null
  }
  //reset all values to null
  attempts = 0;
  // reset attempts
  //put the button back
  $('.btn').hide();
}
