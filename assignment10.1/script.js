class Toy{
    constructor(name, price, ageRange, rating, pic){
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.pic = pic;
    }

    get item() {
        const div = document.createElement("div");
        div.classList.add("Toy");

        const image = this.picture(this.pic);

        const hover = this.createhover();

        div.appendChild(image);
        div.appendChild(hover);

        image.addEventListener("mouseover", () => {
            hover.style.display = "block";
            image.style.opacity =.3;
        })

        image.addEventListener("mouseout", (event) => {
            hover.style.display = "none";
            image.style.opacity = 1;
        })

        return div;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    createHover(){
        const hover = document.createElement("span");
        hover.classList.add("hover");
        hover.style.display = "none"

        hover.innerHTML = '
            <h1>${this.name}</h1>
            <p><b>Price:</b> $${this.price}</p>
            <p><b>Age Range:</b> ${this.ageRange}</p>
            <p><b>Rating:</b> ${this.rating}</p>

        ;
          
        return hover;
    }
}

const showToys = () => {
    const toyList = document.getElementById("toys-box");
    const toys = [];
    toys.push(new Toy("Thomas the Train", 11.00,"3-11", 5,"Thomas.jpg"));
    toys.push(new Toy("Tickle Me Elmo", 59.00,"3-7",3,"elmo.jpg"));
    toys.push(new Toy("Mini Basketball", 14.99,"3-8", 3, "basketball.jpg"));
    toys.push(new Toy("Fidget Spinner", 4.99,"3-18", 4,"fidgetSpinner.jpg"));
    toys.push(new Toy("Play Doh", 1.00,"3-11",5,"playDoh.jpg"));
    toys.push(new Toy("Marbles", 6.99,"5-18",2,"marbles.jpeg"));

    toys.forEach((toy) => {
        list.append(toy.item);
    })
}

window.onload = () =>{
    showToys();
}