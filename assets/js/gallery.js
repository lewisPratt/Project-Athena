/*////////////////////////////////////////
Gallery page JS for Project Athena
Contains functions and event listeners for the image lightbox on the gallery page.
/////////////////////////////////////////*/

// ---- Element references ----

const lightBox = document.querySelector("#lightbox");
const imageGallery = document.querySelector("#gallery-container");
const videoGallery = document.querySelector("#video-gallery-container");
const galleryButtons = document.querySelectorAll(".gallery-button");
const imageButton = document.querySelector("#image-gallery-button");
const videoButton = document.querySelector("#video-gallery-button")
const videoThumbs = document.querySelectorAll(".video-thumb");

let videoPlayTimer
let videoProgressInterval
/*/////////////////////////
Functions
/////////////////////////*/

// hides the lightbox and clears its contents
function closeLightbox() {
  lightBox.classList.add("hidden");
  lightBox.classList.remove("gallery-lightbox-flex");
  lightBox.innerHTML = "";
}

function setButtonState() {
  if (videoGallery.classList.contains("hidden") && !imageGallery.classList.contains("hidden")) {
    imageButton.classList.add("active-gallery-button");
    videoButton.classList.remove("active-gallery-button");
  }
  else if (!videoGallery.classList.contains("hidden") && imageGallery.classList.contains("hidden")) {
    videoButton.classList.add("active-gallery-button");
    imageButton.classList.remove("active-gallery-button");
  }
}

function showActiveGallery(activeGallery) {
  if (activeGallery == "images") {
    imageGallery.classList.add("gallery-entry");
    imageGallery.classList.remove("hidden");
    videoGallery.classList.add("hidden");
    videoGallery.classList.remove("gallery-entry");

  }
  else if (activeGallery == "videos") {
    imageGallery.classList.remove("gallery-entry");
    imageGallery.classList.add("hidden");
    videoGallery.classList.add("gallery-entry");
    videoGallery.classList.remove("hidden");
  }
  setButtonState()
}

function changeGallery(event) {
  if (event.target.id == "image-gallery-button") {
    showActiveGallery("images")
  }
  else {
    showActiveGallery("videos")
  }
}

function playDelay(event) {
  let video = event.target;
  let autoplayBar = video.parentElement.querySelector(".progress-bar");
  autoplayBar.classList.remove("visibility-hidden")
  progressBar(autoplayBar, video);
}

function progressBar(bar, video) {
  let barSize = bar.offsetWidth;
  videoProgressInterval = setInterval(() => {

    let newWidth = bar.offsetWidth - barSize / (1000 / 50);
    if (newWidth <= 0) {
      
      video.play();
      clearInterval(videoProgressInterval);
      bar.classList.add("visibility-hidden");
    }
    else {
      bar.style.width = newWidth + "px";

    }
  }, 50);
}

function resetThumb(event) {
  clearInterval(videoProgressInterval);
  let autoplayBar = event.target.parentElement.querySelector(".progress-bar");
  autoplayBar.classList.add("visibility-hidden")
  autoplayBar.style.width = "50%";
  event.target.pause();
  event.target.currentTime = 0;
}

/*/////////////////////////
Event Listeners
/////////////////////////*/
videoThumbs.forEach(thumb => {
  thumb.addEventListener("mouseover", playDelay, false);
  thumb.addEventListener("mouseout", resetThumb, false);

});

galleryButtons.forEach(button => {
  button.addEventListener("click", changeGallery, false);
});


// opens the lightbox and populates it with the clicked image
document.querySelectorAll(".enlarge-image").forEach((image) => {
  image.addEventListener("click", () => {
    lightBox.classList.remove("hidden");
    lightBox.classList.add("gallery-lightbox-flex");
    lightBox.innerHTML = `<img src="${image.dataset.src}" alt="${image.dataset.alt}">`;
  });
});
// opens the lightbox and populates it with the clicked video
document.querySelectorAll(".enlarge-video").forEach((video) => {
  video.addEventListener("click", () => {
    lightBox.classList.remove("hidden");
    lightBox.classList.add("gallery-lightbox-flex");
    lightBox.innerHTML = `<video autoplay controls src="${video.dataset.src}" alt="${video.dataset.alt}">`;
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

//on load

setButtonState();