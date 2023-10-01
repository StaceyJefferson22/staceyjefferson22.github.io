const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const loopItUp = () => {
    let firstNumber = pareInt(docuent.getElementById("first-num").value);

    let resultUL = document.getElementById("result");
    resultUL.innerHTML = "";

    for(let i = firstNumber; i <10; i++){
        const liElem = document.createElement("li");
        liElem.textContent = i;
        resultUL.append(liElem);
    }
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-loops").onclick = loopItUp;
}