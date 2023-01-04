// Write a JavaScript function that accepts a string as a parameter 
// and counts the number of vowels within the string

function findVowels( sentence) {
//define what a vowel is
    const vowels = ['a', 'e', 'i', 'o', 'u'];
// turn the string into all lowercases and split them into individual letters
    const letters = sentence.toLowerCase().split('');
// make another varible to have a starting point to count 
    let numOfVowels = 0;
//make a parameter called letter to go through each item in letters
    letters.forEach(function(letter){
        if (vowels.includes(letter)){
            numOfVowels += 1;
        }
    })
    return numOfVowels
}

findVowels ('HUMPTY DUMPTY SAT ON A WALL')
