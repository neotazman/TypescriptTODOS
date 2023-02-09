type Inputs = 'text' | 'submit'
type PriorityLevel = 'Low' | 'Medium' | 'High' // keeping the next line in case i need it later 
// enum PriorityLevel { LOW = 'Low', MEDIUM = 'Medium', HIGH = 'High'} // in the end, i could've just used type instead of enum

interface ToDoItem {
    name: string,
    created: string,
    priority: PriorityLevel,
    deadline?: string,
    description?: string,
}

const inputForm : HTMLElement | null= document.getElementById('new-task-form')
const addButton : HTMLElement | null = document.getElementById('add')
const prioritySelector : HTMLElement | null = document.getElementById('priority')
const deadlineStr : HTMLElement | null = document.getElementById('deadline')
const displayContainer : HTMLElement | null = document.getElementById('task-list')
// console.log(addButton)

const tasks : ToDoItem[] = []

class CreateNewToDoItem implements ToDoItem {
    name: string
    created: string
    priority: PriorityLevel
    deadline?: string | undefined;
    constructor(name: string, created: string, priority: PriorityLevel, deadline?: string) {
        this.name = name
        this.created = created
        this.priority = priority
        this.deadline = deadline || ''
    }
}

function displayTasks(): void {
    displayContainer!.innerHTML = ''
    tasks.forEach((task, i) => {
        let isThereADeadline = task.deadline ? ' deadline: ' + task.deadline : ''
        displayContainer?.innerHTML+= `<div class=\"task-${i}\">${task.name}: created: ${task.created} priority: ${task.priority}${isThereADeadline}</div>`
    })
}

addButton!.addEventListener('click', (e) => {
    e.preventDefault()
    let textBox: string = inputForm!.children[1].value
    let task = new CreateNewToDoItem (textBox, new Date().toString().split('G')[0], prioritySelector!.value, deadlineStr?.value)
    tasks.push(task)
    console.log(deadlineStr.value)
    console.table(tasks)
    displayTasks()
})
