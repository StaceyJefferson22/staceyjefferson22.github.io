const showBush = () => {
    document.getElementById("bush").classList.remove("hide");
}

const hideBush = () => {
    document.getElementById("bush").classList.add("hide");
}

window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-show").onclick = showBush;
    document.getElementById("button-hide").onclick = hideBush;
}