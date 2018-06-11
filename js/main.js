var ansObj = {
  num0 : Math.floor(Math.random() * 10).toString(),
  num1 : Math.floor(Math.random() * 10).toString(),
  num2 : Math.floor(Math.random() * 10).toString(),
  num3 : Math.floor(Math.random() * 10).toString()
}

console.log(ansObj);

var userGuess = {
  num0 : null,
  num1 : null,
  num2 : null,
  num3 : null
}

var attempts = 0;

function checkNum(num){
  var x = num.id;
  var ans = ansObj[x]
  console.log(num);
  if (num.value === ans) {
    console.log("Match");
    changeAttr(x);
    $('#' + x).addClass('correct')
    $('#' + x).data('state', 'correct')
    userGuess[x] = num.value;
    var currState = $('#' + x).data("state")
    console.log(currState);
    attemptCheck(currState);
  }else {
    console.log("No Match");
    changeAttr(x);
    $('#' + x).addClass('wrong')
    $('#' + x).data('state', "wrong")
    userGuess[x] = num.value;
    var currState = $('#' + x).data("state")
    console.log(currState);
    attemptCheck(currState);
  }
}
//comments
function attemptCheck(x){
  if ( x === 'correct') {
    console.log("Don't Change it");
  }else {
    console.log("Change this");
  }
}
//document.querySelector('#gameBoard').getAttribute('data-info')
// if class is == correct check for win classes and if classes = 4 , you win! else allow input to be edited again
function changeAttr(y){
  $('#' + y).attr("readonly", true);
}
