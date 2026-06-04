import {loadPage} from './clicker-game.js';

export const userData = {
    clicks: 1000,
    principalAmount: 1,
    clickMultiplier: 1,
    

}

export function autoClicker(flag=false){
    // console.log('it has run?');
    if(flag){
        setInterval(() => {
        userData.clicks+= userData.principalAmount * userData.clickMultiplier;
        loadPage();
    }, 800);
    }
    
}