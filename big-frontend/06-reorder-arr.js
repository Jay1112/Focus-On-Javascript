// Reorder array with new indexes

function sort(items, newOrder) {
  let track = new Map();
  for(let i = 0 ; i < items.length; i++){
    track.set(items[i], i);
  }

  let i = 0;
  while(i < items.length){
    const finalIndex = newOrder[track.get(items[i])];
    if(finalIndex === i){
      i++;
    }else{
      let temp = items[i];
      items[i] = items[finalIndex];
      items[finalIndex] = temp;
    }
  }
}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]

sort(A, B);

console.log(A)