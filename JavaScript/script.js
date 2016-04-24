 $(document).ready(function() {
  var output
  for (var i=1; i<101; i++ ) {
    if( i%3 === 0 && i%5 === 0) {
        $(".FizzBuzz").append("<li> FizzBuzz </li>");
    }
    else if (i%3 === 0) {
        output = "Fizz";
    } 
    else if (i%5 === 0) {
        output = "Buzz";
    }
    else {
        output = i;
        
    }
    console.log(output);
  }
  
 }); 
 
 



