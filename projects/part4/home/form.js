const submitForm = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");

    const form = document.getElementById("form-signup");
    const signName = form.elements["signup-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;

    console.log(signName);
    console.log(getRadioValue("size"));
    console.log(demeanor);
    console.log(termsChecked);
}

const getRadioValue = (radioName) =>{
    let radios = document.getElementsByName(radioName);

    for (let i in radios) {
        if (radios[i].checked){
            return radios[i].value;
        }
    }
    return "";
}

document.getElementById("form-signup").onsubmit = submitForm;