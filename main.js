// fetching data and changing the question! 
let h2 = document.querySelector("h2");

async function trivia(){
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    h2.innerText = data.results[0].question;
    return data.results[0].correct_answer;
}
const correctAnswer = trivia();


let button = document.querySelector("button");
button.addEventListener("click", trivia);


let input = document.querySelector("input");

let p = document.querySelector("#timer")


let count = 3;

timer = setInterval(function() {
    p.innerText = count--;
    if (count === -1) {
        clearInterval(timer);
        return p.innerText = "Time's up"
    } 
}, 1000);








// function timer(){
//     let sec = 30;
//     let timer = setInterval(function(){
//         p.innerText="00" +sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }

// timer();




// function Answer(string){
//     let stringinput = input.innerText
//     if (string === correctAnswer){
//         return "Well done - thats correct"
//     };
// }
// Answer()


// let result = trivia()
// console.log(result)



//console.log(correctAnswer)
// let questionsArray = []; 
// questionsArray.push(allData);
// let question = trivia(data.results[0-9].question)
// let correctAnswer = data.result[0-9].correct_answer
// 10 question, once the fucntion pulls this data. 
// we need to store the object/array which contains our questions
// in storing this object we need to run the array so everytime the player clicks a button they can move on to the next question.




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