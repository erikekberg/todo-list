import {Task, generateTaskDiv} from "./taskManager";
import {addProject} from "./projectManager";

const addProjectButton = document.querySelector(".add-project-button");
addProjectButton.addEventListener("click", () => {
    addProject();
})