
//running man
 /*const runningMan = () => {
    const root = document.querySelector(":root");
    document.getElementById("man") .src="runningman.png";

    let count = 0;
    const interval =setInterval = () => { 
        root.style.setProperty("--man-left-margin", count +"vi");
        count++;

        if(count == 30) {
            clearInterval(interval);
            document.getElementById("man").src="runningman.png";
        }
    }
    
} */



//displayFDR
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

//tying in function with the button
window.onload = () => {
    document.getElementById("man").onclick =runningMan;
    document.getElementById("display-fdr").onclick = displayFDR;
}