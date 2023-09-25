// navigation functionality
const toggleNav = () => {
    document.getElementById("exercises").classList.toggle("ex-hide");
}

//showing exercise1 and exercise2
const showExercise1 =() => {
    document.getElementById("ex-1").classList.toggle("hidden");
    if(!document.getElementById("ex-2").classList.contains("hidden")){
        document.getElementById("ex-2").classList.toggle("hidden");
    }
}

const showExercise2 =() => {
    document.getElementById("ex-2").classList.toggle("hidden");
    if(!document.getElementById("ex-1").classList.contains("hidden")){
        document.getElementById("ex-1").classList.toggle("hidden");
    }
}

//comparing
const comparingAges =() => {
    const compareAge = document.getElementById("compare-ages");

    const name1 = document.getElementById("name-1").value;
    const age1 = parseInt(document.getElementById("age-1").value);
    const error1= document.getElementById("error-1");

    const name2 = document.getElementById("name-2").value;
    const age2 = parseInt(document.getElementById("age-2").value);
    const error2 = document.getElementById("error-2");
   
    const name3 = document.getElementById("name-3").value;
    const age3 = parseInt(document.getElementById("age-3").value);
    const error3 = document.getElementById("error-3");

    var highest, median, lowest, eldest, middle, youngest;

    compareAge.classList.add("hidden");
    error1.classList.add("hidden");
    error2.classList.add("hidden");
    error3.classList.add("hidden");

    //If the input is not a number, then it will be a error
    if(isNaN(age1)){
        error1.classList.remove("hidden");
        error1.innerHTML="Please enter a number for the age.";
    }

    else if(isNaN(age2)){
        error2.classList.remove("hidden");
        error2.innerHTML="Please enter a number for the age.";
    }

    else if(isNaN(age3)){
        error3.classList.remove("hidden");
        error3.innerHTML="Please enter a number for the age.";
    }

    else{
        if(age1 >= age2 && age1>= age3) {
            highest = age1;
            eldest= name1;
            if(age2 >= age3)
            {
                median = age2;
                lowest = age3;
                middle = name2;
                youngest = name3;
            }
            else{
                median = age3;
                lowest= age2;
                middle = name3;
                youngest = name2;
            }
        }
        
        else if(age2 >= age1 && age2 >= age3) {
            highest = age2;
            eldest = name2;

            if(age1 >= age3)
            {
                median = age1;
                lowest = age3;

                middle = name1;
                youngest = name3;
            }

            else{
                median = age3;
                lowest = age1;

                middle = name3;
                youngest =name1;
            }
        }

        else{
            highest = age3;
            eldest = name3;

            if(age1 >= age2)
            {
                median = age1;
                lowest = age2;
                middle = name1;
                youngest = name2;
            }

            else{
                median = age2;
                lowest = age1;
                middle= name2;
                youngest = name1;
            }
        }
        compare.classList.remove("hidden");
        compare.innerHTML = '<section> From oldest to youngest: ${eldest} at ${highest} years old, $(middle) at ${median} years old, and ${youngest} at ${lowest} years old</section>';
    }
}


//displaying the gradient
const displayingFDR = () => {
    const fdrTotal = parseInt(document.getElementById("fund-raising").amount);
    const fdrT = document.getElementById("gradient"); //T for Therometer
    const error= document.getElementById("fdr-error");
    const root = document.querySelector(":root");

    const fdrAmount =(fdrTotal/10000)*100;
    console.log(funraisingGoal);

    if(fdrTotal < 1) {
        error.innerHTML ="Please enter a number greater than 1.";
    }

    else if(fdrTotal > 10000) {
        error.innerHTML ="Please enter an number up to 10,000."
    }

    else if(isNaN(fdrTotal)) {
        error.innerHTML = "Please enter a number.";
    }

    else{
        if(fdrAmount < 25) {
            console.log("Under 25%");
        }
        else if((fdrAmount >= 25) && (fdrAmount <49)) {
            console.log("Between 25 and 50%");
            root.styles.setProperty("--gradient-empty", "75%");
        }
        else if((fdrAmount >= 50) && (fdrAmount <74)) {
            console.log("Between 50 and 75%");
            root.styles.setProperty("--gradient-empty", "50%");
        }
        else if((fdrAmount >=75) && (fdrAmount <99)) {
            console.log("Between 75 and 100%");
            root.style.setProperty("--gradient-empty", "25%");
        }
        else{
            console.log("At 100%");
            root.style.setProperty("--gradient-empty", "0%")
        }
    }
    fdrT.classList.add("filled-box");
}

//tying in functions
window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("link-1").onClick = showExercise1;
    document.getElementById("link-2").onClick = showExercise1;
    document.getElementById("compare-ages-button").onClick = comparingAges;
    document.getElementById("dispaly-button").onClick = displayingFDR;
}