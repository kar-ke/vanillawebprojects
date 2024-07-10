

// analog clock 

function runClock() {
    const hour=document.querySelector('.hour');
    const minute=document.querySelector('.minute');
    const second = document.querySelector('.second');
    
    const time=new Date();
    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hrs = (min + time.getHours()) / 12;
    
    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360);

}

runClock();
setInterval(runClock, 1000);



// Digital clock 

function currentTime() {

    const timeContainer = document.querySelector('.clock');

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let day = 'AM'

    if (hours > 12) {
        hours = hours - 12;
        day = 'PM'
    };

    timeContainer.innerHTML = `${ hours<10 ? '0'+hours : hours}:${minutes<10 ? '0'+minutes : minutes}:${seconds<10 ? '0'+seconds : seconds} ${day}`
}

currentTime();
setInterval(currentTime, 1000);



// new year countdown 

const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');


function updateTime() {
    
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
    const currentDate = new Date();
    const diff = newYear - currentDate;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor((diff/1000/60/60)%24);
    const m = Math.floor((diff/1000/60)%60);
    const s = Math.floor((diff / 1000) % 60);
    
    day.innerHTML = d<10 ? '0'+ d : d;
    hour.innerHTML = h<10 ? '0'+ h : h;
    minute.innerHTML = m<10 ? '0'+ m : m;
    second.innerHTML = s<10 ? '0'+ s : s;
}


setInterval(updateTime, 1000);








