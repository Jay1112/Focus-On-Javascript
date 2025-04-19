// Once Polyfill

function once(func, context){
    let ran = false;

    return function(){
        if(ran){
            return ;
        }

        func.call(context || this, ...arguments);
        ran = true;
    }
}

const hello = once((name, lastname) => { console.log(name, lastname) });
hello('Jay', 'Patel');
hello('Jay', 'Patel');
hello('Jay', 'Patel');