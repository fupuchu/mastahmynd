var ansObj = {
  num1 : Math.floor(Math.random() * 10).toString(),
  num2 : Math.floor(Math.random() * 10).toString(),
  num3 : Math.floor(Math.random() * 10).toString(),
  num4 : Math.floor(Math.random() * 10).toString()
}

console.log(ansObj);

var userGuess = {
  num1 : null,
  num2 : null,
  num3 : null,
  num4 : null
}

var attempts = 0;

function checkNum(num){
  var x = num.id;
  var ans = ansObj[x]
  if (num.value === ans) {
    console.log("Match");
    changeAttr(x);
    $('#' + x).addClass('correct')
    userGuess[x] = num.value;
  }else {
    console.log("No Match");
    changeAttr(x);
    $('#' + x).addClass('wrong')
    userGuess[x] = num.value;
  }
}

// JSON.stringify

function changeAttr(y){
  $('#' + y).attr("readonly", true);
}
