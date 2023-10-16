//setting up constructors in toy class like Java
class Toy {
    constructor(name, price, ageRange, rating, pic){
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.pic= pic;
    }

//get items parameters
    get item(){
        const section = document.createElement("section");
        section.classList.add("toy");
        const h3 = document.createElement("h3");
        h3.classList.add("hide");
        h3.innerHTML = this.name;

        const ul = document.createElement("ul");
        ul.classList.add("hide");
        ul.append(this.itemList("Age Range: " +this.ageRange));
        ul.append(this.itemList("Price: " +this.price));
        ul.append(this.itemList("Rating: " +this.rating+ " stars"));
        section.append(h3);
        section.append(ul);

        const pic = document.createElement("img");
        section.append(pic);
        pic.src = "images/" + this.pic;

        //when hovering over the item
        section.onmouseover = () => {
            h3.classList.remove("hide");
            h3.classList.remove("hide");
            pic.classList.add("hover");
        }

        section.onmouseout = () =>{
            h3.classList.add("hide");
            h3.classList.add("hide");
            pic.classList.remove("hover");
        }
        return section;
    }
    itemList(details){
        const li = document.createElement("li");
        li.textContent = details;
        return li;
    }
}

//show the toys
const displayToys = () =>{
    const toyBox = document.getElementById("toy-Box");
    const toys = [];
    toys.push(new Toy("Thomas the Train", 11.00,"3-11", 5,"Thomas.jpg"));
    toys.push(new Toy("Tickle Me Elmo", 59.00,"3-7",3,"elmo.jpg"));
    toys.push(new Toy("Mini Basketball", 14.99,"3-8", 3, "basketball.jpg"));
    toys.push(new Toy("Fidget Spinner", 4.99,"3-18", 4,"fidgetSpinner.jpg"));
    toys.push(new Toy("Play Doh", 1.00,"3-11",5,"playDoh.jpg"));
    toys.push(new Toy("Marbles", 6.99,"5-18",2,"marbles.jpeg"));

    toys.forEach((toy) => {
        toyBox.append(toy.item);
    })
}

//tying in functions with displayToys()
window.onload = () =>{
    displayToys();
}

//testing: only shows h3 and not ul. 
