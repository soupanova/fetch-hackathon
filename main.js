// fetching data
let h2 = document.querySelector("h2");
// h2.innerText = data.results[0].question;

async function trivia(){
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    console.log(data.results.question);
    return data.results.question;
}

let questions = trivia();

// 10 question, once the fucntion pulls this data. 
// we need to store the object/array which contains our questions
// in storing this object we need to run the array so everytime the player clicks a button they can move on to the next question.


let button = document.querySelector("button");
button.addEventListener("click", trivia)
// let result = trivia()
// console.log(result)



// function triviaQuestions() {

// }

// Trivia game --> Answer the question.

// 1. Display 10 questions on to the website.
// Using data.question
// Text input for the user to answer the questions 
// Display correct answer if user inputs incorrect one.
// Use prompt to display multiple choice options.....

// JS Changing the question....
// select the h2 tag using doc.querySelec
// h2.innerText = 
// {data.question} is the object from the API
// store the original data so we can have that somewhere treat it as an object. 
// interact with the event listerner 
// button.addeventlistner("click", )