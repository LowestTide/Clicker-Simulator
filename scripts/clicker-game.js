import {upgradeButton, utilityButton} from './upgradeButton.js';
import {nav} from './nav.js';
import {userData, autoClicker} from './userData.js';





export const clickerCounter = document.querySelector('.clicks-counter');
export const clickerButton = document.querySelector('.js-clicker-button');
export const upgradeButtonContainer = document.querySelector('.js-upgrade-button-container');

let clickIncrease = userData.principalAmount * userData.clickMultiplier;









export function loadPage(){

    updateClickerCounter();
}

function saveData(userData){
    localStorage.setItem('userData', JSON.stringify(userData));
}

const testButton = new upgradeButton('This upgrade button increases the click multiplier by 2x and increases click amount to +2.', 1, 1, 1, 'Upgrade Button');
const testButton2 = new upgradeButton("This upgrade button increases the click multiplier for now. uhh and something else lol WIP", 10, 1, 0, 'Upgrade Button 2');
const autoClickerButton = new utilityButton('This upgrade button automatically clicks for you!', 100,'Autoclicker', autoClicker, false );
console.log(autoClickerButton);
new Promise((resolve) => {
    testButton.build();
    testButton2.build();
    autoClickerButton.build();
    resolve();
}).then(()=> {
    loadPage();
})




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

