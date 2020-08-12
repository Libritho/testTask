window.onload = addListeners;

function addListeners () {
    let description = document.getElementsByClassName("description");
    let slides = document.getElementsByClassName("slides");
    let arrows = document.getElementsByClassName("arrow");

    for (let i = 0; i<description.length; i++) {
        slides[i].onclick = function () {
            slides[i].className += " active";
            description[i].style.display = "flex";
            arrows[i].className = "arrow active"


            for (let z = 0; z<description.length; z++)
                if (z !== i) {
                    {

                        slides[z].className = "slides";
                        description[z].style.display = "none";
                        arrows[z].className = "arrow";

                    }
                }
        }
    }
}