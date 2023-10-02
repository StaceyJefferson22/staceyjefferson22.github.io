

//running man
const runningMan = () => {
    document.getElementById("running-man").classList.add("animate");
}

//displaying fundraising therometer
const displayFDR = () => {
    const input = document.getElementById("total-fdr").value;
    const root = document.querySelector(":root");

    if(input <=0 || input >10000)
    {
        root.style.setProperty("--thermometer","0%");
    }
    else if(input >0 && input <=1000)
    {
        root.style.setProperty("--thermometer","10%");
    }
    else if(input >1000 && input <=2000)
    {
        root.style.setProperty("--thermometer","20%");
    }
    else if(input >2000 && input <=3000)
    {
        root.style.setProperty("--thermometer","30%");
    }
    else if(input >3000 && input <=4000)
    {
        root.style.setProperty("--thermometer","40%");
    }
    else if(input >4000 && input <=5000)
    {
        root.style.setProperty("--thermometer","50%");
    }
    else if(input >5000 && input <= 6000)
    {
        root.style.setProperty("--thermometer","60%");
    }
    else if(input >6000 && input <= 7000)
    {
        root.style.setProperty("--thermometer","70%");
    }
    else if(input >7000 && input <= 8000)
    {
        root.style.setProperty("--thermometer","80%");
    }
    else if(input >8000 && input <= 9000)
    {
        root.style.setProperty("--thermometer","90%");
    }
    else if(input >9000 && input <= 10000)
    {
        root.style.setProperty("--thermometer","100%");
    } 
    else
    {
        root.style.setProperty("--thermometer", "0");
    }
}

//tying functions into buttons
window.onload = () => {
    document.getElementById("running-man").onclick = runningMan;
    document.getElementById("display-fdr").onclick = displayFDR;
}