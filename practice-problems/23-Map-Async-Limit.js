function mapAsyncLimit(arr, limit, asyncFn) {
  if(arr.length === 0) return []

    return new Promise((resolve, reject) => {
       const result = Array.from({ length : arr.length }, (_) => 0);
        const queue = [];
        let executed = 0;
        const minimum = Math.min(arr.length, limit);

        async function executeTask(index) {
            try {
                const resp = await asyncFn(arr[index]);
                result[index]= resp;
                executed++;
                console.log("Result : ",result)
                if (executed === arr.length) {
                    resolve(result);
                } else if( queue.length > 0 ){
                    await executeTask(queue.shift());
                }
            } catch (err) {
                reject(err)
            }
        }

        for (let i = 0; i < arr.length; i++){
            if (i < minimum) {
                executeTask(i);
            } else {
                queue.push(i);
            }
        }
    })
}