const questions = [
    {
        question: "Is it better to have a cluttered kitchen?",
        type: "truefalse",
        answer: true,
    },
    {
        question: "Which item should you keep in your entryway?",
        type: "multiple",
        options: ["Umbrella", "Toaster", "Fridge"],
        answer: "Umbrella",
    },
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElem = document.getElementById("question");
    const optionsElem = document.getElementById("options");

    const current = questions[currentQuestion];
    questionElem.innerText = current.question;

    optionsElem.innerHTML = "";
    if (current.type === "truefalse") {
        optionsElem.innerHTML += `
            <button onclick="checkAnswer(true)">True</button>
            <button onclick="checkAnswer(false)">False</button>
        `;
    } else if (current.type === "multiple") {
        current.options.forEach(option => {
            optionsElem.innerHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
        });
    }
}

function checkAnswer(answer) {
    const current = questions[currentQuestion];
    if (current.type === "truefalse" && answer === current.answer) {
        alert("Correct!");
    } else if (current.type === "multiple" && answer === current.answer) {
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz complete!");
        // Optionally reset the quiz or show results
    }
}

window.onload = displayQuestion;
