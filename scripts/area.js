const base = document.querySelector("#base-area");
const height = document.querySelector("#height-area");
const checkAreaBtn = document.querySelector("#chck-Area-Btn");
const outputEl = document.querySelector("#output");

function calculateFormula (a,b){
    const formula = (a * b) / 2 ;
   return formula;
}

function AreaOFaTriangle (){
const formula = calculateFormula(Number(base.value) , Number(height.value));
outputEl.innerText= "area of triangle is : " + formula ;
}

checkAreaBtn.addEventListener('click', AreaOFaTriangle )