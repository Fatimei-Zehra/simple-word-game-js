const questions = [
  { question: "What is the capital of Azerbaijan?", answer: "Baku" },
  { question: "What year are we in?", answer: "2024" },
  { question: "May we have a break?", answer: "Yes" },
];

const questionBox = document.getElementById("question");
const result = document.getElementById("result");
const button = document.getElementById("button");
const input = document.getElementById("input").value;

let index = 0;

function display() {
  questionBox.innerHTML = "";
  questionBox.textContent = questions[index].question;
}
display();

button.addEventListener("click", function find(e) {
  e.preventDefault();
  const currentQuestion = questions[index];
  const inputVal = document.getElementById("input").value;
  if (inputVal === currentQuestion.answer) {
    result.textContent = "The answer is correct";
    index++;
    display();

  } else {
    result.textContent = "The answer is false";
  }

});



















// let Words = ["Mekka", "PARİS", "TOKYO", "LONDRA", "DUBAI"];

// let body = document.querySelector("boyd");
// let button = document.getElementById("button");

// button.addEventListener("click", function () {
//   let userInput = document.getElementById("wordInput");
//   let result = document.getElementById("result");
//   if (userInput.value == Words[0]) {
//     result.textContent = "Congratulations, that's the right word!";
//     result.style.color = "green";
//     document.body.style.background = "url('img/makka.jpg')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundRepeat = "no-repeat";
//   }
//  else if (userInput.value == Words[1]) {
//     result.textContent = "Congratulations, that's the right word!";
//     result.style.color = "green";
//     document.body.style.background = "url('img/paris.webp')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundRepeat = "no-repeat";
//   }
//  else if (userInput.value == Words[2]) {
//     result.textContent = "Congratulations, that's the right word!";
//     result.style.color = "green";
//     document.body.style.background = "url('img/tokyo.JPEG')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundRepeat = "no-repeat";
//   }
//  else if (userInput.value == Words[3]) {
//     result.textContent = "Congratulations, that's the right word!";
//     result.style.color = "green";
//     document.body.style.background = "url('img/londra.jpg')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundRepeat = "no-repeat";
//   }
//   else if (userInput.value == Words[4]) {
//     result.textContent = "Congratulations, that's the right word!";
//     result.style.color = "green";
//     document.body.style.background = "url('img/dubay.avif')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundRepeat = "no-repeat";
//   }
//    else {
//     result.textContent = "Sorry, wrong word. Try another word.";
//     result.style.color = "red";
//   }
// });
