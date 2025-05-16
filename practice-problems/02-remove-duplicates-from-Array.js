function removeDuplicates(arr) {
  let map = new Map();
  let answer = [];
  for (let i = 0; i < arr.length; i++){
    let item = arr[i];
    if (!map.has(item)) {
      map.set(item, i + 1);
      answer.push(item);
    }
  }
  return answer;
}

removeDuplicates([1, 2, 2, 3, 4, 4])