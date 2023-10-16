class Toy {
    constructor(name, price, ageRange, rating, pic){
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.pic= pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("Toy");

        const image = this.picture(this.pic);

        const tooltip = this.createTooltip();

        section.appendChild(image);
        section.appendChild(tooltip);

        image.addEventListener("mouseover" , () => {
            tooltip.style.display ="block";
            image.style.opacity = .3
        })

        image.addEventListner("mouseout", (event) =>{
            if(!section.contains(event.relatedTarget)) {
                tooltip.style.display = "none";
                image.style.opacity = 1;
            }
        })

        return section;
    }

    picture(info){
        const pic =document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    createTooltip(){
        const tooltip = document.createElement("span");
        tooltip.style.display = "none"; 

 

        return tooltip;
    }
}

const showToys = () =>{
    const toyList = 
}

