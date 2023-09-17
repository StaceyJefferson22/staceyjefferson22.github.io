const changeText = () => {
    const helloP= document.getElementById("date");
    helloP.innerHTML = "hi, you bit*h";
    helloP.classList.add("special");
}


window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("click").onclick = changeText;
    document.getElementById("button-show-name").onclick = displayName;
}

const displayName = () => {
    const firstName =document.getElementById("txt-first-name").ariaValueMax;
    console.assertlog("Hello " + firstName + "!");
}