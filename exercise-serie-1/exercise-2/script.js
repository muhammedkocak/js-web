//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function addition() {
    let field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;


    let result=parseFloat(field1)+parseFloat(field2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}



function substraction() {
    let field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;

    let result=parseFloat(field1)-parseFloat(field2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}



function multiplication() {
    let field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;

    let result=parseFloat(field1)*parseFloat(field2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}


function division() {
    let field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;

    let result=parseFloat(field1)/parseFloat(field2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}
