const singUp = () => {
    const addComment = document.getElementById("comments");

    const commentP = document.createElement("p");
    const commentHead = document.createElement("h3");

    commentHead.appendChild(document.createTextNode(document.getElementById("name").value));

    commentP.appendChild(document.createTextNode(document.getElementById("pn").value));
    commentP.appendChild(document.createTextNode(document.getElementById("comment").value));
    commentP.appendChild(document.createElement("br"));
    commentP.appendChild(document.createTextNode(document.getElementById("email").value));
    
    addComment.appendChild(commentHead);
    addComment.appendChild(commentP);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pn").value = "";
    document.getElementById("comment").value = "";
}

window.onload = () => {
    document.getElementById("submit-button").onclick = singUp;
}