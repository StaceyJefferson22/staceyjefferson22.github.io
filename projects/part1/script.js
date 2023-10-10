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

window.onload = () =>{
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("submit-button").onclick = signup;
}