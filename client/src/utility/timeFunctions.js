
export function endOfDay(data) {
  let totalMinWorked = data.reduce((acc, time) => time.out ? calculateTimeBlock(time.in, time.out) + acc : acc, 0);
  let timeRemaining = 8 * 60 - totalMinWorked;
  if (timeRemaining < 0) console.log("Over 8 hours");
  return calculateClockOutTime(data[data.length-1].in, timeRemaining);
}

export function calculateMinutes(time) {
  //TODO: test input with regex
  let [hour, min] = time.split(":").map(val => parseInt(val));
  return hour*60 + min;
}
  
export function calculateTimeBlock(startTime, endTime) {
  const start = calculateMinutes(startTime);
  const end = calculateMinutes(endTime);
  return end - start;
}

export function isValidTime(startTime, endTime) {
  let [startHour, startMin] = startTime.split(":").map(val => parseInt(val));
  let [endHour, endMin] = endTime.split(":").map(val => parseInt(val));
  if (endHour > startHour) return true;
  if (endHour == startHour) {
    if (endMin > startMin) return true;
  } 
  return false;
}

export function calculateClockOutTime(startTime, minutesUntil) {
  let [hour, min] = startTime.split(":").map(val => parseInt(val));
  min += minutesUntil;
  hour += Math.floor(min / 60);
  min %= 60;
  if (min < 10) min = "0" + min;
  if (hour > 23) hour -= 24;
  if (hour < 10) hour = "0" + hour;
  return hour + ":" + min;
}
