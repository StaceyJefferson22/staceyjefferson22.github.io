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

const getAthletes = async() => {
    try{
        return(await fetch("api/athletes/")).json();
    } catch (error) {
        console.log(error);
    }
};

const showAthletes = async() => {
    let athletes = await getAthletes();
    let athletesDiv = document.getElementById("athlete-list");
    athletesDiv.innerHTML = "";
    athletes.forEach((athlete) => {
        const section = document.createElement("section");
        section.classList.add("athlete");
        athletesDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = athlete.name;
        a.append(h3);

        const img = document.createElement("img");
        img.src = athlete.img;
        section.append(img);

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(athlete);
        };
    });
};

const displayDetails = (athlete) => {
    const athleteDetails = document.getElementById("athlete-details");
    athleteDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.innerHTML = athlete.name;
    athleteDetails.append(h3);

    const dLink = document.createElement("a");
    dLink.innerHTML = " &#x2715;";
    athleteDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    athleteDetails.append(eLink);
    eLink.id = "edit-link";

    const p = document.createElement("p");
    athleteDetails.append(p);
    p.innerHTML = "Sport: " + athlete.sport;
    p.innerHTML += "<br>Description: " + athlete.description;

    const ul = document.createElement("ul");
    athleteDetails.append(ul);
    console.log(athlete.awards);
    athlete.awards.forEach((award) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = award;
    });


    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("add-edit-title").innerHTML = "Edit Athlete";
    };

    dLink.onclick = (e) => {
        e.preventDefault();
        deleteAthlete(athlete);
    };

    populateEditForm(athlete);
};

const deleteAthlete = async(athlete) => {
    let response = await fetch(`/api/athletes/${athlete._id} `, {
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
    showAthletes();
    document.getElementById("athlete-details").innerHTML = "";
    resetForm();
}

const populateEditForm = (athlete) => {
    const form = document.getElementById("add-edit-athlete-form");
    form._id.value = athlete._id;
    form.sport.value = athlete.sport;
    form.name.value = athlete.name;
    form.description.value = athlete.description;
    populateAward(athlete)
};

const populateAward = (athlete) => {
    const section = document.getElementById("award-boxes");

    athlete.awards.forEach((award) => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = award;
        section.append(input);
    })
}

const addEditAthlete = async(e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-athlete-form");
    const formData = new FormData(form);
    let response;
    formData.append("awards", getAwards());

    if (form._id.value == -1) {
        formData.delete("_id");
        console.log("Showing in add");
        console.log(...formData);

        response = await fetch("/api/athletes", {
            method: "POST",
            body: formData,
        });
    }

    else {

        console.log(...formData);

        response = await fetch(`/api/athletes/${form._id.value}`, {
            method: "PUT",
            body: formData,
        });
    }

    //if the server data is received sucessfully
    if (response.status != 200) {
        console.log("Error posting data");
    }

    //response 
    athlete = await response.json();

    if(form._id.value != -1) {
        displayDetails(athlete);
    }

    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showAthletes();
};

const getAwards = () => {
    const inputs = document.querySelectorAll("#award-boxes input");
    let awards = [];
    console.log("getAwards()");

    inputs.forEach((input) => {
        console.log("INPUT" + input.value);
        awards.push(input.value);
    });

    return awards;
}

const resetForm = () => {
    const form = document.getElementById("add-edit-athlete-form");
    form.reset();
    form._id = "-1";
    document.getElementById("award-boxes").innerHTML = "";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add Athlete";
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
    showAthletes();
    document.getElementById("add-edit-athlete-form").onsubmit = addEditAthlete;
    document.getElementById("add-link").onclick = showHideAdd;

    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };

    document.getElementById("add-award").onclick = addAward;
}