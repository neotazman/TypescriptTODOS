type Inputs = 'text' | 'submit'

interface ToDoItem {
    name: string,
    created: object,
    priority?: string,
    deadline?: string,
    description?: string,
}

const inputForm : HTMLElement | null = document.getElementById('new-task-form')
const addButton : HTMLElement | null = document.getElementById('add')
// console.log(addButton)

const tasks : ToDoItem[] = []

console.log(inputForm)

class CreateNewToDoItem {
    name: string
    created: string
    constructor(name: string, created: string) {
        this.name = name
        this.created = created
    }
}

addButton!.addEventListener('click', (e) => {
    e.preventDefault()
    let task = new CreateNewToDoItem(inputForm?.children[0].value, new Date().toString())
    console.log(task)
})

let x = new Date()

console.log(x)