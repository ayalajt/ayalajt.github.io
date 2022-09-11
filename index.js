
// todo:
// change percentages to set heights and witdths
// fix portrait sizing

document.addEventListener("click", closeProjects)
window.onload = function () {
    loadProjects();
}

function loadProjects() {
    let projectNum = 1;
    let projectName = "proj-";
    const totalProjects = 7;

    for (var i = 0; i < totalProjects; i++) {
        let currProject = projectName + projectNum
        document.getElementById(currProject).addEventListener("click", openProject)
        projectNum++;
    }
}




function openProject(element) {
    let projectId = element.target.getAttribute("id");
    projectId += "-info"
    document.getElementById(projectId).style.display = "flex";
}

function closeProjects(element) {

    if (element.target.classList.contains("project-popup-bg")) {
        let elements = document.querySelectorAll(".project-popup-bg");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none"
        }
    }


}

