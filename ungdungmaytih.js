function add() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) + Number(number2); //16
    document.getElementById("result").innerHTML = result;
}

function sub() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) - Number(number2); //16
    document.getElementById("result").innerHTML = result;
}