const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');
const menuBtn = document.getElementById('menu-btn');
const sideNav = document.getElementById('side-nav');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

menuBtn.addEventListener('click', navToggle);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        closeModal()
    }
}

function navToggle() {
    sideNav.classList.toggle('show-nav');
}