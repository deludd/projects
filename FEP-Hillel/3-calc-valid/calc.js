


let action = getAction()
let firstNumber = getYourNumber('A')
let secondNumber = getYourNumber('B')


function getAction() {
    let action
    do {
        action = prompt('Select an action * / + -')
    }while (!(action === '+' || action === '-' || action === '*' || action === '/'))

    return action
}

function getYourNumber(variableName) {
    let yourNumber
    do {
        yourNumber = Number(prompt(`Choose your first number ${variableName}`))
    }while (isNaN(yourNumber))

    return yourNumber
}

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

if (action === '+') {
    alert(`${firstNumber} + ${secondNumber} = ${plus(firstNumber,secondNumber)}`)
}else if(action === '-') {
    alert(`${firstNumber} - ${secondNumber} = ${minus(firstNumber,secondNumber)}`)
}else if (action === '*') {
    alert(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber,secondNumber)}`)
}else if (action === '/'){
    alert(`${firstNumber} / ${secondNumber} = ${divine(firstNumber,secondNumber)}`)
} else {
    alert(`You choose a wrong action:((`)
}
