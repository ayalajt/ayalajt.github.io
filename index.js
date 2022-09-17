
// todo:
// replace java calc with mini golf app on resume
// popup animation
// min width body fix
// on closing popup reset to img-1
// global consts for proj-x-images



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
    if (element.target.classList.contains("project-popup-bg")) {
        let elements = document.querySelectorAll(".project-popup-bg");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none"
        }
    }
}

function closeProjectsX() {
    let elements = document.querySelectorAll(".project-popup-bg");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"
    }
}

function projOneNextImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-1-image").src;
        if (currImgURL.includes("img-1")) {
            document.getElementById("proj-1-image").src = "./images/proj-1-tipcalc/img-2.png";
            document.getElementById("proj-1-tip").innerHTML = "Worker Results Table"
            document.getElementById("proj-1-left").classList.add("active");
        }
        else if (currImgURL.includes("img-2")) {
            document.getElementById("proj-1-image").src = "./images/proj-1-tipcalc/img-3.png";
            document.getElementById("proj-1-tip").innerHTML = "Tip History"
        }
        else if (currImgURL.includes("img-3")) {
            document.getElementById("proj-1-image").src = "./images/proj-1-tipcalc/img-4.png";
            document.getElementById("proj-1-tip").innerHTML = "Cash Reports Total"
            document.getElementById("proj-1-right").classList.remove("active");
        }
    }
}

function projOnePrevImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-1-image").src;
        if (currImgURL.includes("img-2")) {
            document.getElementById("proj-1-image").src = "./images/proj-1-tipcalc/img-1.png";
            document.getElementById("proj-1-tip").innerHTML = "Input Worker Information"
            document.getElementById("proj-1-left").classList.remove("active");
        }
        else if (currImgURL.includes("img-3")) {
            document.getElementById("proj-1-image").src = "./images/proj-1-tipcalc/img-2.png";
            document.getElementById("proj-1-tip").innerHTML = "Worker Results Table"
        }
        else if (currImgURL.includes("img-4")) {
            document.getElementById("proj-1-image").src = "./images/proj-1-tipcalc/img-3.png";
            document.getElementById("proj-1-tip").innerHTML = "Tip History"
            document.getElementById("proj-1-right").classList.add("active");

        }
    }
}


function projTwoNextImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-2-image").src;
        if (currImgURL.includes("img-1")) {
            document.getElementById("proj-2-image").src = "./images/proj-2-ramaction/img-2.png";
            document.getElementById("proj-2-tip").innerHTML = "Flowchart creation & results"
            document.getElementById("proj-2-left").classList.add("active");
        }
        else if (currImgURL.includes("img-2")) {
            document.getElementById("proj-2-image").src = "./images/proj-2-ramaction/img-3.png";
            document.getElementById("proj-2-tip").innerHTML = "Guide"
            document.getElementById("proj-2-right").classList.remove("active");
        }
    }
}

function projTwoPrevImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-2-image").src;
        if (currImgURL.includes("img-2")) {
            document.getElementById("proj-2-image").src = "./images/proj-2-ramaction/img-1.png";
            document.getElementById("proj-2-tip").innerHTML = "Homepage"
            document.getElementById("proj-2-left").classList.remove("active");
        }
        else if (currImgURL.includes("img-3")) {
            document.getElementById("proj-2-image").src = "./images/proj-2-ramaction/img-2.png";
            document.getElementById("proj-2-tip").innerHTML = "Flowchart creation & results"
            document.getElementById("proj-2-right").classList.add("active");

        }
    }
}
