import {loadPage} from './clicker-game.js';

export const userData = {
    clicks: 1000,
    principalAmount: 1,
    clickMultiplier: 1,
    buttonsOwned: ['']

}

let autoClickerIntervalId = null;

// this function had inputs (element, flag=false, toggleOn)
export function autoClicker(element, bought, price){
    let newButton;
    let divContainer;
    let upgradeContainer;
    let imp = element.parentElement.querySelector('span');
    console.log(imp);
    if(!bought){
        newButton = document.createElement('button');
        newButton.textContent = 'ON';
        newButton.classList.add('autoclicker-toggle-button');

        divContainer = document.createElement('div');
        divContainer.classList.add('autoclicker-section-container');

        upgradeContainer = document.createElement('button');
        upgradeContainer.textContent = 'Upgrade';
        upgradeContainer.classList.add('autoclicker-upgrade-container');

        element.parentElement.append(newButton, divContainer, upgradeContainer);
        divContainer.append(element, upgradeContainer, newButton);

        element.classList.add('upgrade-button-clicked');

        newButton.addEventListener('click', () => {
            
            if(newButton.textContent === 'ON'){
                newButton.textContent ='OFF';
                newButton.classList.add('autoclicker-toggle-button-on');
                if (autoClickerIntervalId === null) {
                    autoClickerIntervalId = setInterval(() => {
                    userData.clicks += userData.principalAmount * userData.clickMultiplier;
                    loadPage();
            }, 800);
        }
                

            }else{
                newButton.textContent = 'ON';
                newButton.classList.remove('autoclicker-toggle-button-on');
                if (autoClickerIntervalId !== null) {
                    clearInterval(autoClickerIntervalId);
                    autoClickerIntervalId = null;
                }
            }
            console.log('this is working');
        })

        upgradeContainer.addEventListener('click', () => {
            console.log('UPGRADE');
        })
        
    }
    else if(bought){
        window.alert("You have already bought the autoclicker button! Try clicking the and 'ON' and 'OFF' button.")
        return;
    }


    /*
    if(flag){
        if (autoClickerIntervalId === null) {
            autoClickerIntervalId = setInterval(() => {
                userData.clicks += userData.principalAmount * userData.clickMultiplier;
                loadPage();
            }, 800);
        }
    } else {
        if (autoClickerIntervalId !== null) {
            clearInterval(autoClickerIntervalId);
            autoClickerIntervalId = null;
        }
    }*/
}


export function saveToStorage(userData){
    localStorage.setItem('userData', JSON.stringify({
        clicks: userData.clicks,
        principalAmount: userData.principalAmount,
        clickMultiplier: userData.clickMultiplier,
        buttonsOwned: ['']
        
    })

   
)
    console.log(JSON.parse(localStorage.getItem('userData')).clicks);
}

export function getFromStorage(){
    const userData = JSON.parse(localStorage.getItem('userData'));
}
