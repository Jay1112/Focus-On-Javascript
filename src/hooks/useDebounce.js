function useDebounce() {
    function debounce(callback,delay){
        let timer = null ; 
        return function(...args){
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                callback(...args);
            },delay);
        }
    }

    return { debounce }
}

export default useDebounce