"use strict";
const inputForm = document.getElementById('new-task-form');
const addButton = document.getElementById('add');
// console.log(addButton)
const tasks = [];
console.log(inputForm);
class CreateNewToDoItem {
    constructor(name, created) {
        this.name = name;
        this.created = created;
    }
}
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let task = new CreateNewToDoItem(inputForm === null || inputForm === void 0 ? void 0 : inputForm.children[0].value, new Date().toString());
    console.log(task);
});
let x = new Date();
console.log(x);
