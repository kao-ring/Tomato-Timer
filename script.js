var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;


function init() {
  console.log("init");
  minutesDisplay.innerHTML = '';
  secondsDisplay.innerHTML = '';
  totalSeconds = 0;
}
function startTimer() {
  // Write code to start the timer here
  totalSeconds = workMinutesInput.getAttribute("value") * 60;
  console.log(totalSeconds);
}

playButton.addEventListener("click", startTimer);
init();