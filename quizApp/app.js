const quizData = [
  {
    id: "1",
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    a: "largest railway station",
    b: "highest railway station",
    c: "longest railway station",
    d: "None of the above",
    correct: "a",
  },
  {
    id: "2",
    question:
      "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
    a: "asia",
    b: "africa",
    c: "europe",
    d: "australia",
    correct: "b",
  },
  {
    id: "3",
    question: "Garampani sanctuary is located at",
    a: "Junagarh, Gujarat",
    b: "Diphu, Assam",
    c: "Kohima, Nagaland",
    d: "Gangtok, Sikkim",
    correct: "b",
  },
  {
    id: "4",
    question: "Who is Highest Rated Chess Player in the History",
    a: "Paul Morgan",
    b: "Mikhali Tal",
    c: "Magnus Carlsen",
    d: "Garry Kasparov",
    correct: "c",
  },
  {
    id: "5",
    question: "Entomology is the science that studies",
    a: "Behavior of human beings",
    b: "Insects",
    c: "The origin and history of technical and scientific terms",
    d: "The formation of rocks",
    correct: "b",
  },
];

const quizContainer = document.querySelector(".quiz-container");
const submit = document.querySelector(".submit");

let i = 0;

quizContainer.innerHTML = `<div class="ques-${quizData[i].id}">
            <p>Question ${quizData[i].id}: ${quizData[i].question}</p>
            <input type="radio" name="ques-${quizData[i].id}" id="option-1">
            <label for="a">a: ${quizData[i].a}</label><br>
            <input type="radio" name="ques-${quizData[i].id}" id="option-2">
            <label for="b">b: ${quizData[i].b}</label><br>
            <input type="radio" name="ques-${quizData[i].id}" id="option-3">
            <label for="c">c: ${quizData[i].c}</label><br>
            <input type="radio" name="ques-${quizData[i].id}" id="option-4">
            <label for="d">d: ${quizData[i].d}</label><br>
        </div>`;

submit.addEventListener("click", () => {
  if (i == 4) {
    i = 0;
    quizContainer.innerHTML = `<div class="ques-${quizData[i].id}">
                  <p>Question ${quizData[i].id}: ${quizData[i].question}</p>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-1">
                  <label for="a">a: ${quizData[i].a}</label><br>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-2">
                  <label for="b">b: ${quizData[i].b}</label><br>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-3">
                  <label for="c">c: ${quizData[i].c}</label><br>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-4">
                  <label for="d">d: ${quizData[i].d}</label><br>
              </div>`;
  } else {
    i += 1;
    quizContainer.innerHTML = `<div class="ques-${quizData[i].id}">
                  <p>Question ${quizData[i].id}: ${quizData[i].question}</p>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-1">
                  <label for="a">a: ${quizData[i].a}</label><br>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-2">
                  <label for="b">b: ${quizData[i].b}</label><br>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-3">
                  <label for="c">c: ${quizData[i].c}</label><br>
                  <input type="radio" name="ques-${quizData[i].id}" id="option-4">
                  <label for="d">d: ${quizData[i].d}</label><br>
              </div>`;
  }
});

// quizData.forEach((data) => {
//   quizContainer.innerHTML += `<div class="ques-${data.id}">
//             <p>Question ${data.id}</p>
//             <input type="radio" name="ques-${data.id}" id="option-1">
//             <label for="a">a: ${data.a}</label><br>
//             <input type="radio" name="ques-${data.id}" id="option-2">
//             <label for="b">b: ${data.b}</label><br>
//             <input type="radio" name="ques-${data.id}" id="option-3">
//             <label for="c">c: ${data.c}</label><br>
//             <input type="radio" name="ques-${data.id}" id="option-4">
//             <label for="d">d: ${data.d}</label><br>
//         </div>`;
// });
