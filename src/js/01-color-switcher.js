const startBtn = document.querySelector('button[data-start');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', onClick);
stopBtn.addEventListener('click', onStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClick() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtn() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}
