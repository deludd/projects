function createElement(valueInput) {
    let div = document.createElement('div')
    div.className = "todoList";
    div.innerHTML = valueInput;
    document.querySelector('.list').append(div)
}

document.querySelector(".todo__add").onclick = function(e) {
    let valueInput = document.querySelector('.todo__text').value

    if( valueInput !== '') {
        createElement(valueInput)
    } else {
        alert('Please enter your ToDo')
    }

}