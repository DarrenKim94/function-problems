//Write a function that accepts a string as a parameter
//Find the longest word within the string

//Name the function and set a parameter
function findLongestWord (string) {
    //take the string and split the sentence into an array of individual strings of words
    //Do so by using ' ', so that it doesnt take letters instead
    let words = string.split(' ')
    //Name another variable to compare the longest word to the array of words
    //set a variable to '' so thats the item is purpuseledy left out until
    //it is defined at the end
    let longestWord = ''
    //Start a loop starting at the index of 0 ending at the last worrd in the array
    for (let i = 0; i < words.length; i++) {
        //Write an if statement to compare the current longestWord to the next
        if (words[i].length > longestWord.length) {
            //if the current word in the loop is the longest, make it the longestWord
            longestWord = words[i]
        }
    }
    return longestWord
}

//Call the function and set the parememter wth any string
findLongestWord('I want to go play basketball')
