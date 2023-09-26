   //toggling naviagation pane
    const toggleNav = () => {
    document.getElementById("exercises").classList.toggle("exercise-hide");
    }

    //showing exercises 1
    const showExercise1 = () => {
     document.getElementById("ex-1").classList.toggle("hidden");
        if(!document.getElementById("ex-2").classList.contains("hidden")){
        document.getElementById("ex-2").classList.toggle("hidden");
        }
    }


    const showExercise2 = () => {
        document.getElementById("ex-2").classList.toggle("hidden");
        if(!document.getElementById("ex-1").classList.contains("hidden")){
            document.getElementById("ex-1").classList.toggle("hidden");
        }
    }

    //comparing ages
    const comparingAges = () =>{
        const compareAges = document.getElementById("compare-Ages");

        const name1 = document.getElementById("name-1").value; //had ariaValueMax here by mistake
        const age1 = parseInt(document.getElementById("age-1").value);
        const error1 = document.getElementById("error-1");

        const name2 = document.getElementById("name-2").value;
        const age2 = parseInt(document.getElementById("age-2").value);
        const error2 = document.getElementById("error-2");

        const name3 = document.getElementById("name-3").value;
        const age3 = parseInt(document.getElementById("age-3").value);
        const error3 = document.getElementById("error-3");


        compareAges.classList.add("hidden");
        error1.classList.add("hidden");
        error2.classList.add("hidden");
        error3.classList.add("hidden");

        var youngest, middle, oldest, lesser, equal, greater;

        //"isNaN()" means is not a number
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
        //when age1 is the highest numnber
            if(age1 >= age2 && age1 >= age3)
            {
                greater = age1;
                oldest = name1;

                if(age2 >= age3) {
                equal = age2;
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
            } 
            else if (age2 >= age1 && age2 >= age3)
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
        comparingAges.classList.remove("hidden");
        comparingAges.innerHTML = <p>"from oldest to youngest ${oldest} at ${greater} years old, ${middle} at ${equal}, and ${youngest} at ${lesser} years old"</p>;
        }
    }
    
    //displaying the fundraiser therometer
    const fdrdisplay = () => {
        const fdrPot = parseInt(document.getElementById("fdr").value);
        const fdrT = document.getElementById("gradient");
        const error = document.getElementById("fdr-error");
        const root = document.querySelector(":root");

        const fdrPercent =(funraisingAmount/10000)*100;
        console.log(fdrT);

        if(fdrPot < 1){
            error.innerHTML ="Please enter a number greater than 1.";
        }

        else if (fdrPot > 10000){
            error.innerHTML ="Please enter a number up to 10,000.";
        }
        else if(isNaN(fdrPot)) {
            error.innerHTML ="Please enter a number";
        }

        else{
            if(fdrPercent  <25 ) {
                console.log("Under 25%");
            }
            else if((fdrPercent >= 25)&& (fdrPercent <50)) {
                console.log("Between 25 and 50%");
                root.style.setProperty("--gradient-empty", "75%");
            }
            else if((fdrPercent >= 50)&& (fdrPercent <75)) {
                console.log("Between 50 and 75%");
                root.style.setProperty("--gradient-empty", "50%");
            }
            else if((fdrPercent >= 75)&& (fdrPercent <100)) {
                console.log("Between 75 and 100%");
                root.style.setProperty("--gradient-empty", "25%");
            }
            else{
                console.log("At 100%");
                root.style.setProperty("--gradient-empty","0%");
            }
        }
        fdrT.classList.add("filled-T");
    }

    //tying in functions
    window.onload = () => {
        document.getElementById("nav-toggle").onclick = toggleNav;
        document.getElementById("link-1").onclick = showExercise1; 
        document.getElementById("link-2").onclick = showExercise2;
        document.getElementById("compare-ages-button").onclick = comparingAges; 
        document.getElementById("display-button").onclick = fdrdisplay;
    }