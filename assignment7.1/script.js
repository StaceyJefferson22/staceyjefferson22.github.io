const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}
//hidden ex1
const hideEX1 = () => {
    document.getElementById("ex1").classList.toggle("hidden"); 
   document.getElementById("ex2").classList.toggle("hidden"); 
}

//thiden ex2
const hideEX2 = () => {
    document.getElementById("ex1").classList.toggle("hidden");
    document.getElementById("ex2").classList.toggle("hidden");
}

//comparing ages
const compareAge = () => {
    const name1 = document.getElementById("name1").value;
    const age1 = document.getElementById("age1").value;
    const name2 = document.getElementById("name2").value;
    const age2 = document.getElementById("age2").value;
    const name3 = document.getElementById("name3").value;
    const age3 = document.getElementById("age3").value;
    const compare= document.getElementById("compare-ages");

    if(age1 <= 0 | age2 <=0 | age3 <=0)
    {
        compare.innerHTML = "<strong>*Invalid age</strong>"; //should bold and make comment red
    }
    else if(age1 >122 | age2 >122| age3 >122){
        //The oldest person to ever exist was Jeanne Louise Calment who died at age 122
        compare.innerHTML = "<strong>*Invalid age. You are not older than Jeanne.</strong>";
    }
    else{
        if(age1 >= age2 && age2 >= age3)
        {
            if(age2 >= age3)
            {
                compare.innerHTML = name1 + "," + name2 + "," +name3;
            }
            else
            {
                compare.innerHTML = name1 + "," + name3 + "," +name2;
            }
        }
        else if(age2 >=age1 && age2 >=age3)
        {
            if (age1 >= age3)
            {
                compare.innerHTML = name2 + "," + name1+ "," +name3;
            }
            else
            {
                compare.innerHTML = name2 + "," + name3 + "," +name1;
            }
        }
        else
        {
            if (age1 >= age2)
            {
                compare.innerHTML = name3+ "," + name1+ "," +name2;
            }
            else
            {
                compare.innerHTML = name3 + "," + name2+ "," +name1;
            } 
        }
    }
}

const displayFDR = () => {
    const input = document.getElementById("total-fdr").value;
    const root = document.querySelector(":root");

    if(input <=0 || input >10000)
    {
        root.style.setProperty("--thermometer","0%");
    }
    else if(input >0 && input <=2500)
    {
        root.style.setProperty("--thermometer","25%");
    }
    else if(input >2500 && input <= 5000)
    {
        root.style.setProperty("--thermometer","50%");
    }
    else if(input >5000 && input <=7500)
    {
        root.style.setProperty("--thermometer","75%");
    }
    else if(input >7500 && input <= 10000)
    {
        root.style.setProperty("--thermometer","100%");
    }
    else
    {
        root.style.setProperty("--thermometer", "0");
    }
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("compare-ages-button").onclick = compareAge;
    document.getElementById("ex-1-link").onclick = hideEX1;
    document.getElementById("ex-2-link").onclick = hideEX2;
    document.getElementById("ex2").classList.add("hidden");
    document.getElementById("display-fdr").onclick = displayFDR;
}

