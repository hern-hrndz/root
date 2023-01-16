// const navToggle = document.getElementById(".nav-button");
// const primaryNav = document.getElementById(".primary-navigation");

// navToggle.addEventListener('click', () => {
//     console.log('click');
//     primaryNav.classList.toggle('opened')
// });


let toggleBtn = document.getElementById('nav-button');
let navBar = document.getElementById('primary-navigation')
let closeBtn = document.querySelector('.fa-times');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        navBar.hasAttribute('data-visible')
            ? toggleBtn.setAttribute('aria-expanded', false)
            : toggleBtn.setAttribute('aria-expanded', true);
        navBar.toggleAttribute('data-visible');
        document.body.classList.toggle("no-scroll")
    });
} else {
    console.log("Element not found in the DOM.")
}


if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navBar.hasAttribute('data-visible')
            ? toggleBtn.setAttribute('aria-expanded', false)
            : toggleBtn.setAttribute('aria-expanded', true);
        navBar.toggleAttribute('data-visible');
        document.body.classList.remove("no-scroll")
    });
} else {
    console.log("Element not found in the DOM.")
}

// document.addEventListener("click", function (e) {
//     if (navBar.hasAttribute("data-visible") && e.target.closest(".primary-navigation") === null) {
//         toggleBtn.setAttribute("aria-expanded", false);
//         navBar.removeAttribute("data-visible");
//     }
// });