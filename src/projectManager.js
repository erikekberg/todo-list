import {Task, generateTaskDiv} from "./taskManager";
import './style.css';

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = []
    }

    displayProject() {
        console.log(this);
        const taskContainer = document.querySelector(".task-container");
        taskContainer.innerHTML = "";
        
        this.tasks.forEach(element => {
            const instance = generateTaskDiv(element);
            taskContainer.appendChild(instance);
            instance.querySelector("button").addEventListener("click", () => {
                console.log("hello world");
                this.tasks.splice(this.tasks.indexOf(element), 1);
                this.displayProject();
                document.body.removeChild(addTaskButton);
            })
        });
        
        const addTaskButton = document.createElement("button");
        addTaskButton.textContent = "+";
        addTaskButton.classList.add("add-task-button");
        addTaskButton.addEventListener("click", () => {
            this.displayAddTaskWindow();
            document.body.removeChild(addTaskButton);
        })

        //const uselessButtons = document.querySelectorAll(".add-task-button");
        //uselessButtons.forEach((button) => {
        //    document.removeChild(button);
        //})
        document.body.appendChild(addTaskButton);
    }
    displayAddTaskWindow() {
        const addTaskWindow = document.createElement("div");
        addTaskWindow.classList.add("add-window");
    
        const titleDiv = document.createElement("div");
        const titleInput = document.createElement("input");
        titleInput.id = "title"
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        titleLabel.for = "title";
        titleDiv.append(titleLabel, titleInput);
    
        const descriptionDiv = document.createElement("div");
        const descriptionInput = document.createElement("input");
        descriptionInput.id = "description"
        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";
        descriptionLabel.for = "description";
        descriptionDiv.append(descriptionLabel, descriptionInput);
    
        const priorityDiv = document.createElement("div")
        const priorityInput = document.createElement("input");
        priorityInput.type = "range";
        priorityInput.min = 0;
        priorityInput.max = 100;
        priorityInput.id = "priority"
        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";
        priorityLabel.for = "priority";
        priorityDiv.append(priorityLabel, priorityInput);
    
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        const addButton = document.createElement("button");
        addButton.textContent = "ADD";
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "CANCEL";
        buttonsDiv.append(addButton, cancelButton);
    
        cancelButton.addEventListener("click", () => {
            document.body.removeChild(addTaskWindow);
        })
    
        addButton.addEventListener("click", () => {
            return addNewTask();
        })
    
        addTaskWindow.append(titleDiv, descriptionDiv, priorityDiv, buttonsDiv);
        document.body.appendChild(addTaskWindow);
    
        function getTaskInfo() {
            return [titleInput.value, descriptionInput.value, priorityInput.value];
        }
    
        const addNewTask = () => {
            document.body.removeChild(addTaskWindow);
            console.log(this);
            this.tasks.push(new Task(getTaskInfo()[0], getTaskInfo()[1], getTaskInfo()[2]));
            this.displayProject();
        }
    
    }
}


function displayAddProjectWindow() {
    const addProjectWindow = document.createElement("div");
    addProjectWindow.classList.add("add-window");

    const titleDiv = document.createElement("div");
    const titleInput = document.createElement("input");
    titleInput.id = "title"
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.for = "title";
    titleDiv.append(titleLabel, titleInput);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");
    const addButton = document.createElement("button");
    addButton.textContent = "ADD";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "CANCEL";
    buttonsDiv.append(addButton, cancelButton);

    cancelButton.addEventListener("click", () => {
        document.body.removeChild(addProjectWindow);
    })

    addButton.addEventListener("click", () => {
        return addNewProject();
    })

    addProjectWindow.append(titleDiv, buttonsDiv);
    document.body.appendChild(addProjectWindow);

    function getProjectInfo() {
        return titleInput.value;
    }

    function addNewProject() {
        projects.push(new Project(getProjectInfo()));
        projectList.innerHTML = "";
        projects.forEach(project => {
        const projectLi = document.createElement("li");
        projectLi.textContent = project.title;
        projectLi.addEventListener("click", () => {
            if(document.querySelector(".add-task-button")) {
                document.body.removeChild(document.querySelector(".add-task-button"))
            }
            project.displayProject();
        })
        projectList.appendChild(projectLi);
    });
        document.body.removeChild(addProjectWindow);
    }
}



const projectList = document.querySelector("#project-list");
const projects = [];

function addProject() {
    displayAddProjectWindow();
}

const removeTask = Project.prototype.removeTask;

export {addProject, removeTask};