// Write a JavaScript function that accepts two arguments, a string and a letter and the 
// function will count the number of occurrences of the specified letter within the string. 

function letterAmount (str, letter){
// Define a variable to start at 0 to count
    let letterCount = 0
// Define a variable to take the string, lowercase and seperate each letter individually
    let arrayOfLetters = str.toLowerCase().split('');
// for each loop with a random name of element to know what im looping through
    arrayOfLetters.forEach(function(element) {
// checks the string to see if it has the letter, if it does add one to letterCount
// lowercase the letter argument
        if (letter.toLowerCase().includes(element)){
            letterCount += 1
        }
    })
    return letterCount
}

letterAmount ('I love You', 'o')