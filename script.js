

// biopic moving shadow
const biopic = document.querySelector('.profile-pic-container');
const img = biopic.querySelector('#profile-pic');
const shadowRange = 30;

function shadowChange(e) {
    const { offsetWidth: width, offsetHeight: height } = biopic;
    let { offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xShadow = Math.round((x / width * shadowRange) - (shadowRange / 2));
    const yShadow = Math.round((y / height * shadowRange) - (shadowRange / 2));

    img.style.boxShadow = `
      ${xShadow}px ${yShadow}px 0 rgba(236, 79, 60, 0.7)
    `
}

biopic.addEventListener('mousemove', shadowChange);


// Mobile navbar
const navbar = document.querySelector('.navbar-collapse')

navbar.addEventListener('click', (e) => {
    if (e.target.classList.contains('.navbar-toggle') || e.target.getElementsByTagName("a")) {
        navbar.classList.toggle('in');
    }

})
