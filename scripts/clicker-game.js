


let principalAmount = 1;
let clickMultiplier = 1;
let clickIncrease = principalAmount * clickMultiplier;
let clicks = 0;
let clickss = 0;
const playerData = {
    name: 'null',
    

}
const localClicks = localStorage.getItem("clicks", clicks);
const clickerCounter = document.querySelector('.clicks-counter');
const clickerButton = document.querySelector('.js-clicker-button');
const upgradeButtonContainer = document.querySelector('.js-upgrade-button-container');
const nav = document.querySelector('nav');


class upgradeButton {
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
        this.element.textContent = this.textContent;
        this.element.classList.add("upgrade-button");
        this.element.upgradeButton = this;
        upgradeButtonContainer.appendChild(this.element);
        this.element.addEventListener("click", () => {
            console.log('test');
            this.purchase();
        })
        
        return this.element;
    }

    purchase(){
        

        if (this.element && this.price <= clickss) {
            this.element.remove();
            this.element = null;
            principalAmount += this.clickAmount;
            clickMultiplier += this.clickMultiplier;
            clickIncrease = principalAmount * clickMultiplier;
            console.log('working?');
            console.log(principalAmount);
            clicks -= this.price;
        }
    }

}

function loadPage(){

    updateClickerCounter();
}

const testButton = new upgradeButton('null', 1, 1, 1, 'null');
const testButton2 = new upgradeButton("null 2", 10, 1, 0, 'null');
console.log(testButton);
new Promise((resolve) => {
    testButton.build();
    testButton2.build();
    resolve();
}).then(()=> {
    document.querySelectorAll(".upgrade-button")
    .forEach( upgButton => {
        upgButton.addEventListener("click", () => {
            
        })
})
})




clickerButton.addEventListener("click", () => {
    clickss += clickIncrease;
    
    updateClickerCounter();
})



function updateClickerCounter(){
    clickerCounter.innerHTML = `Clicks: ${clickss}`;
}