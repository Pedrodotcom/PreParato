const modals = document.querySelector('.modal');
const firstModal = document.querySelector('#modal1')
const lastModal = document.querySelector('#modal2')

document.querySelector('#modal-activator').onclick = () => modals.classList.remove('hide');

document.querySelector('#modal-btn1').onclick = () => {
    firstModal.classList.add("hidden");
    lastModal.classList.remove("hidden");
}

document.querySelector('#modal-deactivator').onclick = () => {
    modals.classList.add('hide');
    firstModal.classList.remove("hidden");
    lastModal.classList.add("hidden");
};

