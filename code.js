"use strict";
const inputForm = document.getElementById('new-task-form');
const addButton = document.getElementById('add');
const prioritySelector = document.getElementById('priority');
const deadlineStr = document.getElementById('deadline');
const displayContainer = document.getElementById('task-list');
// console.log(addButton)
const tasks = [];
class CreateNewToDoItem {
    constructor(name, created, priority, deadline) {
        this.name = name;
        this.created = created;
        this.priority = priority;
        this.deadline = deadline || '';
    }
}
function displayTasks() {
    displayContainer.innerHTML = '';
    tasks.forEach((task, i) => {
        let isThereADeadline = task.deadline ? ' deadline: ' + task.deadline : '';
        displayContainer === null || displayContainer === void 0 ? void 0 : displayContainer.innerHTML += `<div class=\"task-${i}\">${task.name}: created: ${task.created} priority: ${task.priority}${isThereADeadline}</div>`;
    });
}
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let textBox = inputForm.children[1].value;
    let task = new CreateNewToDoItem(textBox, new Date().toString().split('G')[0], prioritySelector.value, deadlineStr === null || deadlineStr === void 0 ? void 0 : deadlineStr.value);
    tasks.push(task);
    console.log(deadlineStr.value);
    console.table(tasks);
    displayTasks();
});
