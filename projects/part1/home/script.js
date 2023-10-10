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

const addItems = () => {
    const addComment = document.getElementById("submit");

    const commentP = document.createElement("p");
    const commentHead = document.createElement("h3");

    commentHead.appendChild(document.createTextNode(document.getElementById("name").value));

    addComment.appendChild(commentHead);
    addComment.appendChild(commentP);
    
    commentP.appendChild(document.createTextNode(document.getElementById("email").value));
    commentP.appendChild(document.createTextNode(document.getElementById("Location").value));
    commentP.appendChild(document.createTextNode(document.getElementById("pn").value));
    commentP.appendChild(document.createTextNode(document.getElementById("p1").value));
    commentP.appendChild(document.createTextNode(document.getElementById("p2").value));
    commentP.appendChild(document.createTextNode(document.getElementById("p3").value));
    commentP.appendChild(document.createTextNode(document.getElementById("p4").value));
    commentP.appendChild(document.createTextNode(document.getElementById("p5").value));
    commentP.appendChild(document.createElement("br"));
    commentP.appendChild(document.createTextNode(document.getElementById("comment").value));
}

window.onload = () =>{
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("submit-button").onclick = signup;
    document.getElementById("item-button").onclick = addItems;
}