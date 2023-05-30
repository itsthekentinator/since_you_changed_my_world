// Calculate the time difference
const startDate = new Date('April 12, 2023 21:00:00').getTime();
const currentDate = new Date().getTime();
const timeDifference = currentDate - startDate;

// Calculate the days and hours
const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// Update the timer display
document.getElementById('days').textContent = days;
document.getElementById('hours').textContent = hours;
