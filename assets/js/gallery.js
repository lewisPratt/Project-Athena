document.querySelectorAll(".gallery-image").forEach(image => {
    image.addEventListener("click", () => {
        const lightbox = document.querySelector("#lightbox");
        lightbox.classList.remove("hidden");
        lightbox.classList.add("gallery-lightbox-flex");
        lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
    });
});

// Close lightbox when clicking outside the image
document.querySelector("#lightbox").addEventListener("click", (event) => {
    if (event.target === document.querySelector("#lightbox")) {
        closeLightbox();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const lightbox = document.querySelector("#lightbox");
        closeLightbox();
    }
});
   

window.addEventListener("scroll", () => {
    const lightbox = document.querySelector("#lightbox");
    if (!lightbox.classList.contains("hidden")) {
        closeLightbox();
    }
});

function closeLightbox() {
    const lightbox = document.querySelector("#lightbox");
    lightbox.classList.add("hidden");
    lightbox.classList.remove("gallery-lightbox-flex");
    lightbox.innerHTML = "";
}