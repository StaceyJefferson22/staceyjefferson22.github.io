const getProducts = async () => {
    const url = "https://staceyjefferson22.github.io/json/products.json";

    try{
        const response = await fetch(url);
        return await response.json();
    } catch (error){
        console.log(error);
    }
};

const showProducts = async () =>{
    let products = await getProducts();
    let productsSection = document.getElementById("product-section");

    products.forEach((product) => {
        productsSection.append(getProductItem(product));
    });
};


const getProductItem = (product) => {
    const section = document.createElement("section");
    const span = document.createElement("span");
    const URL = "https://staceyjefferson22.github.io/json/";

    const img = document.createElement("img");
    img.src = URL + product.img;
    section.append(img);

    const h2 = document.createElement("h2");//had img instead of h3
    h2.innerText = product.name;
    span.append(h2);
    section.append(span);

    const p = document.createElement("p");
    span.append(p);
    p.innerHTML = "<strong>Price: </strong>"
    p.innerHTML += product.price;
    p.innerHTML += "<br><strong>Type: </strong>"
    p.innerHTML += product.price;
    p.innerHTML += "<br><strong>Description: </strong>"
    p.innerHTML += product.price;
    section.append(span);

    section.classList.add("flexbox");
    return section;
};

window.onload = () => showProducts();