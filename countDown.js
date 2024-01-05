const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")


const birthdayTime = '6 april 2024'

function countTime(){
    totalTime = new Date(birthdayTime)
    currentTime = new Date()
    finalTime = totalTime - currentTime

    const totalSeconds = finalTime/1000
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60; 
    const seconds = Math.floor(totalSeconds % 60);
    
    daysEl.innerHTML = zeroFunction(days);
    hoursEl.innerHTML = zeroFunction(hours);
    minutesEl.innerHTML = zeroFunction(minutes);
    secondsEl.innerHTML =zeroFunction(seconds);
    
}
function zeroFunction(time){
    return time < 10 ? `0${time}`: time 
}
countTime()

setInterval(countTime,1000)

