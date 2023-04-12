//MODAL PARA OBTENER LAS RESPUESTAS
const questions = [
    "¿Qué crees que crees?",
    "¿Cuáles son los pilares de tu cultura?",
    "¿Por qué crees lo que crees?",
    "¿Cuál es la importancia del autoconocimiento?",
    "¿Qué valores consideras fundamentales en tu vida?",
    "¿Qué te hace sentir más conectado con los demás?",
    "¿Qué te motiva a seguir aprendiendo y creciendo?",
    "¿Cómo influyen tus creencias en tus decisiones diarias?",
    "¿Cuál es el papel del arte y la creatividad en tu vida?",
    "¿Cómo te gustaría contribuir al mundo?",
    "¿Cuál es tu filosofía de vida?",
    "¿Qué aspectos de tu vida te gustaría mejorar?",
    "¿Cómo te relacionas con la naturaleza y el medio ambiente?",
    "¿Cómo te enfrentas a los desafíos y obstáculos en tu vida?",
    "¿Qué te inspira a ser una mejor persona?",
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
    const weeklyQuestion = getWeeklyQuestion();
    questionLabel.textContent = weeklyQuestion;
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

