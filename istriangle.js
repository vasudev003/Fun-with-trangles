const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#isTriangleBtn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles; 
}

function isTriangle(){
const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value) );
if (sumOfAngles === 180){
    outputEl.innerText = "YAY, The angles from a Triangle";
}
else{
    outputEl.innerText = "oh oh! The angles don't from a Triangle";
}
}

isTriangleBtn.addEventListener("click", isTriangle);