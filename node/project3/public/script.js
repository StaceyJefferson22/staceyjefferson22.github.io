const showNintendos = async () => {
    let nintendoJSON = await getJSON();
    if(nintendoJSON == ""){
        return;
    }

    let nintendoDiv = document.getElementById("nintendo-list");

    nintendoJSON.forEach((nintendo) => {
        let section = document.createElement("section");
        nintendoDiv.append(section);

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = nintendo.name;

        let img = document.createElement("img");
        section.append(img);
        img.src = "http://localhost:4000/" + nintendo.img;
    });
};

const getJSON = async () => {
    try{
        let response = await fetch("http://localhost:4000/api/nintendos");
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