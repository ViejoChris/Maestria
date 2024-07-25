const questions = [
    {
        question: "Si f(x) = 3x + 2, entonces f(1) = 5.",
        answer: true
    },
    {
        question: "La gráfica de una función lineal siempre es una línea recta.",
        answer: true
    },
    {
        question: "La función g(x) = x^2 - 4x + 4 tiene un mínimo en x = 2.",
        answer: true
    },
    {
        question: "La composición de dos funciones f y g siempre es conmutativa, es decir, f(g(x)) = g(f(x)).",
        answer: false
    },
    {
        question: "Si h(x) = x^3, entonces h(-2) = -8.",
        answer: true
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('quiz-container').classList.remove('hide');
    document.getElementById('result-container').classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = `
        <button onclick="selectAnswer(true)">Verdadero</button>
        <button onclick="selectAnswer(false)">Falso</button>
    `;
}

function selectAnswer(isTrue) {
    if (isTrue === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hide');
    document.getElementById('result-container').classList.remove('hide');
    document.getElementById('score').innerText = `${score} de ${questions.length}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function restartQuiz() {
    startQuiz();
}

document.addEventListener('DOMContentLoaded', (event) => {
    startQuiz();
});
