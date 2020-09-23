const timeSheetBtn = document.getElementById("timesheet");
const timeSheet = document.getElementById("time-sheet");
const clockButtons = document.getElementById('clock-buttons');
const data = [
  {
    id: 0,
    in: "08:44",
    out: "11:50",
    work: true
  },
  {
    id: 2,
    in: "13:38",
    out: null,
    work: true
  }
]

const timeTracker = [];

let startOfDay = null;

document.getElementById("work").addEventListener("click", e=> {
  e.target.textContent = e.target.textContent.includes("in") ? "Clock out" : "Clock in";
  let currentTime = new Date();
  currentTime = currentTime.getHours() + ":" + (currentTime.getMinutes() < 10 ?"0" +  currentTime.getMinutes() : currentTime.getMinutes());
  if (!startOfDay) {
    startOfDay = currentTime;
    document.getElementById("day-start").textContent = startOfDay;
  }
});

timeSheetBtn.addEventListener("click", ()=>{
  timeSheet.classList.toggle("hide");
  clockButtons.classList.toggle("hide");
  timeSheetBtn.textContent = timeSheetBtn.textContent === "Edit Timesheet" ? "Show Clock Buttons" : "Edit Timesheet";
});

function renderSheet(data) {
  let textContent = '';
  data.forEach(entry => {
    console.log(entry);
    textContent += `<div class="time-block">
  <input class="start-time" type="time" value="${entry.in}"/>
  <input class="end-time" type="time" value="${entry.out}"/>
</div>`
  })
  document.getElementById('time-sheet').innerHTML = textContent;
}

renderSheet(data);


function endOfDay(data) {
  let totalMinWorked = data.reduce((acc, time) => time.work && time.out ? calculateTimeBlock(time.in, time.out) + acc : acc, 0);
  let timeRemaining = 8 * 60 - totalMinWorked;
  console.log(calculateClockOutTime(data[2].in, timeRemaining));
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
  return hour + ":" + min;
}

function assert(val1, val2) {
    return val1 === val2;
}

//calculateClockOutTime test
//8 hours = 480 minutes
//console.log("8:45 + 480 = 16:45", assert(calculateClockOutTime("8:45",480), "16:45"))

//calculateTimeBlock test
//console.log("8:45 - 13:30 = 285",assert(calculateTimeBlock("8:45","13:30"), 285));

//CalculateMinutes Tests
// console.log("3:30",assert(calculateMinutes("3:30"),210));
// console.log("1:00",assert(calculateMinutes("1:00"),60));
// console.log("0:30",assert(calculateMinutes("0:30"),30));

