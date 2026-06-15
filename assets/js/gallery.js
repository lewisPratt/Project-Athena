const lightBox = document.querySelector("#lightbox");

function closeLightbox() {
    lightBox.classList.add("hidden");
    lightBox.classList.remove("gallery-lightbox-flex");
    lightBox.innerHTML = "";
}

document.querySelectorAll(".enlarge-image").forEach(image => {
    image.addEventListener("click", () => {
        lightBox.classList.remove("hidden");
        lightBox.classList.add("gallery-lightbox-flex");
        lightBox.innerHTML = `<img src="${image.dataset.src}" alt="${image.dataset.alt}">`;
    });
});

// Close lightbox when clicking outside the image
lightBox.addEventListener("click", (event) => {
    if (event.target === lightBox) {
        closeLightbox();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});


// window.addEventListener("scroll", () => {
//     if (!lightBox.classList.contains("hidden")) {
//         closeLightbox();
//     }
// });

