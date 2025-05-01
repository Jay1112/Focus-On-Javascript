const btn = document.querySelector('.btn');
const normal = document.querySelector('.normal');
const debounced = document.querySelector('.debounced');

let normalClicks = 0;
let debouncedClicks = 0;

function debounce(callback, delay){
    let timerId ;
    return function(...args){
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(()=>{
            callback(...args);
        }, delay)
    }
}

normal.innerHTML = `Normal : ${normalClicks} times clicked!`
debounced.innerHTML = `Debounced : ${debouncedClicks} times clicked!`

function increaseNormalClicks(){
    normalClicks++;
    normal.innerHTML = `Normal : ${normalClicks} times clicked!`
}

function increaseDebounceClicks(){
    debouncedClicks++;
    debounced.innerHTML = `Debounced : ${debouncedClicks} times clicked!`
}

const debouncedVersion = debounce(increaseDebounceClicks, 1000);

btn.addEventListener("click",() => {
    increaseNormalClicks();
    debouncedVersion();
})
