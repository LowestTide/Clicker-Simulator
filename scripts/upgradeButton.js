import {upgradeButtonContainer} from './clicker-game.js';
import {userData} from './userData.js';


export class upgradeButton {
    constructor(description, price, clickMultiplier, clickAmount, textContent){
        this.description = description;
        this.price = price;
        this.clickAmount = clickAmount;
        this.clickMultiplier = clickMultiplier;
        this.textContent = textContent;
        this.element = null;
    }

    build(){
        this.element = document.createElement('button');
        let container = document.createElement('span');
        container.classList.add("upgrade-button-wrapper");
        container.textContent = this.description;
        upgradeButtonContainer.appendChild(container);

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
            this.element.remove();
            this.element = null;
            userData.principalAmount += this.clickAmount;
            userData.clickMultiplier += this.clickMultiplier;
            
            console.log(userData.clickMultiplier, userData.principalAmount);
            console.log('working?');
            
            userData.clicks -= this.price;
            
        }
    }

}