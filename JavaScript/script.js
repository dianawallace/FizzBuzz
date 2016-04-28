jQuery(document).ready(function($) {
  
    var input = prompt("Please input a number");
    input = parseInt(input);
  
    var fizzBuzz = function(number) {  
        var output;
        for (var i=1; i<=number; i++ ) {
            if( i%3 === 0 && i%5 === 0) {
                output = '<li> FizzBuzz </li>';
            } else if (i%3 === 0) {
                output = '<li> Fizz </li>';
            } else if (i%5 === 0) {
                output = '<li> Buzz </li>';
            } else {
                output = '<li> ' + i + ' </li>';
            }
            $('.FizzBuzz').append(output);  
        }
    };
    fizzBuzz(input);
}); 
 
 



