import './styles.css';
import refs from './js/refs';
import { setInterval } from 'core-js';

// console.log(refs);

let christmasDay = `Dec 25 2020`


function mathTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
};

function myTimer(date) {
    let timeBetween = new Date(date) - Date.now();
    // console.log(timeBetween);
    const x = mathTime(timeBetween);
    

    refs.days.textContent = x.days;
    refs.hours.textContent = x.hours;
    refs.mins.textContent = x.mins;
    refs.secs.textContent = x.secs;
}


let interval = setInterval(() => {
    myTimer(christmasDay);
}, 1000)


// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Dec 25, 2020'),
// });


