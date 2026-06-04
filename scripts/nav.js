export const nav = document.querySelector('nav');
const casesLink = document.querySelector('.js-cases');



casesLink.addEventListener('click', () => {
    window.location = './cases.html';
})