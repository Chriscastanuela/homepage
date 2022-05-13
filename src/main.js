const xButton = document.getElementById('home__nav--button-x');

const homeSection = document.querySelector('.home');
const projectsSection = document.querySelector('.projects');
const menu = document.querySelector('.menu');

let visibility = false;

const theHiddenThing = (itemInQuestion) => {
    if (visibility === false) {
        itemInQuestion.style.visibility = 'visible';
        visibility = true;
    } else {
        itemInQuestion.style.visibility = 'hidden';
        visibility = false;
    }

};
const openAndClose = () => {
    xButton.classList.toggle('home__nav--button-x-open');
    theHiddenThing(menu);
}

xButton.onclick = () => {openAndClose()};