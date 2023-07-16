let timeout;
const hr = document.getElementById('hoursTime');
const min = document.getElementById('minutesTime');
const sec = document.getElementById('secondsTime');

function Relogio() {
  const currentDate = new Date()
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  hr.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;

  timeout = setTimeout(Relogio, 1000);
}

Relogio();