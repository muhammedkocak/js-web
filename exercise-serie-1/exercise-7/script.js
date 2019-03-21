//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
//bonus...
let turn = 0;
let word = document.getElementById("btn");



function move(){

      turn ++;
      if(turn ===11){
        turn = 0;
      }



      let btn = document.getElementById("btn");
      btn.style.top = Math.floor((Math.random() * 430) + 1) + "px";
      btn.style.left = Math.floor((Math.random() * 500) + 1) + "px";


      switch(turn){
        case 0:
              word.textContent = "Rafffff me!"
              break;
        case 1:
              word.textContent = "click me!"
              break;
        case 2:
              word.textContent = "NOPE!!!"
              break;
        case 3:
              word.textContent = "Try again!!"
              break;
        case 4:
              word.textContent = "hahahaha!"
              break;
        case 5:
              word.textContent = "almost!!!"
              break;
        case 6:
              word.textContent = "neinn"
              break;
        case 7:
              word.textContent = "loserr"
              break;
        case 8:
              word.textContent = "bye"
              break;
        case 9:
              word.textContent = "pfff"
              break;
        case 10:
              word.textContent = "huh"
              break;
        case 11:
              word.textContent = "you got me!!!"
              break;
      }
}