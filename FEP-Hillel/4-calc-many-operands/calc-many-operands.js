let action = getAction()
let amountOperand = getAmountOfOperands()
let arrYourNumbers = []

function getAction() {
    let action
    do {
        action = prompt('Select an action * / + -')
    }while (!isActionValid(action))

    return action
}

function isActionValid(action) {
    return action === '+' || action === '-' || action === '*' || action === '/'
}

function getAmountOfOperands() {
    let amountOfOperands
    do {
        amountOfOperands = Number(prompt(`Choose the amount of operands`))
    }while (isAmountValid(amountOfOperands))

    return amountOfOperands
}

function isAmountValid(amountOfOperands) {
    return !(amountOfOperands > 1 && amountOfOperands <= 5) || isNaN(amountOfOperands)
}

for(let yourOperands = 1; yourOperands <= amountOperand; yourOperands++){
    let yourNumbers
    do {
        yourNumbers = Number(prompt(`Choose the ${yourOperands} number`))
    }while (isOperandsValid(yourNumbers))

    arrYourNumbers.push(yourNumbers)
}

function isOperandsValid(yourNumbers) {
    return isNaN(yourNumbers)
}

let plus = function (arrYourNumbers) {
    return arrYourNumbers.reduce((a,b) => a + b)
}

let minus = function (arrYourNumbers) {
    return arrYourNumbers.reduce((a,b) => a - b)
}

let multiply = function (arrYourNumbers) {
    return arrYourNumbers.reduce((a,b) => a * b)
}

let divine = function (arrYourNumbers) {
    return arrYourNumbers.reduce((a,b) => a / b)
}


if (action === '+') {
       alert(`${arrYourNumbers.join(action)} = ${plus(arrYourNumbers)}`)
    }else if(action === '-') {
        alert(`${arrYourNumbers.join(action)} = ${minus(arrYourNumbers)}`)
    }else if (action === '*') {
        alert(`${arrYourNumbers.join(action)} = ${multiply(arrYourNumbers)}`)
    }else if (action === '/'){
        alert(`${arrYourNumbers.join(action)} = ${divine(arrYourNumbers)}`)
    } else {
        alert(`You choose a wrong action:((`)
}

