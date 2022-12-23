import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


import flatpickr from "flatpickr";

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let endDate;
let interval;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        endDate = selectedDates[0];
        if (endDate < new Date()) {
            window.alert('Please choose a date in the future');
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
};

flatpickr(input, options);

const convertMs = ms => {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return {
        days,
        hours,
        minutes,
        seconds
    };
};

const addLeadingZero = value => value.toString().padStart(2, '0');

const countdown = () => {
    // Calculate the time difference in milliseconds
    const timeDifference = endDate - new Date();

    // Calculate the number of days, hours, minutes, and seconds until the end date
    const {
        days,
        hours,
        minutes,
        seconds
    } = convertMs(timeDifference);

    // Update the timer elements with the calculated values
    daysElement.textContent = days;
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);

    // If the time difference is negative, clear the interval and reset the timer elements
    if (timeDifference < 0) {
        clearInterval(interval);
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
};

startButton.addEventListener('click', () => {
    interval = setInterval(countdown, 1000);
});
