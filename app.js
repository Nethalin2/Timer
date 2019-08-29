let timer;
let myMusic;
const settimer = () => {

clearInterval(timer);
myMusic = new Audio("music.mp3")
myMusic.play().loop

    
    let timerHour = document.getElementById("hour").value;
    if(timerHour=="")timerHour = 0; 
    let timerMin = document.getElementById("min").value;
    if(timerMin=="")timerMin = 0;
    let timerSec = document.getElementById("sec").value;

    let timerDate = timerHour * 3600 + timerMin *60 + timerSec * 1
    console.log(timerDate)
    
    let second = 1;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

const showtimer = () => {
    if(timerDate == 0)
    {
        myMusic.pause()
        myMusic.currentTime = 0;
        console.log(myMusic)
        new Audio("alarm.mp3").play();
        clearInterval(timer);
        document.getElementById("timerValue").innerHTML ='Timer Finished!';
        document.getElementById("submit").value = 'Reset';
        return;
    } else {
        timerDate--
    }
        
        let hours = Math.floor((timerDate % day) / hour);
        let minutes = Math.floor((timerDate % hour) / minute);
        let seconds = Math.floor((timerDate % minute) / second);

        
        document.getElementById("timerValue").innerHTML = hours + 'Hrs';
        document.getElementById("timerValue").innerHTML += minutes + 'Mins';
        document.getElementById("timerValue").innerHTML += seconds + 'Secs';
 }
        timer = setInterval(showtimer, 1000);

       
        }
        const pause = () => {
            myMusic.pause();

            clearInterval(timer)
        }
        




