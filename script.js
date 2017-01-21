// Mobile navbar
const navbar = document.querySelector('.navbar-collapse')

navbar.addEventListener('click', (e) => {
    if (e.target.classList.contains('.navbar-toggle') || e.target.getElementsByTagName("a")) {
        navbar.classList.toggle('in');
    }

})
