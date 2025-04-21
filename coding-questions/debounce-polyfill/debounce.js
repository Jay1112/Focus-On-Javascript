const normal = document.querySelector('.normal');
const debounced = document.querySelector('.debounced');
const btn = document.querySelector('.btn');

let totalClicks = 0;

function debounce(fn, delay){
    let timerId ; 
    return function(...args){
        if(timerId){ clearTimeout(timerId) }

        timerId = setTimeout(()=>{
            fn(...args);
        }, delay)
    }
}

function updateCounts(element, count){
    element.innerHTML = `Clicked : ${count}`
}

const debouncedVersion = debounce(updateCounts, 500)

document.addEventListener("DOMContentLoaded", () => {
    updateCounts(normal, totalClicks);
    updateCounts(debounced, totalClicks);
})

btn.addEventListener("click", () => {
    totalClicks++;
    updateCounts(normal, totalClicks);
    debouncedVersion(debounced, totalClicks);
})