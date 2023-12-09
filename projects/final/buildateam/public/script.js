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

const getMembers = async() => {
    try{
        return(await fetch("api/members/")).json();
    } catch (error) {
        console.log(error);
    }
};

const showMembers = async() => {
    let members = await getMembers();
    let membersDiv = document.getElementById("member-list");
    membersDiv.innerHTML = "";
    members.forEach((member) => {
        const section = document.createElement("section");
        section.classList.add("member");
        membersDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = member.name;
        a.append(h3);

        const img = document.createElement("img");
        img.src = member.img;
        section.append(img);

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(member);
        };
    });
};

const displayDetails = (member) => {
    const memberDetails = document.getElementById("member-details");
    memberDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.innerHTML = member.name;
    memberDetails.append(h3);

    const dLink = document.createElement("a");
    dLink.innerHTML = " &#x2715;";
    memberDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    memberDetails.append(eLink);
    eLink.id = "edit-link";

    const p = document.createElement("p");
    memberDetails.append(p);
    p.innerHTML = "Phone Number: " + member.phone;
    p.innerHTML += "<br>Description: " + member.description;

    const ul = document.createElement("ul");
    memberDetails.append(ul);
    console.log(member.awards);
    member.awards.forEach((award) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = award;
    });


    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("add-edit-title").innerHTML = "Edit Member";
    };

    dLink.onclick = (e) => {
        e.preventDefault();
        deleteMember(member);
    };

    populateEditForm(member);
};

const deleteMember = async(member) => {
    let response = await fetch(`/api/members/${member._id} `, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

    if(response.status != 200) {
        console.log("error deleting");
        return;
    }

    let result = await response.json();
    showMembers();
    document.getElementById("member-details").innerHTML = "";
    resetForm();
}

const populateEditForm = (member) => {
    const form = document.getElementById("add-edit-member-form");
    form._id.value = member._id;
    form.phone.value = member.phone._id;
    form.name.value = member.name;
    form.description.value = member.description;
    populateAward(member);
};

const populateAward = (member) => {
    const section = document.getElementById("award-boxes");

    member.awards.forEach((award) => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = award;
        section.append(input);
    });
};

const addEditMember = async(e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-member-form");
    const formData = new FormData(form);
    let response;
    formData.append("awards", getAwards());

    if (form._id.value == -1) {
        formData.delete("_id");
        //console.log("Showing in add");
        //console.log(...formData);

        response = await fetch("/api/members", {
            method: "POST",
            body: formData,
        });
    }

    else {

        console.log(...formData);

        response = await fetch(`/api/members/${form._id.value}`, {
            method: "PUT",
            body: formData
        });
    }

    //if the server data is received sucessfully
    if (response.status != 200) {
        console.log("Error posting data");
    }

    //response 
    member = await response.json();

    if(form._id.value != -1) {
        displayDetails(member);
    }

    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showMembers();
};

const getAwards = () => {
    const inputs = document.querySelectorAll("#award-boxes input");
    let awards = [];
    //console.log("getAwards()");

    inputs.forEach((input) => {
        console.log("INPUT" + input.value);
        awards.push(input.value);
    });

    return awards;
}

const resetForm = () => {
    const form = document.getElementById("add-edit-member-form");
    form.reset();
    form._id = "-1";
    document.getElementById("award-boxes").innerHTML = "";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add Member";
    resetForm();
};

const addAward = (e) => {
    e.preventDefault();
    const section = document.getElementById("award-boxes");
    const input = document.createElement("input");
    input.type = "text";
    section.append(input);
}

window.onload = () =>{
    document.getElementById("nav-toggle").onclick = toggleNav;
    //document.getElementById("submit-button").onclick = signup;
    showMembers();
    document.getElementById("add-edit-member-form").onsubmit = addEditMember;
    document.getElementById("add-link").onclick = showHideAdd;

    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };

    document.getElementById("add-award").onclick = addAward;
}