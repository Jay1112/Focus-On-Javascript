const list = [
    1,
    [ 2 , 3 ],
    [ 4 , 5 , 6 ],
    [ 7 , 8 , 9 , [ 10 , 11, [ 12 ] ] ],
    13
];

function customFlat(arr, depth = 1){
    let result = [];
    arr.forEach(item => {
        if(Array.isArray(item) && depth > 0){
            result.push(...customFlat(item,depth-1));
        }else{
            result.push(item);
        }
    });
    return result;
}

let answer = customFlat(list,3);

console.log(answer);