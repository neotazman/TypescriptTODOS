"use strict";
const inputForm = document.getElementById('new-task-form');
const addButton = document.getElementById('add');
const prioritySelector = document.getElementById('priority');
const deadlineStr = document.getElementById('deadline');
const descriptionStr = document.getElementById('description');
const displayContainer = document.getElementById('task-list');
// console.log(addButton)
const tasks = [];
class CreateNewToDoItem {
    constructor(name, created, priority, deadline, description) {
        this.name = name;
        this.created = created;
        this.priority = priority;
        this.deadline = deadline || '';
        this.description = description || '';
    }
    displayTasks() {
        console.log('sanity check');
    }
}
function displayTasks() {
    displayContainer.innerHTML = '';
    tasks.forEach((task, i) => {
        let isThereADeadline = task.deadline ? `<div class=\"task-${i}\">deadline: ${task.deadline}</div>` : '';
        let isThereADescription = task.description ? `<div class=\"task-${i}\">description: ${task.description}</div>` : '';
        displayContainer === null || displayContainer === void 0 ? void 0 : displayContainer.innerHTML += `<div class=\"task-${i}\">${task.name}: </div><div class=\"task-${i}\">created: ${task.created}</div><div class=\"task-${i}\">priority: ${task.priority}${isThereADeadline}${isThereADescription}</div>`;
    });
}
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let textBox = inputForm.children[1].value;
    let task = new CreateNewToDoItem(textBox, new Date().toString().split('G')[0], prioritySelector.value, deadlineStr === null || deadlineStr === void 0 ? void 0 : deadlineStr.value, descriptionStr === null || descriptionStr === void 0 ? void 0 : descriptionStr.value);
    tasks.push(task);
    console.table(tasks);
    displayTasks();
});
