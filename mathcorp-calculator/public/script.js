async function calculate(){

const a=document.getElementById("num1").value;

const b=document.getElementById("num2").value;

const operation=document.getElementById("operation").value;

const response=await fetch("/calculate",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({a,b,operation})

});

const data=await response.json();

document.getElementById("result").innerText="Result = "+data.result;

}