const countDown = () => {
  const getDate = new Date("31 December, 2024 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const dateDiffernce = getDate - currentDate;

  // Time Convertions
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculating time
  const textDay = Math.floor(dateDiffernce / day);
  const textHour = Math.floor((dateDiffernce % day) / hour);
  const textMinute = Math.floor((dateDiffernce % hour) / minute);
  const textSecond = Math.floor((dateDiffernce % minute) / second);

  document.getElementById("days").textContent = textDay;
  document.getElementById("hours").textContent = textHour;
  document.getElementById("minutes").textContent = textMinute;
  document.getElementById("seconds").textContent = textSecond;
};

setInterval(countDown, 100);
