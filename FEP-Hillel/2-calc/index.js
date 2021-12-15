let action = prompt('Select an action * / + -')
let firstNumber = prompt('Choose your first number')
let secondNumber = prompt('Choose your second number')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let plus = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

let minus = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

let multiply = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

let divine = function (firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

if (action == '+') {
    alert(`${firstNumber} + ${secondNumber} = ${plus(firstNumber,secondNumber)}`)
}else if(action == '-') {
    alert(`${firstNumber} - ${secondNumber} = ${minus(firstNumber,secondNumber)}`)
}else if (action == '*') {
    alert(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber,secondNumber)}`)
}else if (action == '/'){
    alert(`${firstNumber} / ${secondNumber} = ${divine(firstNumber,secondNumber)}`)
} else {
    alert(`You choose a wrong action:((`)
}