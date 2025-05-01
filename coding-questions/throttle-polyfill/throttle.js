const btn = document.querySelector('.btn');
const normal = document.querySelector('.normal');
const throttled = document.querySelector('.throttled');

let normalClicks = 0;
let throttleClicks = 0;

function throttle(callback, delay){
    let last = 0;
    let timerId ; 

    return function(...args){
        const current = new Date().getTime();
        const diff = current - last;

        if( diff >= delay ){
            callback(...args);
            last = current;
            return;
        }else{
            if(timerId) clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(...args);
                last = current;
            }, delay - diff)
        }
    }
}

normal.innerHTML = `Normal : ${normalClicks} times clicked!`
throttled.innerHTML = `Throttled : ${throttleClicks} times clicked!`

function increaseNormalClicks(){
    normalClicks++;
    normal.innerHTML = `Normal : ${normalClicks} times clicked!`
}

function increaseThrottleClicks(){
    throttleClicks++;
    throttled.innerHTML = `Throttled : ${throttleClicks} times clicked!`
}

const throttledVersion = throttle(increaseThrottleClicks, 1000);

btn.addEventListener("click",() => {
    increaseNormalClicks();
    throttledVersion();
})
