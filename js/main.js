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

