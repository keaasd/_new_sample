let burger = document.querySelector('.burger-btn__open');
let menu = document.querySelector('.modal__mb');
let burgerclose = document.querySelector('.burger-btn__close');
const body = document.body;

if (burger && menu) {
    burger.onclick = () => {
        menu.classList.toggle('burger_active')
        body.classList.add("_locked");
    }
}
burgerclose.addEventListener('click', () => {
    menu.classList.remove('burger_active')
    body.classList.remove("_locked");
});

menu.addEventListener('click', e => {
    if (!e.target.classList.contains('modal__mb_window')) {
        menu.classList.remove('burger_active')
    }
})