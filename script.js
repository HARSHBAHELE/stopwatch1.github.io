let timerInterval;
let timerValue = 0;
let running = false;

function startTimer() {
  if (!running) {
    running = true
    timerInterval = setInterval
    (updateTimer,1000);
  }
}

function stopTimer() {
  if(running) {
    running = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  stopTimer();
  timerValue = 0;
  updateDisplay();
}

function updateTimer() {
  timerValue++
  updateDisplay();
}

function updateDisplay() {
  let hours = Math.floor(timerValue / 3600);
  let min = Math.floor((timerValue % 3600) / 60);
  let sec = timerValue % 60;
  
  let formattedTime = hours+":"+min+":"+sec;

  document.querySelector(".main").textContent = formattedTime;
}