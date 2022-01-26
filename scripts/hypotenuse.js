const sides = document.querySelectorAll(".side");
const calculatebtn = document.querySelector("#Calculate-hypotenuse");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumofsquares = a*a + b*b;
    return sumofsquares;
}

function CalculateHypotenuse () {
const sumofsquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
const lengthOfHypotenuse = Math.sqrt(sumofsquares);
outputEl.innerText = "The Length Of Hypotenuse is " + lengthOfHypotenuse; 
}

calculatebtn.addEventListener('click', CalculateHypotenuse)