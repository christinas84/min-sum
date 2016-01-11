function calculate() {
  var numInput = document.getElementById("qty").value;
  var numArray = numInput.split(" ").map(function(t) {
    return parseInt(t);
  });

  var minValue = Math.min.apply(null, numArray);
  var maxValue = Math.max.apply(null, numArray);
  var sumValue = numArray.reduce(function(previous, current) { return previous + current });
  var productValue = numArray.reduce(function(previous, current) { return previous * current });
  var meanValue = numArray.reduce(function(previous, current) { return previous + current / numArray.length });
  
  document.getElementById("result").innerHTML = 'Min value is: ' + minValue + '<br>' + 'Max value is: '+ maxValue + '<br>' + 'Sum value is: ' + sumValue + '<br>' + 'Product value is: ' + productValue + '<br>' + 'Mean value is: ' + meanValue; 

}
function clearAnswer(){
     document.getElementById("result").innerHTML = '';
     document.getElementById("qty").value = '';
   }

