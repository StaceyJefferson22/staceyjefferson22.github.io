const displayEmail = async (e) => {
    e.preventDefault();
    const aftermath = document.getElementById("aftermath");
    let feedback = await retrieveEmail();
    if(feedback.status == 200) {
        aftermath.innerHTML = "Email was successfully sent. We will respond to you in one to two business days.";
    } else {
        aftermath.innerHTML = "Sorry, your email was not received. Try Again!";
    }
};

const retrieveEmail = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("aftermath");
    result.innerHTML = "Please wait...";

    try {
        const feedback = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        return feedback;
    } catch (error) {
        console.log(error);
        document.getElementById("aftermath").innerHTML =
            "Error Detected! Email was not sent. Please try again!";
    }
};

document.getElementById("contact-form").onsubmit = displayEmail;