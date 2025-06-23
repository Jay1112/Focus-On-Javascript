const findCorrespondingNode = (rootA, rootB, target) => {
  if(rootA === target) return rootB;
  if(!rootA || !rootB) return null;
  const arr1 = Array.from(rootA.children);
  const arr2 = Array.from(rootB.children);

  for(let i = 0 ; i < arr1.length; i++){
    const element = findCorrespondingNode(arr1[i], arr2[i], target);
    if(element){
      return element;
    }
  }

  return null;
}