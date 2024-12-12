const getPathFromChildToParent = (parent, child) => {
  let currentNode = child;
  let pathArray = [];
  while (currentNode !== parent) {
    let parentElement = currentNode.parentElement;
    let children = Array.from(parentElement.children);
    pathArray.push(children.indexOf(currentNode));
    currentNode = parentElement;
  }
  return pathArray;
};

const getValueFromPath = (parent, path) => {
    let currentNode = parent ; 
    while(path.length){
        let children = currentNode.children
        currentNode = children[path.pop()]
    }
    return currentNode.innerText;
}

const findValues = () => {
  const rootA = document.querySelector("#rootA");
  const nodeA = document.querySelector("#nodeA");
  const rootB = document.querySelector("#rootB");

  const path = getPathFromChildToParent(rootA, nodeA);
  const value = getValueFromPath(rootB,path);
  console.log(value)
};

findValues();
