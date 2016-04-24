 $(document).ready(function() {
  
  var input = prompt("Please input a number")
  
  
  var output = function() {
  for (var i=1; i<101; i++ ) {
    if( i%3 === 0 && i%5 === 0) {
        $(".FizzBuzz").append("<li> FizzBuzz </li>");
    }
    else if (i%3 === 0) {
        $(".FizzBuzz").append("<li> Fizz </li>");
    } 
    else if (i%5 === 0) {
        $(".FizzBuzz").append("<li> Buzz </li>");
    }
    else {
        output = i;
        
    }
        console.log(output);
    }
}
}); 
 
 



