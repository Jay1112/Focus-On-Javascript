const modalContainer = document.querySelector('.modalContainer');
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');

function toggleModal(value){
    modalContainer.style.display = value ? 'flex' : 'none'; 
}

modal.addEventListener("click", (event) => {
    event.stopPropagation();
})

modalContainer.addEventListener("click", (event) => {
    toggleModal(false);
})

btn.addEventListener("click", (event) => {
    toggleModal(true);
})