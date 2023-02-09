// type Inputs = 'text' | 'submit' never used this
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
const descriptionStr : HTMLElement | null = document.getElementById('description')
const displayContainer : HTMLElement | null = document.getElementById('task-list')
// console.log(addButton)

const tasks : ToDoItem[] = []

class CreateNewToDoItem implements ToDoItem {
    name: string
    created: string
    priority: PriorityLevel
    deadline?: string | undefined
    description?: string | undefined
    constructor(name: string, created: string, priority: PriorityLevel, deadline?: string, description?: string) {
        this.name = name
        this.created = created
        this.priority = priority
        this.deadline = deadline || ''
        this.description = description || ''
    }
}

function displayTasks(): void {
    displayContainer!.innerHTML = ''
    tasks.forEach((task, i) => {
        let isThereADeadline = task.deadline ? `<div class=\"task-${i}\">deadline: ${task.deadline}</div>` : ''
        let isThereADescription = task.description ? `<div class=\"task-${i}\">description: ${task.description}</div>` : ''
        displayContainer?.innerHTML+= `<div class=\"task-${i}\">${task.name}: </div><div class=\"task-${i}\">created: ${task.created} </div><div class=\"task-${i}\">priority: ${task.priority}${isThereADeadline}</div>${isThereADescription}`
    })
}

addButton!.addEventListener('click', (e) => {
    e.preventDefault()
    let textBox: string = inputForm!.children[1].value
    let task = new CreateNewToDoItem (textBox, new Date().toString().split('G')[0], prioritySelector!.value, deadlineStr?.value, descriptionStr?.value)
    tasks.push(task)
    console.table(tasks)
    displayTasks()
})
