function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function guessRandomNumber(numberId, targetId) {
    
    let randomNumber = getRandomNumber(1, 10);
    console.log(randomNumber);
    let givenNumber = parseFloat(document.getElementById(numberId));
    let target = document.getElementById(targetId);
    
    if (givenNumber === randomNumber) {
        target.innerHTML = "Good Work!";
    } else{
        target.innerHTML = "Wrong! Try Again.";
    }
}




















// same as the function above but more descriptive
// function getRandomNumber(min, max) {
//     // Calculate the range of possible numbers
//     var range = max - min + 1;
    
//     // Generate a random number within the range
//     var randomNumberInRange = Math.random() * range;
    
//     // Convert the random number to an integer
//     var randomNumberInteger = Math.floor(randomNumberInRange);
    
//     // Shift the random number to the desired range
//     var result = randomNumberInteger + min;
    
//     return result;
// }
