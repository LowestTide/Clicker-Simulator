import {upgradeButtonContainer, loadPage} from './clicker-game.js';
import {userData, saveToStorage} from './userData.js';


function calculateNeededClicks(price, userData){
    if(price - userData.clicks === 1){
        return '1 more click';
    }else {
        return `${price-userData.clicks} more clicks`;
    }
}


export class upgradeButton {
    constructor(description, price, clickMultiplier, clickAmount, textContent, bought=false){
        this.description = description;
        this.price = price;
        this.clickAmount = clickAmount;
        this.clickMultiplier = clickMultiplier;
        this.textContent = textContent;
        this.element = null;
        this.isClicked = false;
        this.bought = bought;
    }

    build(){
        this.element = document.createElement('button');
        let container = document.createElement('span');
        container.classList.add("upgrade-button-wrapper");
        container.textContent = this.description;
        upgradeButtonContainer.appendChild(container);

        let priceContainer = document.createElement('span');
        priceContainer.textContent = `Price: ${this.price}`;
        priceContainer.classList.add('price-container');
        container.appendChild(priceContainer);

        this.element.textContent = this.textContent;
        this.element.classList.add("upgrade-button");
        this.element.upgradeButton = this;
        container.appendChild(this.element);
        console.log(this.textContent);
        this.element.addEventListener("click", () => {
            this.purchase();
           
            this.bought = true;
            console.log(this.bought);
        })
        
        return this.element;
    }

    purchase(){
        
        
        if (this.element && this.price <= userData.clicks && this.bought === false) {
            this.element.classList.add("upgrade-button-clicked");
            
            
            
            console.log(userData.clicks);
            userData.principalAmount += this.clickAmount;
            userData.clickMultiplier += this.clickMultiplier;
            
            
            

            
            
            userData.clicks -= this.price;
            loadPage();
            

            this.element.removeEventListener("click", () => {
                this.purchase();
            });
            this.bought = true;
            saveToStorage({
                clicks: userData.clicks,
                principalAmount: userData.principalAmount,
                clickMultiplier: userData.clickMultiplier
            });
        }else{
            if(this.bought===true){
                
                window.alert("You already own that button! : O");
                return;
            }else{
                
                window.alert(`You do not have enough clicks! You need ${calculateNeededClicks(this.price, userData)}!`);
                return;
            }
            
        }
    }

}

export class utilityButton{
    
    constructor(description, price, textContent, fun=null, bought=false, toggleOn=false){
        this.description = description;
        this.price = price;
        this.textContent = textContent;
        this.fun = fun;
        this.bought=bought;
        this.toggleOn = toggleOn;
    }
    build(){

        this.element = document.createElement('button');
        
        let container = document.createElement('span');
        container.classList.add("upgrade-button-wrapper");
        container.textContent = this.description;
        upgradeButtonContainer.appendChild(container);


        let priceContainer = document.createElement('span');
        priceContainer.textContent = `Price: ${this.price}`;
        priceContainer.classList.add('price-container');
        container.appendChild(priceContainer);

        console.log(this.element);
        this.element.textContent = this.textContent;
        this.element.classList.add("utility-button");
        container.appendChild(this.element);
        this.element.addEventListener("click", () => {
            
            this.purchase();
        })
    }
    //fix this buggy upgrade utility button next so that it doesn't suck anymore
    //sir yes sir (future pranav)
    purchase(){
        if (this.element && this.price <= userData.clicks){

            
            this.element.classList.add("upgrade-button-clicked");
            this.element.classList.remove('utility-button');

            this.fun(this.element, this.bought, this.price);

            userData.clicks -= this.price;
            loadPage();
            /*

            let divContainer = document.createElement('div');
            divContainer.classList.add('autoclicker-section-container');
            
            let newButton = document.createElement('button');
            newButton.classList.add('autoclicker-toggle-button');



            this.element.parentElement.append(divContainer, newButton);

            divContainer.append(this.element, newButton);

            
            
            this.toggleOn ? newButton.textContent = 'ON' : newButton.textContent = 'OFF';
            newButton.addEventListener('click', () => {
                this.toggleOn = !this.toggleOn;
                this.toggleOn ? newButton.textContent = 'ON' : newButton.textContent = 'OFF';
                console.log('running?')
                if(this.toggleOn){
                    console.log('running2');
                    this.fun(true, this.toggleOn);
                }else{
                    console.log('not running?')
                    this.fun(false, this.toggleOn);
                }
            })
            */
            

            
            
            this.bought = true;

        }else{
            window.alert(`You do not have enough clicks! You need ${calculateNeededClicks(this.price, userData)}!`);
            return;
        }
    }
}