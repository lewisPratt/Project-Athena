/*////////////////////////////////////////
Gallery page JS for Project Athena
Contains functions and event listeners for the image lightbox on the gallery page.
/////////////////////////////////////////*/

// ---- Element references ----

const lightBox = document.querySelector("#lightbox");

/*/////////////////////////
Functions
/////////////////////////*/

// hides the lightbox and clears its contents
function closeLightbox() {
  lightBox.classList.add("hidden");
  lightBox.classList.remove("gallery-lightbox-flex");
  lightBox.innerHTML = "";
}

/*/////////////////////////
Event Listeners
/////////////////////////*/

// opens the lightbox and populates it with the clicked image
document.querySelectorAll(".enlarge-image").forEach((image) => {
  image.addEventListener("click", () => {
    lightBox.classList.remove("hidden");
    lightBox.classList.add("gallery-lightbox-flex");
    lightBox.innerHTML = `<img src="${image.dataset.src}" alt="${image.dataset.alt}">`;
  });
});

// closes the lightbox when clicking on the backdrop (outside the image)
lightBox.addEventListener("click", (event) => {
  if (event.target === lightBox) closeLightbox();
});

// closes the lightbox when the Escape key is pressed
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});