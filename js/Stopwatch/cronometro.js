let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let mili = 0o0;
let timeout
const hr = document.getElementById('hr')
const min = document.getElementById('min') 
const sec = document.getElementById('sec')
const milis = document.getElementById('mili')
let currentTime = '00:00:00:00'
function timer(){
    mili++;
    if (mili == 100) {
        second++;
        mili = 0;
    }

    if (second == 60) {
        minute++;
        second = 0;
    }

    if (minute == 60) {
        hour++;
        minute = 0;
        second = 0;
    }
    let hrdisplay = hour;
    let mindisplay = minute;
    let secdisplay = second;
    let milidisplay = mili;

    if (hour < 10) {
        hrdisplay = "0" + hrdisplay;
    }

    if (minute < 10) {
        mindisplay = "0" + mindisplay;
    }

    if (second < 10) {  
        secdisplay = "0" + secdisplay;
    }

    if (mili < 10) {
        milidisplay = "0" + milidisplay;
    }
    hr.innerHTML = hrdisplay;
    min.innerHTML = mindisplay;
    sec.innerHTML = secdisplay;
    milis.innerHTML = milidisplay;

    clearTimeout(timeout);
    timeout = setTimeout(timer, 10);
    currentTime = `${hrdisplay}:${mindisplay}:${secdisplay}:${milidisplay}`
}