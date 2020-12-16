import './styles.css';
import refs from './js/refs';
// import { setInterval } from 'core-js';

// // console.log(refs);

// let christmasDay = `Dec 25 2020`


// function mathTime(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);

//     return { days, hours, mins, secs };
// };

// function myTimer(date) {
//     let timeBetween = new Date(date) - Date.now();
//     // console.log(timeBetween);
//     const x = mathTime(timeBetween);
    

//     refs.days.textContent = x.days;
//     refs.hours.textContent = x.hours;
//     refs.mins.textContent = x.mins;
//     refs.secs.textContent = x.secs;
// }


//  setInterval(() => {
//     myTimer(christmasDay);
// }, 1000)


class CountdownTimer {
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;
        this.timer = document.getElementById(selector);
        this.days = document.querySelector('span[data-value="days"]');
        this.hours = document.querySelector('span[data-value="hours"]');
        this.mins = document.querySelector('span[data-value="mins"]');
        this.secs = document.querySelector('span[data-value="secs"]');

    }

    start() {
        this.myTimer();

        setInterval(() => {
        this.myTimer();
        }, 1000)
    }
    
    myTimer() {
        let timeBetween = this.targetDate - Date.now();
        const x = this.mathTime(timeBetween);

        // console.log(this.targetDate)
        // console.log(Date.now())
        // console.log(timeBetween)
        // console.log(x)

        this.days.textContent = x.days;
        this.hours.textContent = x.hours;
        this.mins.textContent = x.mins;
        this.secs.textContent = x.secs;

    }
    mathTime(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
    }
}


const christmassDay = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date('Dec 25, 2020'),
});

console.log(christmassDay.targetDate)

christmassDay.start();