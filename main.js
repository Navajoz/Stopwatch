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
let lista = document.getElementById('laps')
const startBotao = document.getElementById('btn-start')
const stopBotao = document.getElementById('btn-stop')
const lapBotao = document.getElementById('btn-lap')
const clearBotao = document.getElementById('clear')
const resetBotao = document.getElementById('btn-reset')
let counter = 0
startBotao.addEventListener('click', () => {
    timer()
})
stopBotao.addEventListener('click', () => {
    clearTimeout(timeout)
})
resetBotao.addEventListener('click', () => {
    
    clearTimeout(timeout)
    hour = 0o0;
    minute = 0o0;
    second = 0o0;
    mili = 0o0;
    hr.innerHTML = '00'
    min.innerHTML = '00'
    sec.innerHTML= '00'
    milis.innerHTML = '00'
    currentTime = '00:00:00:00'

})
lapBotao.addEventListener('click', () => {
    counter += 1
    if (counter <= 10){
        lista.innerHTML += `<li>${currentTime}<li>`
    }
   
})
clearBotao.addEventListener('click', ()=> {
    lista.innerHTML = ''
    counter = 0
})


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
