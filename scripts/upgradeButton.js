import {upgradeButtonContainer, loadPage} from './clicker-game.js';
import {userData} from './userData.js';

function calculateNeededClicks(price, userData){
    if(price - userData.clicks === 1){
        return '1 more click';
    }else {
        return `${price-userData.clicks} more clicks`;
    }
}


export class upgradeButton {
    constructor(description, price, clickMultiplier, clickAmount, textContent, fun=null){
        this.description = description;
        this.price = price;
        this.clickAmount = clickAmount;
        this.clickMultiplier = clickMultiplier;
        this.textContent = textContent;
        this.element = null;
        this.isClicked = false;
        this.fun = fun;
    }

    build(){
        this.element = document.createElement('button');
        let container = document.createElement('span');
        container.classList.add("upgrade-button-wrapper");
        container.textContent = this.description;
        upgradeButtonContainer.appendChild(container);

        let priceContainer = document.createElement('span');
        priceContainer.textContent = `Price: ${this.price}`;
        container.appendChild(priceContainer);

        this.element.textContent = this.textContent;
        this.element.classList.add("upgrade-button");
        this.element.upgradeButton = this;
        container.appendChild(this.element);
        console.log(this.textContent);
        this.element.addEventListener("click", () => {
            
            this.purchase();
        })
        
        return this.element;
    }

    purchase(){
        

        if (this.element && this.price <= userData.clicks) {
            this.element.style = "visibility: 0;"
            this.element = null;
            
            console.log(userData.clicks);
            userData.principalAmount += this.clickAmount;
            userData.clickMultiplier += this.clickMultiplier;
            
            
            

            if(this.fun){
                this.fun();
                console.log('function success');
            }
            
            userData.clicks -= this.price;
            loadPage();
            // this.element.classList.add("uprade-button-clicked");

            //this.element.removeEventListener("click");
            
        }else{
            window.alert(`You do not have enough clicks! You need ${calculateNeededClicks(this.price, userData)}!`);
            return;
        }
    }

}

class utilityButton extends upgradeButton {
    constructor(){

    }
}