const submitOrder = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");

    const form = document.getElementById("form-order");
    const ordName = form.elements["order-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;

    console.log(ordName);
    console.log(getRValue("size"));
    console.log(demeanor);
    console.log(termsChecked);
};

const getRValue = (rName) => {
    let radios = document.getElementsByName(rName);

    for (let i in radios) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return "";
};

document.getElementById("form-order").onsubmit = submitOrder;