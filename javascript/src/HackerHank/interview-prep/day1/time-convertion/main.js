function TimeConvertion(str) {
  const modifier = str.substr(8, 2);
  const [time] = str.split(modifier === "AM" ? "AM" : "PM");
  let [hours, minutes, seconds] = time.split(":");

  console.log(hours, minutes, seconds);

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}:${seconds}`;
}

console.log(TimeConvertion("12:01:00PM"))
