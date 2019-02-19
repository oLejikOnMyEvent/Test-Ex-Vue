class Timer {
    constructor(sec,min,hour){
        this.sec = sec;
        this.min = min
        this.hour = hour
    }
/* eslint-disable no-console */
    stratTimer(){
            setInterval(()=>{
                this.sec++
                console.log(this.sec)
                if (this.sec == 60) this.sec=0
            },1000)
        setInterval(() => {
            this.min++
            console.log(this.min)
            if (this.min == 60) this.min = 0
        }, 60000)
        setInterval(() => {
            this.hour++
            console.log(this.hour)
        }, 360000)
    }
    setToZero(){
        this.sec = 0
        this.min = 0
        this.hour = 0
    }
    renderTimer(){
        this.body = `
            <div>
            <h1> Вы на странице</h1>
            <span> ${this.sec}</span>
            <span> ${this.min}</span>
            <span> ${this.hour}</span>
            <button onclick="timer.setToZero()">Сбросить таймер</button>
            </div>`;
    }
}


let timer = new Timer(0,0,0);
timer.stratTimer();