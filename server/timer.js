var sec = 0;
var min = 0;
var hour = 0;


setInterval(function () {
    sec++
/* eslint-disable no-console */
    console.log(sec +" "+ "sec");
    if (sec == 59) {
        sec = 0;
    }
}, 1000);

setInterval(function () {
    min++;
    console.log(min + " "+ "min");
    if (min == 59) {
        min = 0;
    }
}, 1000 * 60);

setInterval(function () {
    hour++;
    console.log(hour);
}, 1000 * 60 * 60);

function setToZero() {
    sec = 0;
    min = 0;
    hour = 0
}

this.body= `
<div>
<h1> Вы на странице</h1>
<span> ${sec}</span>
<span> ${min}</span>
<span> ${hour}</span>
<button onclick="setToZero()">Сбросить таймер</button>
</div>`;
//exports.setToZero();