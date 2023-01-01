class Cornometr {
  duration;
  status;
  interval;
  constructor() {
    this.duration = 0;
    this.status = "stopped";
  }
  start() {
    if (this.status == "started") {
      throw new Error("Warning : already started");
    }

    this.currentTime = Date.now();
    this.status = "started";
    console.log("Stopwatch running..");
  }
  stop() {
    if (this.status == "stopped") {
      throw new Error("Warning : already Stopped... !");
    }

    this.duration = Date.now() - this.currentTime + this.duration;
    console.log(this.currentTime);
    this.status = "stopped";
    console.log("Stopwatch stopped..");
    console.log((this.duration / 1000).toFixed(1));
  }
  reset() {
    if (this.status == "started") {
      this.stop();
    }
    this.duration = 0;
    console.log("Stop watch reset...");
    console.log((this.duration = 0));
  }
}
let sw = new Cornometr();

function updateTimer() {
  let timer = document.getElementById("timer");
  const elapsedTime = sw.duration;

  timer.innerHTML = (elapsedTime / 1000).toFixed(1);
}

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let timerInterval = null;

startBtn.onclick = function () {
  sw.start();

  updateTimer();
};
stopBtn.onclick = function () {
  sw.stop();
  updateTimer();
};
resetBtn.onclick = function () {
  sw.reset();
  updateTimer();
};

updateTimer();
