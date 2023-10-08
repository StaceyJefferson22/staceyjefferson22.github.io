const runMan = () =>{
    const root = document.querySelector(":root");
    document.getElementById("running-man").src="runningman2.png";

    let count = 0;
    const interval = setInterval =(() => {
        root.style.setProperty("--sliding-left", count + "vi");
        count++;

        if (count == 40){
            clearInterval(interval);
            document.getElementById("running-man").src="runningman.png";
        }
    },100)
}

const displayFDR = () => {
    const root = document.querySelector(":root");
    const input = parseFloat(document.getElementById("total-fdr").value);
    const box = document.getElementById("gradient");
    const error =document.getElementById("fdr-error");

    if (input >= 1 && input <= 10000){
        const rise = (input/10000)*100;

        let count =0;
        const interval = setInterval(() => {
            root.sytle.setProperty("--thereometer", count + "%");
            if(count >= rise){
                clearInterval(interval);
                box.classList.add("filled-box");
                error.innerHTML = "";
            }
            count++;
        },25);
    }

    else {
        error.innerHTML = "Input invalid. Please put in a number between 1 and 10,000";
    }
}

window.onload = () => {
    document.getElementById("running-man").onclick = runMan;
    document.getElementById("display-fdr").onclick = displayFDR;
}