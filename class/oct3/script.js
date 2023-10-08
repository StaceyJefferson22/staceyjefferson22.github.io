const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const showToys = () => {
    const resultDiv = document.getElementById("Result");
    const ulElem = document.createElement("ul");
    resultDiv.append(ulElem);

    const toys = ["drum", "ball", "skipping roper" , "doll", "bike"];

     
    for(let i in toys){
        const liElem = document.createElement("li");
        liElem.textContent = toys[i];
        ulElem.append(liElem);
    }
}

const addToy = () =>{
    const 
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-array").onclick = showToys;
    document.getElementById("button-add-toy").onclick = addToy
}