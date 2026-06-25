/*////////////////////////////////////////
Contact page JS for Project Athena
Contains the form submission handler for the contact page, including a layered
spam prevention system to filter out automated bot submissions.
/////////////////////////////////////////*/

// ---- Element references ----

const pageLoadTime = Date.now();
const errorText = document.querySelector("#error-text");
const contactForm = document.querySelector("#contact-form");

/*/////////////////////////
Event Listeners
/////////////////////////*/

// listens for form submission and runs spam checks before allowing it to proceed.
// checks are layered: time-based, maths verification, and honeypot field.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formSubTime = Date.now();
  const timeDifference = (formSubTime - pageLoadTime) / 1000;

  const formData = new FormData(contactForm);
  const mathAnswer = formData.get("math-answer");
  const honeypot = formData.get("website");

  if (timeDifference < 3) {
    errorText.innerHTML = "An error occurred. Please try again.";
  } else if (mathAnswer != 15) {
    errorText.innerHTML = "Please answer the verification question correctly.";
  } else if (honeypot) {
    errorText.innerHTML = "An error occurred. Please try again.";
  } else {
    contactForm.submit();
  }
});