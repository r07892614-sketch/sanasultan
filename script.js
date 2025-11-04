// 60-second looping countdown
let timer = 60;
const countdownEl = document.getElementById("countdown");
const joinBtn = document.getElementById("joinButton");

setInterval(() => {
  timer--;
  if (timer <= 0) {
    timer = 60;
    joinBtn.classList.add("fade");
    setTimeout(() => joinBtn.classList.remove("fade"), 800);
  }
  countdownEl.textContent = timer;
}, 1000);
