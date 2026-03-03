 const siteBurger = () => {
    const burger = document.querySelector('.site-burger');
    const aside = document.querySelector('.site-aside');

    if (!aside) return;

    const close = aside .querySelector('.site-close-burger');

    burger.addEventListener('click', () => {
        aside.classList.add('active');
    })

    close.addEventListener('click', () => {
        aside.classList.remove('active');
    })
    
 }

document.addEventListener('DOMContentLoaded', () => {
    siteBurger();
})