

/* ================
    layered security approach to prevent spam form submission by bots.
    first check determines time between page load and form submission and rejects the
    submission if the submission is too fast. 
=================== */

const pageLoadTime = Date.now();
const errorText = document.querySelector("#error-text");
const contactForm = document.querySelector("#contact-form")
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //get for submission time
    const formSubTime = Date.now();
    let difference = (formSubTime - pageLoadTime) / 1000;
    //get answer to math question
    const formData = new FormData(contactForm);
    const mathAnswer = formData.get("math-answer");
    //TO DO: get honeypot input value (should be empty)

    // run through checks to determine if it's a valid submission
    if (difference < 3) {
        errorText.innerHTML = "<p>An error occurred. Please try again.</p>";
    }
    else if (mathAnswer != 15) {
        errorText.innerHTML = "<p>Please answer the verification question correctly.</p>";
    } 
    //TO DO: Add honeypot check
    else {
        contactForm.submit()
    }

})


