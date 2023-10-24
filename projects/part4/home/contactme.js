const emailReceive = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let reply = await getEmailAnswer();
    if (reply.status == 200) {
        result.innerHTML = "Email Successfully Submitted";
    }
    else{
        result.innerHTML ="Sorry, but your email was not sent. Try Again!";
    }
}

const getEmailAnswer = async (e) => {
    const form = document.getElementById("form-signup");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait..."

    try{
        const reply = await fetch ("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
        return reply;
    }
    catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML =
            "Sorry. Your Email was not processed";
    }
}

document.getElementById("form-singup").onsubmit = showEmailAnswer;

