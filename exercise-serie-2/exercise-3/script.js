//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...


let display = document.getElementById('display');
let click = document.getElementById('click');
let multiply = document.getElementById('multiply');
let autoclick = document.getElementById('autoclick');
let bonus = document.getElementById('bonus');

let multiplierCost = 50;
let autoclickCost = 100;
let bonusCost = 500;

let autoclickOn = false;
let bonusOn = false;

let score = 0;
let clickValue = 1;
let multiplier = 1;
let bonusTime = 5;

function displayScore() {
  display.innerHTML = score;
}

function displayMultiplier() {
  multiply.value = 'Multiplier x' + multiplier + ' (next: cost ' + multiplierCost + ')';
}

function displayAutoclick() {
  autoclick.value = 'Autoclick (cost ' + autoclickCost + ')';
}

function displayBonus() {
  bonus.value = 'Bonus (cost ' + bonusCost + ')';
}

function displayBonusTime() {
  bonus.value = 'Bonus (time: ' + bonusTime + ' sec)';
}

function multiplyEnabler() {
  if (score >= multiplierCost) {
    multiply.disabled = false;
  } else {
    multiply.disabled = true;
  }
}

function autoclickEnabler() {
  if (!autoclickOn && score >= autoclickCost) {
    autoclick.disabled = false;
  } else {
    autoclick.disabled = true;
  }
}

function bonusEnabler() {
  if (!bonusOn && score >= bonusCost) {
    bonus.disabled = false;
  } else {
    bonus.disabled = true;
  }
}

function buttonsEnabler() {
  multiplyEnabler();
  autoclickEnabler();
  bonusEnabler();
}

function increaseScore() {
  score += clickValue;
  buttonsEnabler();
  displayScore();
}


function increaseMultiplier() {
  score -= multiplierCost;
  multiplier *= 2;
  clickValue = multiplier;
  if (bonusOn) {
    clickValue *= 2;
  }
  multiplierCost *= 1.5;
  buttonsEnabler();
  displayScore();
  displayMultiplier();
}

function enableAutoclick() {
  score -= autoclickCost;
  autoclickOn = true;
  autoclick.disabled = true;
  displayScore();
}

function autoclickF() {
  if (autoclickOn) {
    increaseScore();
  }
}

function enableBonus() {
  score -= bonusCost;
  bonusOn = true;
  clickValue *= 2;
  bonus.disabled = true;
  displayScore();
  displayBonusTime();
}

function disableBonus() {
  bonusOn = false;
  bonusTime = 30;
  clickValue = multiplier;
  displayBonus();
  buttonsEnabler();
}

function bonusF() {
  if (bonusOn) {
    --bonusTime;
    displayBonusTime();
    if (bonusTime === 0) {
      disableBonus();
    }
  }
}

displayScore();
displayMultiplier();
displayAutoclick();
displayBonus();
multiply.disabled = true;
autoclick.disabled = true;
bonus.disabled = true;

click.addEventListener('click', increaseScore);
multiply.addEventListener('click', increaseMultiplier);
autoclick.addEventListener('click', enableAutoclick);
bonus.addEventListener('click', enableBonus);
autoclickInterval = window.setInterval(autoclickF, 1000);
bonusInterval = window.setInterval(bonusF, 1000);
