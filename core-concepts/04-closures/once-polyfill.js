// once Polyfill

function once(fn, context){
    let ran = null;

    return function(){
        if(fn){
            ran = fn.apply(context || this, arguments);
            fn = null;
        }

        return ran;
    }
}

const hello = () => console.log("test");

hello();
hello();

const helloOnce = once(hello);
helloOnce()
helloOnce()
helloOnce()