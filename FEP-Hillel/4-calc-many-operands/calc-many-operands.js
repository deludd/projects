const ACTIONS = {'+': plus, '-' : minus, '*' : multiply, '/' : divine}
const ACTION_LIST = Object.keys(ACTIONS)

const action = getAction()
const amountOperand = getAmountOfOperands()
const arrYourNumbers = getYourNumbers(amountOperand)
const result = calculate(arrYourNumbers, action)

showResult(arrYourNumbers, action, result)

function getAction() {
    let action

    do {
        action = prompt('Select an action * / + -')
    }while (!isActionValid(action))

    return action
}

function isActionValid(action) {
    return ACTION_LIST.includes(action)
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

function getYourNumbers(amountOperand) {
    let yourArrayNumbers = []

    for(let yourOperands = 1; yourOperands <= amountOperand; yourOperands++){
       let yourNumber

        do {
            yourNumber = Number(prompt(`Choose the ${yourOperands} number`))
        }while (isOperandsValid(yourNumber))

        yourArrayNumbers.push(yourNumber)
    }

    return yourArrayNumbers
}

function isOperandsValid(yourNumbers) {
    return isNaN(yourNumbers)
}

function plus(operandA, operandB) {
    return operandA + operandB
}

function minus(operandA, operandB) {
    return operandA - operandB
}

function multiply(operandA, operandB) {
    return operandA * operandB
}

 function divine(operandA, operandB) {
    return operandA / operandB
}

function calculate(operands, action){
    const mathFunc = ACTIONS[action]

    return operands.reduce((a,b) => mathFunc(a,b))
}

function showResult(operands, action, result){
    const formula = arrYourNumbers.join(` ${action} `)

    alert(`${formula} = ${result}`)
}

