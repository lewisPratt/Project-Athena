/*////////////////////////////////////////
Index page JS for Project Athena
Contains functions and event listeners for the index page, including video playback controls,
scroll arrow navigation, location circle interactions, and viewport-responsive behaviour.
/////////////////////////////////////////*/

// ---- Element references ----

const kennedyText = document.getElementById("kennedy-reference-content");
const kennedyBox = document.getElementById("panel-one");
const kennedyPicture = document.getElementById("kennedy-picture");
const videoControls = document.getElementById("video-controls");
const panelVideo = document.getElementById("kennedy-video");
const videoOverlay = document.getElementById("controls-feedback-overlay");
const volumePlus = document.getElementById("volume-plus");
const volumeMinus = document.getElementById("volume-minus");
const skipText = document.getElementById("skip-text");
const historyButton = document.getElementById("kennedy-button");
const scrollArrows = document.querySelectorAll(".scroll-arrow");
const baseScrollArrow = document.querySelector("#optional-arrow");
const overlayContents = [volumePlus, volumeMinus, skipText];

const skipLength = 10;
let videoState;
let screenWidth = window.visualViewport.width;

/*/////////////////////////
Intersection Observer
/////////////////////////*/

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

// pauses the video if it is playing and the panel scrolls out of view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && videoState == true) {
      toggleVideo();
    }
  });
}, observerOptions);

observer.observe(kennedyBox);

/*/////////////////////////
Functions
/////////////////////////*/

// shows or hides the optional scroll arrow based on screen width
function checkScreenWidth(currentWidth) {
  if (currentWidth >= 768) {
    baseScrollArrow.setAttribute("tabindex", "-1");
  } else {
    baseScrollArrow.removeAttribute("tabindex");
  }
}

// scrolls the viewport smoothly to the element with the given ID
function scrollToPanel(panelId) {
  const panelElement = document.getElementById(panelId);
  if (panelElement) panelElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

// toggles play/pause state of the kennedy panel video, managing UI state transitions
function toggleVideo() {
  if (panelVideo.paused) {
    panelVideo.muted = false;
    panelVideo.volume = 0.2;

    if (kennedyText.classList.contains("slide-in-x")) {
      kennedyText.classList.remove("slide-in-x");
      historyButton.classList.toggle("slide-in-x");
      kennedyPicture.classList.toggle("slide-in-y");
    }

    historyButton.classList.toggle("slide-out-x");
    kennedyText.classList.toggle("slide-out-x");
    kennedyPicture.classList.toggle("slide-out-y");
    videoControls.classList.toggle("hidden");

    document.getElementById("play-icon").classList.toggle("hidden-element");
    document.getElementById("stop-icon").classList.toggle("hidden-element");
    document.getElementById("video-playback-toggle-button").classList.toggle("pressed-control");

    scrollToPanel("panel-one");
    panelVideo.play();

  } else {
    panelVideo.pause();
    videoControls.classList.toggle("hidden");

    kennedyText.classList.toggle("slide-out-x");
    kennedyText.classList.toggle("slide-in-x");
    historyButton.classList.toggle("slide-out-x");
    historyButton.classList.toggle("slide-in-x");
    kennedyPicture.classList.toggle("slide-out-y");
    kennedyPicture.classList.toggle("slide-in-y");

    document.getElementById("play-icon").classList.toggle("hidden-element");
    document.getElementById("stop-icon").classList.toggle("hidden-element");
    document.getElementById("video-playback-toggle-button").classList.toggle("pressed-control");
  }
}

// makes a specific overlay content element visible
function showOverlayText(elementToToggle) {
  elementToToggle.classList.add("visible-element");
}

// removes all visible-element classes and resets the overlay animation
function resetOverlayAnimation() {
  overlayContents.forEach((element) => {
    element.classList.remove("visible-element");
  });
  videoOverlay.classList.remove("overlay-animation");
  void videoOverlay.offsetWidth;
}

// removes the overlay animation class if it is currently active, preventing animation conflicts
function checkOverlayNotActive() {
  if (videoOverlay.classList.contains("overlay-animation")) {
    resetOverlayAnimation();
  }
}

// triggers the overlay feedback animation
function activateOverlay() {
  videoOverlay.classList.add("overlay-animation");
}

// skips the video forward by skipLength seconds and shows overlay feedback
function skipForward() {
  checkOverlayNotActive();
  panelVideo.currentTime += skipLength;
  skipText.innerText = "+" + skipLength + "s";
  showOverlayText(skipText);
  activateOverlay();
}

// increases video volume by 20% up to a maximum of 100%, with overlay feedback
function increaseVolume() {
  checkOverlayNotActive();
  const newVolume = panelVideo.volume + 0.2;
  if (newVolume <= 1) {
    panelVideo.volume += 0.2;
    volumePlus.innerText = "+20%";
  } else {
    volumePlus.innerText = "Max volume";
  }
  showOverlayText(volumePlus);
  activateOverlay();
}

// decreases video volume by 20% down to a minimum of 0%, with overlay feedback
function decreaseVolume() {
  checkOverlayNotActive();
  const newVolume = panelVideo.volume - 0.2;
  if (newVolume >= 0) {
    panelVideo.volume -= 0.2;
    volumeMinus.innerText = "-20%";
  } else {
    volumeMinus.innerText = "Min volume";
  }
  showOverlayText(volumeMinus);
  activateOverlay();
}

/*/////////////////////////
Event Listeners
/////////////////////////*/

// updates screenWidth and re-evaluates arrow visibility on viewport resize
window.addEventListener("resize", () => {
  screenWidth = window.visualViewport.width;
  checkScreenWidth(screenWidth);
});

// pauses video when clicked while playing (allows overlay controls to still toggle play)
panelVideo.addEventListener("click", () => {
  if (!panelVideo.paused) toggleVideo();
});

// resets the overlay animation once it has finished playing
videoOverlay.addEventListener("animationend", resetOverlayAnimation);

// tracks video playing state for the intersection observer
panelVideo.addEventListener("playing", () => { videoState = true; });
panelVideo.addEventListener("pause", () => { videoState = false; });

document.getElementById("video-playback-toggle-button").addEventListener("click", toggleVideo);
document.getElementById("skip-forward").addEventListener("click", skipForward);
document.getElementById("volume-up").addEventListener("click", increaseVolume);
document.getElementById("volume-down").addEventListener("click", decreaseVolume);

// scrolls to the relevant base info section when a location circle is clicked
document.getElementById("base-one-location-circle").addEventListener("click", () => {
  scrollToPanel("athena-base-text");
});
document.getElementById("base-two-location-circle").addEventListener("click", () => {
  scrollToPanel("athena-crucible-text");
});

// scrolls to the panel specified in each arrow's data-next-panel attribute
scrollArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    scrollToPanel(arrow.getAttribute("data-next-panel"));
  });
});

// run on load
checkScreenWidth(screenWidth);