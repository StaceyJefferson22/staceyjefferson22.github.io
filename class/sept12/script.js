const changeText = () => {
    const helloP= document.getElementById("date");
    helloP.innerHTML = "hi, you bit*h";
    helloP.classList.add("special");
}


window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("click").onclick = changeText;
}