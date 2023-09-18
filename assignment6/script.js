//show and hide pictures
const showBush = () => {
    document.getElementById("bush").classList.remove("hide");
}

const hideBush = () => {
    document.getElementById("bush").classList.add("hide");
}

//dance section
const justDance = () => {
    document.getElementById("heart").classList.add("dance");
}

//show comments made by user
const commentStuff = () => {
    const addComment = document.getElementById("comments");

    const commentP = document.createElement("p");
    const commentHead = document.createElement("h3");

    commentHead.appendChild(document.createTextNode(document.getElementById("product").value));

    commentP.appendChild(document.createTextNode(document.getElementById("rating").value +"/5 stars "));
    commentP.appendChild(document.createTextNode(document.getElementById("comment").value));
    commentP.appendChild(document.createElement("br")); 
    commentP.appendChild(document.createTextNode("by " + document.getElementById("username").value));
   
    addComment.appendChild(commentHead);
    addComment.appendChild(commentP);

    document.getElementById("product").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("username").value = "";
}

//everythin works!
window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-show").onclick = showBush;
    document.getElementById("button-hide").onclick = hideBush;
    document.getElementById("button-dance").onclick = justDance;
    document.getElementById("button-comment").onclick = commentStuff;

}