//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function submitBday() {
    let Q4A = "Your birthday is: ";
    let Bdate = document.getElementById('bday').value;
    let num1 = +new Date(Bdate);
    Q4A += Bdate + ". You are " + ~~ ((Date.now() - num1) / (31557600000));
    let theBday = document.getElementById('resultBday');
    theBday.innerHTML = Q4A;
}

    bday.max = new Date().toISOString().split("T")[0];