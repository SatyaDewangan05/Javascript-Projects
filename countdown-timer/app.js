const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

var setDateYear = "";

function store() {
  const setDate = document.querySelector("#setDate");

  localStorage.setItem("setDate", setDate.value);

  var date = localStorage.getItem("setDate");
  setDateYear = date;
  return setDateYear;
}
store();

function countdown() {
  const currentYear = new Date();
  const newYearDate = "1 Jan " + (currentYear.getFullYear() + 1);
  var newYear = new Date(newYearDate);

  console.log(newYear - currentYear);

  if (setDateYear) {
    newYear = new Date(setDateYear);
  }

  const totalSecond = (newYear - currentYear) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const mins = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;

  console.log(days, hours, mins, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formate(hours);
  minsEl.innerHTML = formate(mins);
  secondsEl.innerHTML = formate(seconds);
}

function formate(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
