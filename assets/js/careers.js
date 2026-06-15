const lightBox = document.querySelector("#lightbox");
const positionSelect = document.querySelector("select[name='position']");
const jobForm = document.querySelector("#job-form");
const lightboxDiv = document.querySelector("#application-form");
const thankYouDiv = document.querySelector("#thank-you");

// handle submission of the job application form via JS
jobForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(jobForm);
    const position = formData.get("position");
    const email = formData.get("email");
    const name = formData.get("name");
    const cvFile = formData.get("cv");

    // console.log("Position:", position);
    // console.log("Email:", email);
    // console.log("Name:", name);
    // console.log("CV File:", cvFile);
    lightboxDiv.classList.add("hidden");
    thankYouDiv.classList.remove("hidden");
    thankYouDiv.innerHTML = `<h2>Thank you for applying!</h2><p>We have received your application for the position of ${position}. We will review your application and get back to you soon.</p>`;
    
});
// Function to close the lightbox
function closeLightbox() {
    lightBox.classList.add("hidden");
    lightBox.classList.remove("careers-lightbox-flex");
    if (!thankYouDiv.classList.contains("hidden")) {
        thankYouDiv.classList.add("hidden");
    }
    jobForm.reset();
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

//close lightbox when scrolling
window.addEventListener("scroll", () => {
    if (!lightBox.classList.contains("hidden")) {
        closeLightbox();
    }
});

