const toggleBtn = document.getElementById('nav-button');
const navBar = document.getElementById('primary-navigation');
const closeBtn = document.querySelector('.fa-times');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        navBar.hasAttribute('data-visible')
            ? toggleBtn.setAttribute('aria-expanded', false)
            : toggleBtn.setAttribute('aria-expanded', true);
        navBar.toggleAttribute('data-visible');
        document.body.classList.toggle('no-scroll');
    });
} else {
    console.log('Element not found in the DOM.');
}


if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navBar.hasAttribute('data-visible')
            ? toggleBtn.setAttribute('aria-expanded', false)
            : toggleBtn.setAttribute('aria-expanded', true);
        navBar.toggleAttribute('data-visible');
        document.body.classList.remove('no-scroll');
    });
} else {
    console.log('Element not found in the DOM.');
}
