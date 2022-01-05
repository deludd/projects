const questions = [
    { question: 'Сколько будет 2+2?', answer: 4, type: 'prompt' },
    { question: 'Солнце встает на востоке?', answer: true, type: 'confirm' },
    { question: 'Сколько будет 5 / 2 ?', answer: "NaN", type: 'prompt' },
    { question: 'Какого цвета небо ?', answer: "голубого", type: 'prompt' },
    { question: 'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого» ?', answer: 42, type: 'prompt' },
]

let points = 0
calculateResult()

function handleQuestion(question){
    let handler

    if (question.type === 'prompt') {
        handler = prompt
    } else if (question.type === 'confirm') {
        handler = confirm
    }
    return chooseType(handler, question);
}

function chooseType(handler, question) {
    return handler(question.question) == question.answer
}

function calculateResult() {
    questions.forEach(question => {
        if (handleQuestion(question)) {
            points += 10;
        }
    })
    
    return points
}


alert(`Ваш результат ${points} баллов!`);