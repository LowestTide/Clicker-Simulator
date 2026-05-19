


let principalAmount = 1;
let clickMultiplier = 1;
const clickIncrease = principalAmount * clickMultiplier;
let clicks = 0;
let clickss = 0;
const playerData = {
    name: 'null',
    

}
const localClicks = localStorage.getItem("clicks", clicks);
const clickerCounter = document.querySelector('.clicks-counter');
const clickerButton = document.querySelector('.js-clicker-button');
const nav = document.querySelector('nav');

clickerButton.addEventListener("click", () => {
    clickss += clickIncrease;
    
    updateClickerCounter();
})

setTimeout()

function updateClickerCounter(){
    clickerCounter.innerHTML = `Clicks: ${clickss}`;
}