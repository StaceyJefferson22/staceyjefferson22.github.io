const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const signup = () => {
    const addComment = document.getElementById("submit");

    const commentP = document.createElement("p");
    const commentHead = document.createElement("h3");

    commentHead.appendChild(document.createTextNode(document.getElementById("name").value));

    addComment.appendChild(commentHead);
    addComment.appendChild(commentP);
    
    commentP.appendChild(document.createTextNode(document.getElementById("email").value));
    commentP.appendChild(document.createTextNode(document.getElementById("pn").value));
    commentP.appendChild(document.createElement("br"));
    commentP.appendChild(document.createTextNode(document.getElementById("comment").value));
}

//dropdown menu (inspired by w3 schools tutorial on how to make dropdown menu in html, css, and js)
function myFunction(){
    document.getElementById("myDD").classList.toggle("display");
}

function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDD");
    a = di.getElementByTagName("a");
    for(i = 0; i < a.length; i++){
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) >-1){
            a[i].style.display = "";
        }else{
            a[i].style.display ="none";
        }
    }
}

window.onload = () =>{
    document.getElementById("nav-toggle").onclick = toggleNav;
    //document.getElementById("submit-button").onclick = signup;
}