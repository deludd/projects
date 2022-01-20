const addButton = document.querySelector('.button__add')
const inputAll = document.querySelectorAll('.todo__text')
const contactItemTemplate = document.querySelector('#contactItemTemplate').innerHTML
const contactList = document.querySelector('#contactList')

addButton.onclick = function(e) {
    let contact = getContact()

    if(isContactValid(contact)) {
        createElement(contact)
        clearInput()
    } else {
        alert('Please enter your contact')
    }
}

function isContactValid (contact) {
    return contact.name.trim() !== ''
        && contact.surname.trim() !== ''
        && !isNaN(contact.phone)
        && contact.phone.trim() !== ''
}

function getContact () {
    const contact = {}

    inputAll.forEach(input => {
        contact[input.name] = input.value
    })

    return contact
}

function createElement(contact) {
    const contactItemHTML = contactItemTemplate
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{phone}}', contact.phone)

    contactList.insertAdjacentHTML('beforeend', contactItemHTML)
}

function clearInput () {
    inputAll.forEach(input => {
        input.value = ''
    })
}