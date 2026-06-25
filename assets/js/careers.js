/*////////////////////////////////////////
Careers page JS for Project Athena
Contains functions and event listeners for the job application lightbox, including
form validation, spam prevention, file upload handling, and lightbox open/close behaviour.
/////////////////////////////////////////*/

// ---- Element references ----

const lightBox = document.querySelector("#lightbox");
const positionSelect = document.querySelector("select[name='position']");
const jobForm = document.querySelector("#job-form");
const lightboxDiv = document.querySelector("#application-form");
const thankYouDiv = document.querySelector("#thank-you");
const fileNameText = document.querySelector("#file-upload-text");
const emailInput = document.querySelector("#email-input");
const errorText = document.querySelector("#error-text");

const pageLoadTime = Date.now();

/*/////////////////////////
Functions
/////////////////////////*/

// closes the lightbox, resets the form, and restores the application form view
function closeLightbox() {
  lightBox.classList.add("hidden");
  lightBox.classList.remove("careers-lightbox-flex");
  thankYouDiv.classList.add("hidden");
  jobForm.reset();
  fileNameText.innerHTML = "";
  lightboxDiv.classList.remove("hidden");
}

/*/////////////////////////
Event Listeners
/////////////////////////*/

// displays the uploaded file name and resets any validation error colour
document.querySelector("#cv-upload").addEventListener("change", (event) => {
  const uploadedFileName = event.target.files[0].name;
  if (fileNameText.style.color === "red") {
    fileNameText.style.color = "#F4F4F4";
  }
  fileNameText.innerHTML = uploadedFileName;
});

// handles job application form submission with time-based and honeypot spam checks,
// followed by CV upload validation before showing the confirmation view
jobForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(jobForm);
  const timeDifference = (Date.now() - pageLoadTime) / 1000;

  if (timeDifference < 5) {
    errorText.innerHTML = "<p>An error occurred. Please try again.</p>";
  } else if (formData.get("website")) {
    errorText.innerHTML = "<p>An error occurred. Please try again.</p>";
  } else {
    const position = formData.get("position");
    const cvFile = formData.get("cv");

    if (cvFile.size <= 0) {
      fileNameText.innerHTML = "Please upload a CV before submitting.";
      fileNameText.style.color = "red";
      return;
    }

    lightboxDiv.classList.add("hidden");
    thankYouDiv.classList.remove("hidden");
    thankYouDiv.innerHTML = `
      <h2>Application received.</h2>
      <p>We have received your application for the position of ${position}.</p>
      <p>We'll review your application shortly and get back to you.</p>
      <button class="button-class" id="close-button">Close</button>
    `;
    document.querySelector("#close-button").addEventListener("click", closeLightbox);
  }
});

// opens the lightbox and pre-selects the position matching the clicked apply button
document.querySelectorAll(".apply-button").forEach((button) => {
  button.addEventListener("click", () => {
    lightBox.classList.remove("hidden");
    lightBox.classList.add("careers-lightbox-flex");
    positionSelect.value = button.dataset.position;
    emailInput.focus();
  });
});

// closes the lightbox when clicking on the backdrop (outside the form)
lightBox.addEventListener("click", (event) => {
  if (event.target === lightBox) closeLightbox();
});

// closes the lightbox when the Escape key is pressed
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});