const normal = document.querySelector('.normal');
const throttled = document.querySelector('.throttled');
const btn = document.querySelector('.btn');

let totalClicks = 0;

// throttle polyfill
function throttle(fn, delay){
    let last = 0 ; 
    let timerId ;
    return function(...args){
        let current = new Date().getTime();
        const diff = current - last;

        if(diff >= delay){
            fn(...args);
            last = new Date().getTime();
            return ;
        }else{
            if(timerId) clearTimeout(timerId)
            // handle last change
            timerId = setTimeout(() => {
                fn(...args);
                last = new Date().getTime();
            }, delay - diff)
        }
    }
}

function updateCounts(element, count){
    element.innerHTML = `Clicked : ${count}`
}

const throttledVersion = throttle(updateCounts, 1000)

document.addEventListener("DOMContentLoaded", () => {
    updateCounts(normal, totalClicks);
    updateCounts(throttled, totalClicks);
})

btn.addEventListener("click", () => {
    totalClicks++;
    updateCounts(normal, totalClicks);
    throttledVersion(throttled, totalClicks);
})