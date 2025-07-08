function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const timestamp = new Date().toLocaleString();
    const taskItem = createTaskElement(taskText, timestamp);

    document.getElementById("pendingTasks").appendChild(taskItem);
    input.value = "";
}

function createTaskElement(text, time) {
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.innerText = `${text} 🕒 ${time}`;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete";
    completeBtn.innerText = "Complete";
    completeBtn.onclick = () => markComplete(li, text);

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTask(li, span);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    return li;
}

function markComplete(taskItem, text) {
    taskItem.remove();
    const time = new Date().toLocaleString();
    const completedItem = createTaskElement(`${text} ✅`, time);
    completedItem.querySelector(".complete").remove(); // Remove complete button for done tasks
    document.getElementById("completedTasks").appendChild(completedItem);
}

function editTask(taskItem, spanElement) {
    const newText = prompt("Edit your task:", spanElement.innerText.split("🕒")[0].trim());
    if (newText) {
        const time = new Date().toLocaleString();
        spanElement.innerText = `${newText} 🕒 ${time}`;
    }
}
