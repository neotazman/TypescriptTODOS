"use strict";
const inputForm = document.querySelector('#new-task-title');
const addButton = document.getElementById('add');
console.log(addButton);
// addButton.addEventListener('click', () => console.log(inputForm))
console.log(inputForm);
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
});
