//Quotes
const displayQ = () => {
    const qShown = document.querySelector("#quotes :not(.hide");
    qShown.classList.add("hide");
    let newQ = qShown.nextElementSibling;

    if(newQ == null){
        newQ = document.querySelector("#quotes :first-child");
    }
    newQ.classList.remove("hide");
}

//Rainbow
document.addEventListener("DOMContentLoaded", function(){
    const displayButton = document.getElementById("display-button");
    const showRainbow =document.getElementById("rainbow");
    const pot = document.getElementById("image");

    const color = ["red", "orange", "yellow", "green", "blue", "indigo"];

    function drawRainbow(){
        displayButton.disabled = true;
        pot.style.display = "none";
        showRainbow.innerHTML = '';

        color.forEach((color, index) => {
            setTimeout(() => {
                const fill = document.createElement("div");
                fill.style.backgroundColor = color;
                fill.classList.add("rainbow-fill");
                showRainbow.appendChild(fill);

                if(index == color.length - 1){
                    setTimeout(() => {
                        pot.style.display = "block";
                        displayButton.disabled = false;
                    },500);
                }
            }, index * 1000)
        })
    }
    displayButton.addEventListener("click", drawRainbow);
});

//shows quotes every 2 seconds
window.onload =() => {
    setInterval(displayQ, 2000);
}