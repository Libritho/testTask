window.onload = addListeners;

function addListeners () {
    let description = document.getElementsByClassName("description");
    let category = document.getElementsByClassName("relative");
    let arrows = document.getElementsByClassName("arrow");

    for (let i = 0; i<description.length; i++) {
        category[i].onclick = function () {
            description[i].className += " active";
            description[i].style.display = "flex";
            arrows[i].className = "arrow active"

            for (let z = 0; z<description.length; z++)
                if (z !== i) {
                    {
                        description[z].style.display = "none";
                        arrows[z].className = "arrow";
                    }
                }
        }
    }
}