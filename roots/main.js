// const navToggle = document.getElementById(".nav-button");
// const primaryNav = document.getElementById(".primary-navigation");

// navToggle.addEventListener('click', () => {
//     console.log('click');
//     primaryNav.classList.toggle('opened')
// });


let toggleBtn = document.getElementById('nav-button');
let navBar = document.getElementById('primary-navigation')

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        navBar.hasAttribute('data-visible')
            ? toggleBtn.setAttribute('aria-expanded', false)
            : toggleBtn.setAttribute('aria-expanded', true);
        navBar.toggleAttribute('data-visible');
    });
} else {
    console.log("Element not found in the DOM.")
}