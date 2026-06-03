import {upgradeButton} from './upgradeButton.js';
import {nav} from './nav.js';
import {userData} from './userData.js';





export const clickerCounter = document.querySelector('.clicks-counter');
export const clickerButton = document.querySelector('.js-clicker-button');
export const upgradeButtonContainer = document.querySelector('.js-upgrade-button-container');
const casesLink = document.querySelector('.js-cases');
let clickIncrease = userData.principalAmount * userData.clickMultiplier;
console.log(clickIncrease, casesLink);








function loadPage(){

    updateClickerCounter();
}

function saveData(userData){
    localStorage.setItem('userData', JSON.stringify(userData));
}

const testButton = new upgradeButton('This upgrade button increases the click multiplier by 2x and increases click amount to +2.', 1, 1, 1, 'Upgrade Button');
const testButton2 = new upgradeButton("null 2", 10, 1, 0, 'Upgrade Button 2');
console.log(testButton);
new Promise((resolve) => {
    testButton.build();
    testButton2.build();
    resolve();
}).then(()=> {
    loadPage();
})

function saveToStorage(userData){
    localStorage.setItem('userData', JSON.stringify({
        clicks: userData.clicks,
        principalAmount: userData.principalAmount,
        clickMultiplier: userData.clickMultiplier,
        clickIncrease: userData.principalAmount * userData.clickMultiplier
        
    })
)}


clickerButton.addEventListener("click", () => {
    clickIncrease = userData.clickMultiplier * userData.clickMultiplier;
    userData.clicks += clickIncrease;
    console.log(clickIncrease);
    console.log(userData);
    updateClickerCounter();
})



function updateClickerCounter(){
    clickerCounter.innerHTML = `Clicks: ${userData.clicks}`;
}

casesLink.addEventListener('click', () => {
    window.location = './cases.html';
})