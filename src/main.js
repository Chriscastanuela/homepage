const xButton = document.getElementById('header--button__x');

const homeSection = document.querySelector('.home');
const projectsSection = document.querySelector('.projects');
const menu = document.querySelector('.menu');

let visibility = false;

const theHiddenThing = (itemInQuestion) => {
    if (visibility === false) {
        itemInQuestion.style.visibility = 'visible';

        itemInQuestion.style.animationName = 'moveUp';
        itemInQuestion.style.animationDuration = '.6s';
        visibility = true;
    } else {
        itemInQuestion.style.visibility = 'hidden';

        itemInQuestion.style.animationName = 'null';
        itemInQuestion.style.animationDuration = 'null';

        visibility = false;
    }

};
const openAndClose = () => {
    xButton.classList.toggle('header--button__x-open');
    theHiddenThing(menu);
}

xButton.onclick = () => {openAndClose()};