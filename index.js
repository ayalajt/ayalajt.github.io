
// todo:
// popup animation, start at clicked proj and make big
// min width body fix
// on closing popup reset to img-1
// minimalist styling
// mobile design
// load website gracefully (fade in)
// favicon


document.addEventListener("click", closeProjects)
window.onload = function () {
    loadProjects();
}

function loadProjects() {
    let projectNum = 1;
    let projectName = "proj-";
    const totalProjects = 8;

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


function projThreeNextImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-3-image").src;
        if (currImgURL.includes("img-1")) {
            document.getElementById("proj-3-image").src = "./images/proj-3-minigolf/img-2.png";
            document.getElementById("proj-3-tip").innerHTML = "Game Creation Screen"
            document.getElementById("proj-3-left").classList.add("active");
        }
        else if (currImgURL.includes("img-2")) {
            document.getElementById("proj-3-image").src = "./images/proj-3-minigolf/img-3.png";
            document.getElementById("proj-3-tip").innerHTML = "Current Game Input Screen"
        }
        else if (currImgURL.includes("img-3")) {
            document.getElementById("proj-3-image").src = "./images/proj-3-minigolf/img-4.png";
            document.getElementById("proj-3-tip").innerHTML = "Winner Screen"
            document.getElementById("proj-3-right").classList.remove("active");
        }
    }
}


function projThreePrevImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-3-image").src;
        if (currImgURL.includes("img-2")) {
            document.getElementById("proj-3-image").src = "./images/proj-3-minigolf/img-1.png";
            document.getElementById("proj-3-tip").innerHTML = "Home Screen"
            document.getElementById("proj-3-left").classList.remove("active");
        }
        else if (currImgURL.includes("img-3")) {
            document.getElementById("proj-3-image").src = "./images/proj-3-minigolf/img-2.png";
            document.getElementById("proj-3-tip").innerHTML = "Game Creation Screen"
        }
        else if (currImgURL.includes("img-4")) {
            document.getElementById("proj-3-image").src = "./images/proj-3-minigolf/img-3.png";
            document.getElementById("proj-3-tip").innerHTML = "Current Game Input Screen"
            document.getElementById("proj-3-right").classList.add("active");
        }
    }
}


function projSixNextImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-6-image").src;
        if (currImgURL.includes("img-1")) {
            document.getElementById("proj-6-image").src = "./images/proj-6-linearcalc/img-2.png";
            document.getElementById("proj-6-tip").innerHTML = "Matrix Calculator"
            document.getElementById("proj-6-left").classList.add("active");
        }
        else if (currImgURL.includes("img-2")) {
            document.getElementById("proj-6-image").src = "./images/proj-6-linearcalc/img-3.png";
            document.getElementById("proj-6-tip").innerHTML = "Permutation/Combination Calculator"
        }
        else if (currImgURL.includes("img-3")) {
            document.getElementById("proj-6-image").src = "./images/proj-6-linearcalc/img-4.png";
            document.getElementById("proj-6-tip").innerHTML = "Truth Table Calculator"
            document.getElementById("proj-6-right").classList.remove("active");
        }
    }
}

function projSixPrevImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-6-image").src;
        if (currImgURL.includes("img-2")) {
            document.getElementById("proj-6-image").src = "./images/proj-6-linearcalc/img-1.png";
            document.getElementById("proj-6-tip").innerHTML = "Matrix Calculator"
            document.getElementById("proj-6-left").classList.remove("active");
        }
        else if (currImgURL.includes("img-3")) {
            document.getElementById("proj-6-image").src = "./images/proj-6-linearcalc/img-2.png";
            document.getElementById("proj-6-tip").innerHTML = "Permutation/Combination Calculator"
        }
        else if (currImgURL.includes("img-4")) {
            document.getElementById("proj-6-image").src = "./images/proj-6-linearcalc/img-3.png";
            document.getElementById("proj-6-tip").innerHTML = "Truth Table Calculator"
            document.getElementById("proj-6-right").classList.add("active");
        }
    }
}

function projSevenNextImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-7-image").src;
        if (currImgURL.includes("img-1")) {
            document.getElementById("proj-7-image").src = "./images/proj-7-invoice/img-2.png";
            document.getElementById("proj-7-tip").innerHTML = "Invoice Total for the previous week"
            document.getElementById("proj-7-left").classList.add("active");
            document.getElementById("proj-7-right").classList.remove("active");
        }
    }
}

function projSevenPrevImage(element) {
    if (element.classList.contains("active")) {
        let currImgURL = document.getElementById("proj-7-image").src;
        if (currImgURL.includes("img-2")) {
            document.getElementById("proj-7-image").src = "./images/proj-7-invoice/img-1.png";
            document.getElementById("proj-7-tip").innerHTML = "Invoice Home"
            document.getElementById("proj-7-left").classList.remove("active");
            document.getElementById("proj-7-right").classList.add("active");
        }
    }
}