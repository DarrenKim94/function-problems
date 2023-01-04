// Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of 
// three print "Fizz" instead of the number and for the multiples of five print "Buzz". For 
// numbers that are multiples of both three and five print "FizzBuzz".

// dont need an argument because we just need to call the function
function fizzBuzz() {
// loop from 1 to 100 by 1
    for (let i = 1; i <= 100; i++) {
// write an if statement that makes condition true only if both modulos are true
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'FizzBuzz');
        }
// write else if statements seperatley to give them their own console.logs
        else if (i % 3 === 0) {
            console.log(i, 'fizz');
        }
        else if (i % 5 === 0) {
            console.log(i, 'buzz');
        }
    }
}

// fizzBuzz ()

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//       let str = "";
      
//       if (i % 3 === 0) {
//           str += 'fizz';
//       }

//       if (i % 5 === 0) {
//           str += 'buzz';
//       }
//       console.log(i, str)
//     }
// }