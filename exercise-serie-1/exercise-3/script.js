//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

function form() {
    event.preventDefault()
    let field1=document.getElementById("name").value;
    let field2=document.getElementById("power").value;
    let field3=document.getElementById("motivation").value;
    let field4=document.getElementById("plan").value;
    

    let result=(field1 + " - " + field2 + " - " + field3 + " - " + field4);
    

    {
        document.getElementById("display2").innerHTML=result;
    }
}


function reset() {
    document.getElementById("form").reset();
}

let display =document.getElementById("display");
display.addEventListener("click", form);