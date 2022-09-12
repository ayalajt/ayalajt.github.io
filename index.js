
// todo:
// change percentages to set heights and witdths
// fix portrait sizing
// replace java calc with mini golf app on resume

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
    let closestProj = element.target.closest(".project");
    let closeProjId = closestProj.getAttribute("id");
    closeProjId += "-info"
    document.getElementById(closeProjId).style.display = "flex";
}

function closeProjects(element) {
    console.log(element.target.classList)
    if (element.target.classList.contains("project-popup-bg")) {
        let elements = document.querySelectorAll(".project-popup-bg");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none"
        }
    }


}

