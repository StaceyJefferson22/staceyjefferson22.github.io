const showNintendos = async () => {
    let nintendoJSON = await getJSON();
    if(nintendoJSON == ""){
        return;
    }

    let nintendoDiv = document.getElementById("nintendo-list");

    nintendoJSON.forEach((nintendo) => {
        let section = document.createElement("section");
        nintendoDiv.append(section);

        let name = document.createElement("h3");
        section.append(name);
        h3.innerHTML = "name: " + nintendo.name;

        let age = document.createElement("p");
        section.append(age);
        h3.innerHTML = "Age: " + nintendo.age;

        let occupation = document.createElement("p");
        section.append(occupation);
        h3.innerHTML = "Occupation: " + nintendo.age;

        let location = document.createElement("p");
        section.append(location);
        h3.innerHTML = "location: " + nintendo.age;

        let items = document.createElement("p");
        section.append(items);
        h3.innerHTML = "Age: " + nintendo.age;

        let img = document.createElement("img");
        section.append(img);
        img.src = "http://localhost:5000/" + nintendo.img;

    });
};

const getJSON = async () => {
    try{
        let response = await fetch("http://localhost:5000/api/nintendos");
        return await response.json();
    }
    catch(error){
        console.log("error retrieving json");
        return "";
    }
};

window.onload = () => {
    showNintendos();
}