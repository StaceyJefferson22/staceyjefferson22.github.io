const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const validateForm = () =>{
    const firstName = document.getElementById("txt-first-name").value;
    const resultP = document.getElementById("Result");

    if(isBlank(firstName, "error-first-name")) {
        return false;
    }

    resultP.innerHTML ="Hello " + firstName;
}

const isBlank =(data, id) => {
    if(data.trim() ==""){
        document.getElementById(id).classList.remove("hidden");
        return true;
    }
    return false;
}
window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-validate").onclick = validateForm;
}