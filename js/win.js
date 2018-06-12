var arr1 = ["1","2","3","4"]
var arr2 = ["1","2","3","5"]



function compareArray() {
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


var testClass = ["correct","correct","correct","correct"]
