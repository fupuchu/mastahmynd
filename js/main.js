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
$("#attempCounter").text(attempts);

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
  attempts+= 1;
  event.preventDefault();
  arr2 = [];
  Object.keys(mainGuess).forEach(function(num){
    var iterated = mainGuess[num];
    console.log(iterated.value);
    if (iterated.value < 10 && iterated.value >= 0 && iterated.value.length !== 0) {
      arr2.push(iterated.value);
    }else {
      arr2.push("n");
      wrongInput += 1;
    }
    compareArray();
  })
}
function changeAttr(y){
  $('#' + y).attr("readonly", true);
}

function resetGame(){
  Object.keys(ansObj).forEach(function(num){
    ansObj[num] = Math.floor(Math.random() * 10).toString()
  });
  // Object.keys(userGuess).forEach(function(num){
  //   userGuess[num] = null,
  // });
  attempts = 0;
  // reset attempts
  //put the button back
  $('.btn').show();
}
