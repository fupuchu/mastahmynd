var arr1 = [];
var arr2 = [];

var attempts = 0;

function compareArray() {
  attempts++;
  var x = arr2.join("")
  $("#history").append("<span>" + x + "</span>")
  $("#attemptBox").text(attempts);
  if(attempts === 10){
    console.log("You lose...");
    $('.btn').remove();
  }else{
    if (arr1.length == arr2.length) {
      for (var i = 0; i < arr2.length; i++) {
        if (arr1[i] == arr2[i]) {
          console.log(arr1[i] + " is equals to " + arr2[i]);
          $('#num' + i).addClass('correct');
          $('#num' + i).attr("readonly", true);
        }else{
          console.log(arr1[i] + " is not equals to " + arr2[i]);
          $('#num' + i).addClass('wrong');
        }
      }
    }else{
      console.log("Array not filled");
    }
  }
}
