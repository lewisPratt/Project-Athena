# Project Athena

A static website for a fictional private aerospace company, built as part of my Web Application Development at Code Institute. The project demonstrates user centric front end web development skills including responsive design, CSS animations, and interactive UI elements.

Live site: [Athena Home Page](https://lewispratt.github.io/Project-Athena/)

---

## Description

A static website for a fictional private aerospace company seeking to raise awareness of their brand, their goals, and attract new employees.

---
## Table of Contents

* [Technologies Used](#technologies-used)
* [Project Goals](#project-goals)
* [Wireframes](#wireframes)
* [Design and Style](#design--style)
* [Key Features](#key-features)
* [Page Descriptions](#pages)
* [Technical Decisions](#technical-decisions)
  * [Styling](#styling)
  * [Layout](#layout)
  * [Javascript](#javascript)
  * [Viewport Height](#viewport-height)
  * [Video Player](#video-player)
  * [Accessibility](#accessibility)
* [Challenges & Problem Solving](#challenges--problem-solving)
* [Credits](#credits)
* [Author](#author)

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)
* Bootstrap 5
* Google Fonts
* Font Awesome Icons

---

## Project Goals

* To communicate the goals of the company to the user in a succinct manner.
* To provide a history of the company and insight into the motivations for its formation.
* To attract new talent and provide a route for interested applicants to submit their information and be considered for a position at the company.
* To act as a hub for the company to display its media, such as launch videos and images.

---

## Design & Style

Inspiration was taken from the SpaceX website, focusing on a minimal yet visually impactful design language. Large images highlight attractive features within high quality photography and contribute aesthetically to the overall design. The colour scheme is primarily black and white, allowing attractive transitions between images of space and the body background colour. Font colour has been set to an off-white `(#F4F4F4)` to reduce eye strain caused by using pure white against pure black.

---

## Key Features

* Fully responsive layout built with Flexbox, designed with a mobile first approach
* Full viewport height panels using `100svh`
* Scroll driven fade in animations using `animation-timeline: view()`
* CSS animations and pseudo classes used to highlight key areas and enhance visual appeal
* Bootstrap tooltips
* Responsive navigation with active page indicators on both mobile and desktop
* Clear calls to action (CTAs) directing users to the most important sections of the site
* Custom video player with hidden controls, overlay feedback, and IntersectionObserver integration
* Footer with social media links and navigation
* Consistent styling across all pages

### Pages

* **Home** — details the goals of the company
* **About** — a visual history of Athena
their interest in joining Athena
* **Contact** — allows visitors to submit their details and receive confirmation their message was sent
* **Gallery** — features images that align with Athena's mission statement
* **Launch** — displays future and past rocket launch videos
* **Careers** — lists possible job vacancies

---

## Technical Decisions

### Styling

* `style.css` is linked in the `<head>` of all pages to provide consistent, site-wide styling. Each page also has its own `.css` file for page-specific styles, always linked below `style.css` to ensure page-specific styles can correctly override universal ones.
* All CSS has been placed in external stylesheets. No inline or embedded CSS has been used.
* Global style properties have been set on the `body` and common HTML elements to remove browser-imposed defaults that could cause unwanted visual effects.
* Pseudo classes have been used to trigger CSS effects throughout the site. `:hover` has been applied to navigation links and some images to provide visual feedback and overlay effects.
* CSS selector specificity has been used to ensure elements are correctly styled based on their `class`, `id`, or relationship to parent and sibling elements.
* A max-width of 1440px has been applied to all full-width containers, ensuring the layout remains controlled on high resolution displays.
* Font Awesome icons have been used throughout, with custom graphics created in Affinity Designer where needed.
* Some images have been edited to add a smooth transition between the image and the black background.

### Layout

* Semantic HTML elements (`<header>`, `<main>`, `<article>`, `<footer>`) have been used to structure all pages logically, ensuring search engines and accessibility tools can understand the content.
* Flexbox has been used extensively for the main layout elements, enabling dynamic resizing and placement depending on viewport size.
* Viewport breakpoints have been implemented at 768px and 1024px, with some pages having additional breakpoints for page-specific elements.

### JavaScript

* All JavaScript has been placed in external files linked in the `<head>` section with the `defer` attribute. This ensures scripts are loaded only after the DOM has finished parsing, improving performance and keeping the `<head>` organised alongside other external file links. This is a more modern approach than placing scripts just before the closing `</body>` tag.
* A site-wide `sitewide.js` file handles universal JS functions, with each page having its own JS file for page-specific functionality.
* Reusable JS functionality has been refactored into functions to avoid unnecessary repetition of code.
* The `addEventListener()` method has been used throughout to handle user interactions, primarily the `"click"` event.
* JavaScript manages the visibility of dynamic elements such as the navbar icon, overlay text, video player controls, and other buttons by toggling classes that control the `display` property.

### Viewport Height

* `svh` units have been used instead of `vh` for full viewport height panels. On mobile, `vh` does not account for retractable address bars and toolbars, causing elements to appear inconsistently above or below the fold across devices. `svh` calculates panel height based on the smallest potential viewport height, ensuring consistent and predictable styling across all devices.

### Video Player

* Custom video player controls are hidden until the user presses play, preserving screen real estate and maintaining a clean design.
* A transparent overlay provides visual feedback when a player button is pressed.
* Using `IntersectionObserver`, if the user scrolls away from the video while it is playing, the video stops and the overlaid content is toggled back.
* When the user presses play, if the viewport is not fully aligned with the video panel, it will automatically scroll to bring the video panel into full view.

### Accessibility

* The `prefers-reduced-motion` CSS media query has been used where animations are present, ensuring users with vestibular conditions can access and use the site comfortably.

---

## Challenges & Problem Solving

image hotspot research
how i came to use svh instead of vh
any other technical issues that i have overcome.

---

## Credits

* Images: [NASA](https://images.nasa.gov/)
* Fonts: Google Fonts — `Aldrich`
* Icons: Font Awesome


---

## Usage

To view this project locally, clone the repository to your machine and open `index.html` in your browser.

---

## Author

Lewis Pratt — Diploma in Web Application Development — Code Institute — 2026
