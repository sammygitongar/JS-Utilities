function displayThis(some){
    document.querySelector("#myDisplay1").innerHTML = some;
}

function firstFunc(){
    displayThis("Hello");
}

function secondFunc(){
    displayThis("goodbye");
}

firstFunc();
secondFunc();

// =======================

function displaySum(some){
    document.getElementById("myDisplay2").innerHTML = some;
}

function sumAdder(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let passSum = sumAdder(10, 20);
displaySum(passSum);

// ======================================

function displaySum2(some2){
    document.getElementById("myDisplay3").innerHTML = some2;
}

function sumAdder2(no1,  no2){
    let sum2 = no1 + no2;
    displaySum2(sum2);
}

sumAdder2(7, 6);


// ==============================
function displaySum3(some3){
    document.querySelector("#myDisplay4").innerHTML = some3;
}

function sumAdderCall(uno, dos, callback){
    let sum3 = uno + dos;
    callback(sum3);
}

sumAdderCall(1, 2, displaySum3);