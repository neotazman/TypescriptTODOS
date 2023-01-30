type Inputs = 'text' | 'submit'

const inputForm = document.querySelector('#new-task-title')
const addButton : HTMLElement | null = document.getElementById('add')
console.log(addButton)

// addButton.addEventListener('click', () => console.log(inputForm))
console.log(inputForm)

addButton?.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
})