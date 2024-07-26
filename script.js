const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const displayValue = document.getElementById("displayValue");

async function RandomGenerator(){

  displayValue.innerHTML = "";
  let From = Number(range1.value);
  let To = Number(range2.value);
  
  
  if(!isNaN(From && To)){
    let random = Math.floor(Math.random()*To+1);
    displayValue.innerHTML = random;
  }
  else{
    alert("Please enter a number");
  }
 
  
   
}

