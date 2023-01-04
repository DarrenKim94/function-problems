// Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of 
// three print "Fizz" instead of the number and for the multiples of five print "Buzz". For 
// numbers that are multiples of both three and five print "FizzBuzz".

// dont need an argument because we just need to call ghd function
// Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of 
// three print "Fizz" instead of the number and for the multiples of five print "Buzz". For 
// numbers that are multiples of both three and five print "FizzBuzz".

// dont need an argument because we just need to call ghd function
function fizzBuzz () {
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log(i, 'fizz');
        }
        else if (i % 5 === 0) {
            console.log(i, 'buzz');
        }
    }
}

fizzBuzz ()