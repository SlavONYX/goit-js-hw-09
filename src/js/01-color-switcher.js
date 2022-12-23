const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

function start() {
    // відключаємо кнопку Start
    startButton.setAttribute('disabled', true);

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    // устанавливаємо інтервал, який кожну секунду змінює колір фону
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stop() {
    // відключаємо інтервал
    clearInterval(intervalId);

    // активуємо кнопку Start
    startButton.removeAttribute('disabled');
}

