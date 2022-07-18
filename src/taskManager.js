import css from './style.css';
import { removeTask } from './projectManager';

class Task {
    constructor(title, description, priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    getTask() {
        return this;
    }
}

function generateTaskDiv(task) {
    const container = document.createElement("div");
    container.classList.add("task-card");
    const title = document.createElement("h2");
    title.textContent = task.title;
    const description = document.createElement("p");
    description.textContent = task.description;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.id = "remove-button";
    const priority = document.createElement("div");
    const color = "rgb(" + 2.55 * task.priority + "," + 2.55 * (100 - task.priority) + "," + 0 +", 1)";
    priority.style.backgroundColor = color;

    container.append(title, description, removeButton, priority);
    return container;
}

export {Task, generateTaskDiv}