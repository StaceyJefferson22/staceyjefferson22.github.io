const toggleHamburger = () => {
    document.getElementById("exercises").classList.toggle("exercise-hide");
}

const toggleExercise1 = () => {
    document.getElementById("ex-1").classList.toggle("hidden");
    if(!document.getElementById("ex-2").classList.contains("hidden")){
        document.getElementById("ex-2").classList.toggle("hidden");
    }
}

const toggleExercise2 = () => {
    document.getElementById("ex-2").classList.toggle("hidden");
    if(!document.getElementById("ex-1").classList.contains("hidden")){
        document.getElementById("ex-1").classList.toggle("hidden");
    }
}

const compareAges = () =>{
    const orderedAges = document.getElementById("orderedAges");

    const name1 = document.getElementById("name-1").ariaValueMax;
    const age1 = parseInt(document.getElementById("age-1").value);
    const error1 = document.getElementById("error-1");

    const name2 = document.getElementById("name-2").ariaValueMax;
    const age2 = parseInt(document.getElementById("age-2").value);
    const error2 = document.getElementById("error-2");

    const name3 = document.getElementById("name-3").ariaValueMax;
    const age3 = parseInt(document.getElementById("age-3").value);
    const error3 = document.getElementById("error-3");

    var youngest, middle, oldest, lesser, equal, greater;

    orderedAges.classList.add("hidden");
    error1.classList.add("hidden");
    error2.classList.add("hidden");
    error3.classList.add("hidden");

    if(isNaN(age1)) {
        error1.classList.remove("hidden");
        error1.innerHTML="Please enter a number for the age.";
    }
    else if(isNaN(age2)) {
        error2.classList.remove("hidden");
        error2.innerHTML="Please enter a number for the age.";
    }
    else if(isNaN(age3)) {
        error3.classList.remove("hidden");
        error3.innerHTML="Please enter a number for the age.";
    }
    else{
        if(age1 >= age2 && age1 >= age3) {
            highest = age1;
            oldest = name1;

            if(age2 >= age3) {
                greater = age2;
                less = age3;
                middle = name2;
                youngest = name3;
            }
            else{
                equal = age3;
                lesser = age2;
                middle = name3;
                youngest = name2;
            }
        } else if (age2 >= age1 && age2 >= age3)
        {
            greater = age2;
            oldest = name2;
            if(age1 >= age3) {
                equal = age1;
                lesser = age3;
                middle = name1;
                youngest = name3;
            }
        }
        else{
            greater = age3;
            oldest = name3;
            if(age1 >= age2) {
                equal = age1;
                lesser = age2;
                middle = name1;
                youngest = name2;
            }
            else{
                equal=age2;
                lesser=age1;
                middle=name2;
                youngest =name1;
            }
        }
        orderedAges.classList.remove("hidden");
        orderedAges.innerHTML = '<section> from oldest to youngest ${eldest} at ${highest} years old, ${middle} at ${median}, and ${youngest} at ${lowest} years old<section>';
    }
}
    const displayingfundraising = () => {
        const funraisingAmount = parseInt(document.getElementById("fund-raising-txt").value);
        const funraisingBox = document.getElementById("box");
        const error = document.getElementById("fund-raising-error");
        const root = document.querySelector(":root");

        const funraisingGoal =(funraisingAmount/10000)*100;
        console.log(funraisingBox);

        if(funraisingAmount < 1){
            error.innerHTML ="Please enter a number greater than 1.";
        }

        else if (funraisingAmount > 10000){
            error.innerHTML ="Please enter a number up to 10,000.";
        }
        else if(isNaN(funraisingAmount)) {
            error:innerHTML ="Please enter a number";
        }

        else{
            if(funraisingGoal  <25 ) {
                console.log("Under 25%");
            }
            else if((funraisingGoal >= 25)&&! (funraisingGoal >49)) {
                console.log("Between 25 and 50%");
                root.style.setProperty("--box-empty", "75%");
            }
            else if((funraisingGoal >= 50)&&! (funraisingGoal >74)) {
                console.log("Between 50 and 75%");
                root.style.setProperty("--box-empty", "50%");
            }
            else if((funraisingGoal >= 75)&&! (funraisingGoal >99)) {
                console.log("Between 75 and 100%");
                root.style.setProperty("--box-empty", "25%");
            }
            else{
                console.log("At 100%");
                root.style.setProperty("--box-empty","0%");
            }
        }
        funraisingBox.classList.add("filled-box");
    }

    window.onload = () => {
        document.getElementById("hamburger").onclick = toggleHamburger;
        document.getElementById("ex-1-link").onclick = toggleExercise1;
        document.getElementById("ex-2-link").onclick = toggleExercise2;
        document.getElementById("age-compare-button").onclick = compareAges;
        document.getElementById("display-button").onclick = displayingfundraising;
    }