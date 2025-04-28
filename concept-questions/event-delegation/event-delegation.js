const parent = document.querySelector('.parent');

function handleChildClicked(e){
    if(e.target.id){
        const element = document.querySelector(`#${e.target.id}`);
        if(element){
            const content = element.innerHTML;
            alert(content);
        }
    }
}

parent.addEventListener("click", handleChildClicked)