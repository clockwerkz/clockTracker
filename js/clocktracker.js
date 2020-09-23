const timeSheetBtn = document.getElementById("timesheet");
const timeSheet = document.getElementById("time-sheet");
const clockButtons = document.getElementById('clock-buttons');
const workBtn = document.getElementById("work");

const data = [];
const timeTracker = [];

let startOfDay = null;

workBtn.addEventListener("click", e=> {
  let currentStatus = workBtn.textContent.trim();
  let currentTime = new Date();
  currentTime = currentTime.getHours() + ":" + (currentTime.getMinutes() < 10 ?"0" +  currentTime.getMinutes() : currentTime.getMinutes());
  if (currentStatus === "Clock in") {
    if (data.length === 0) {
      //first check in
      document.getElementById("day-start").textContent = currentTime;
    }
    data.push({in:currentTime, out: "" });
    endOfDay(true);
    workBtn.textContent = "Clock out";
  } else {
    data[data.length-1].out = currentTime;
    endOfDay();
    workBtn.textContent = "Clock in";
  }
  workBtn.classList.toggle('green');
});


timeSheetBtn.addEventListener("click", ()=>{
  let currentStatus = timeSheetBtn.textContent;
  if (currentStatus === "Edit Timesheet") {
    if (data) renderSheet(data);
    timeSheetBtn.textContent = "Show Clock Buttons";
  } else {
    const entries = document.querySelectorAll(".time-block");
    entries.forEach((entry, index) => {
      data[index].in = entry.querySelector(".start-time").value;
      data[index].out = entry.querySelector(".end-time").value;
    });
    renderTimes();
    timeSheetBtn.textContent =  "Edit Timesheet";
  }
    timeSheet.classList.toggle("hide");
    clockButtons.classList.toggle("hide");
});

function renderTimes() {
  if (data.length == 0) return;
  document.getElementById("day-start").textContent = data[0].in;
  let complete = data[data.length-1].out === "";
  updateWorkBtn();
  endOfDay(complete);
}

function updateWorkBtn() {  
  if (data[data.length-1].out === "") {
    if (workBtn.textContent === "Clock in") {
      workBtn.textContent = "Clock out";
      workBtn.classList.add("green");
    } 
  } else {
    if (workBtn.textContent === "Clock out") {
      workBtn.textContent = "Clock in";
      workBtn.classList.remove("green");
    }
  }
}

function renderSheet() {
  let textContent = '';
  data.forEach(entry => {
    textContent += `<div class="time-block">
  <label for="time-in">In:</label><input class="start-time" type="time" name="time-in" value="${entry.in}"/>`;
  if (entry.out !== null) {
    textContent += `<label for="time-out">Out:</label><input class="end-time" name="time-out" type="time" value="${entry.out}"/>`;
  } else {
    textContent += `<label for="time-out">Out:</label><input class="end-time" name="time-out" type="time" />`;
  }
  textContent+=`</div>`;
  })
  document.getElementById('time-sheet').innerHTML = textContent;
}


function endOfDay(complete=false) {
  let outTime = document.getElementById("out-time");
  if (!complete) {
    outTime.textContent = '--:--';
    return;
  }
  let totalMinWorked = data.reduce((acc, time) => time.out ? calculateTimeBlock(time.in, time.out) + acc : acc, 0);
  let timeRemaining = 8 * 60 - totalMinWorked;
  if (timeRemaining < 0) console.log("Over 8 hours");
  outTime.textContent = calculateClockOutTime(data[data.length-1].in, timeRemaining);
}

function calculateMinutes(time) {
  //TODO: test input with regex
  let [hour, min] = time.split(":").map(val => parseInt(val));
  return hour*60 + min;
}
  
function calculateTimeBlock(startTime, endTime) {
  const start = calculateMinutes(startTime);
  const end = calculateMinutes(endTime);
  return end - start;
}

function calculateClockOutTime(startTime, minutesUntil) {
  let [hour, min] = startTime.split(":").map(val => parseInt(val));
  min += minutesUntil;
  hour += Math.floor(min / 60);
  min %= 60;
  if (min < 10) min = "0" + min;
  if (hour > 23) hour -= 24;
  if (hour < 10) hour = "0" + hour;
  return hour + ":" + min;
}

