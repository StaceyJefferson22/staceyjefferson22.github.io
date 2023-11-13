const getRecipes = async () => {
    try{
        return (await fetch("api/recipes/")).json();
    }catch(error){
        console.log(error);
    }
};

const showRecipes = async () => {
    let recipes = await getRecipes();
    let recipesDiv = document.getElementById("recipe-list");
    recipes.forEach((recipe)=>{
        const section = document.createElement("section");
        recipesDiv.append(section);

        const a = document.createElement("a");
        a.href ="#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = recipe.name;
        a.append(h3);

        a.onclick = () => {
            const recipeDetails = document.getElementById("recipe-details");
            recipeDetails.innerHTML = "";
            const p = document.createElement("p");
            recipeDetails.append(p);
            p.innerHTML = recipe.description;
        };
    });
};


window.onload = () => showRecipes();