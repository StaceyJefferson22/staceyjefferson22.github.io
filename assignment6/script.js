
const showBush = () => {
    document.getElementById("bush").classList.remove("hide");
}

const hideBush = () => {
    document.getElementById("bush").classList.add("hide");
}

const makeDance = () => {
    document.getElementById("heart").classList.add("dance");
}


const commentStuff = () => {
    const addComment = document.getElementById("comments");

    const commentP = document.createElement("p");
    const commentHead = document.createElement("h3");

    commentHead.appendChild(document.createTextNode(document.getElementById("product").value));

    commentP.appendChild(document.createTextNode(document.getElementById("rating").value +"/5 stars "));
    commentP.appendChild(document.createTextNode(document.getElementById("comment").value));
    commentP.appendChild(document.createElement("br")); //comments did nit work until I typed this in
    commentP.appendChild(document.createTextNode("by " + document.getElementById("username").value));
   
    addComment.appendChild(commentHead);
    addComment.appendChild(commentP);


    document.getElementById("product").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("username").value = "";
}

window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-show").onclick = showBush;
    document.getElementById("button-hide").onclick = hideBush;
    document.getElementById("button-dance").onclick = makeDance;
    document.getElementById("button-comment").onclick = commentStuff;

}