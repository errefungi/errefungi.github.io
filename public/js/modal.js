//MODAL PARA OBTENER LAS RESPUESTAS
const questions = [
    ["¿Qué crees que crees?", "entry.400511360"],
    ["¿Por qué crees lo que crees?", "entry.727744548"],
    ["¿Qué valores consideras fundamentales en tu vida?", "entry.687311374"],
    ["¿Qué te motiva a seguir aprendiendo y creciendo?", "entry.1065397444"],
    ["¿Cómo te gustaría contribuir al mundo en 3 palabras?", "entry.1131274132"],
    ["¿Cuál es tu filosofía de vida en 3 palabras?", "entry.1974077437"],
    ["¿Cómo te relacionas con la naturaleza y el medio ambiente?", "entry.188638610"],
    ["¿Qué te inspira a ser una mejor persona?", "entry.2079223886"],
];


function getWeeklyQuestion() {
    // Obtén el número de la semana actual
    const currentDate = new Date();
    const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const pastDaysOfYear = (currentDate - firstDayOfYear) / 86400000;
    const currentWeekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);

    // Selecciona una pregunta del array basada en el número de la semana actual
    const questionIndex = currentWeekNumber % questions.length;
    return questions[questionIndex];
}
document.addEventListener("DOMContentLoaded", () => {
    const questionLabel = document.getElementById("question-label");
    // Selecciona el elemento textarea por su ID
    const textareaName = document.getElementById("answer-weekly");
    const weeklyQuestion = getWeeklyQuestion();
    questionLabel.textContent = weeklyQuestion[0];
    // Cambia el atributo "name" del elemento textarea
    textareaName.setAttribute("name", weeklyQuestion[1]);
});

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const now = new Date();
    const currentWeek = Math.floor(now / (1000 * 60 * 60 * 24 * 7));
    const nextWeek = new Date((currentWeek + 1) * 1000 * 60 * 60 * 24 * 7);
    const timeDifference = nextWeek - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Tiempo restante para la siguiente pregunta: <strong>${days}d ${hours}h ${minutes}m ${seconds}s </strong>`;
}

// Actualiza la cuenta regresiva cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

