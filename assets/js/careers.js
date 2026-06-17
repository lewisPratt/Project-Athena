const lightBox = document.querySelector("#lightbox");
const positionSelect = document.querySelector("select[name='position']");
const jobForm = document.querySelector("#job-form");
const lightboxDiv = document.querySelector("#application-form");
const thankYouDiv = document.querySelector("#thank-you");
const filenNameText = document.querySelector("#file-upload-text");

const pageLoadTime = Date.now();
const errorText = document.querySelector("#error-text");

//updates file name element after file upload. 
document.querySelector("#cv-upload").addEventListener("change", (event) => {
    let uploadedFileName = event.target.files[0].name;
    if (filenNameText.style.color == "red") {
        filenNameText.style.color = "#F4F4F4";
    }
    filenNameText.innerHTML = uploadedFileName;
});

// handle submission of the job application form via JS
jobForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(jobForm);
    //get for submission time
    const formSubTime = Date.now();
    let difference = (formSubTime - pageLoadTime) / 1000;
    //perform time and honeypot validation
    if (difference < 5) {
        errorText.innerHTML = "<p>An error occurred. Please try again.</p>";
    }
    else if(formData.get("website")){
        errorText.innerHTML = "<p>An error occurred. Please try again.</p>";
    }
    else {
        const position = formData.get("position");
        const email = formData.get("email");
        const name = formData.get("name");
        const cvFile = formData.get("cv");
        //check to see if a file was uploaded and throw early return if not.
        if (cvFile.size <= 0) {
            filenNameText.innerHTML = "Please upload a CV before submitting.";
            filenNameText.style.color = "red";
            return;
        }
        lightboxDiv.classList.add("hidden");
        thankYouDiv.classList.remove("hidden");
        thankYouDiv.innerHTML = `<h2>Application received.</h2><p>We have received your application for the position of ${position}.</p><p> We'll review your application shortly and get back to you.</p><button class="button-class" id="close-button">Close</button>`;
        document.querySelector("#close-button").addEventListener("click", closeLightbox);
    }
});


// Function to close the lightbox
function closeLightbox() {
    lightBox.classList.add("hidden");
    lightBox.classList.remove("careers-lightbox-flex");
    if (!thankYouDiv.classList.contains("hidden")) {
        thankYouDiv.classList.add("hidden");
    }
    jobForm.reset();
    filenNameText.innerHTML = "";
    lightboxDiv.classList.remove("hidden");
}
//trigger the lightbox to open when clicking on the apply button and set the position select value to the data-position attribute of the button
document.querySelectorAll(".apply-button").forEach(button => {
    button.addEventListener("click", () => {
        lightBox.classList.remove("hidden");
        lightBox.classList.add("careers-lightbox-flex");
        const position = button.dataset.position;
        positionSelect.value = position;
    });
});

// Close lightbox when clicking outside the image
lightBox.addEventListener("click", (event) => {
    if (event.target === lightBox) {
        closeLightbox();
    }
});
//close lightbox when pressing the escape key
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

