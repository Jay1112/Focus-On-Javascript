function flattenArray(arr){
    let result = [];

    function flatArr(arr, index){
        if(index === arr.length){
            return ;
        }

        if(Array.isArray(arr[index])){
            flatArr(arr[index], 0);
        }else{
            result.push(arr[index]);
        }
        flatArr(arr, index + 1);
    }

    flatArr(arr, 0);
    return result;
}

function flattenArrayByLevel(arr, level){
    let result = [];

    function flatArr(arr, index, level){
        if(index === arr.length){
            return ;
        }

        if(level === 0){
            result.push(arr[index]);
        }else if(Array.isArray(arr[index])){
            flatArr(arr[index], 0, level - 1);
        }else{
            result.push(arr[index]);
        }
        flatArr(arr, index + 1, level);
    }

    flatArr(arr, 0, level);
    return result;
}



console.log(flattenArray([1, [2, [3, 4], 5], 6]))
console.log(flattenArrayByLevel([1, [2, [3, [4]], 5], 6], 2))