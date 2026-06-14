document.querySelectorAll(".gallery-image").forEach(image => {
    image.addEventListener("click", () => {
        const lightbox = document.querySelector("#lightbox");
        lightbox.classList.remove("hidden");
        lightbox.classList.add("gallery-lightbox-flex");
        lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
    });
});

document.querySelector("#lightbox").addEventListener("click", () => {
    const lightbox = document.querySelector("#lightbox");
    lightbox.classList.add("hidden");
    lightbox.innerHTML = "";
});