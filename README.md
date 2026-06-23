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
* Google Fonts
* Font Awesome Icons

---

## Project Goals

* To communicate the goals of the company to the user in a succinct manner.
* To provide a history of the company and insight into the motivations for its formation.
* To attract new talent and provide a route for interested applicants to submit their information and be considered for a position at the company.
* To act as a hub for the company to display its media, such as launch videos and images.

---
## Wireframes

![Index.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/index-wireframe.webp "Index.html Wireframe")

![About.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/about-wireframe.webp "About.html Wireframe")

![Gallery.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/gallery-wireframe.webp "Gallery.html Wireframe")

![Careers.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/careers-wireframe.webp "Careers.html Wireframe")

![Contact.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/contact-wireframe.webp "contact.html Wireframe")
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
* Robust form validation and measures to reduce spam submissions. 

### Pages

* **Home** — details the goals of the company
* **About** — a visual history of Athena
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
* After implementing a custom math question on the contact page (in order to reduce possible spam bot submissions) i decided to create custom styled radio inputs, to better fit the aesthetic of the website. Using the `:has()` css selector, i was able to adjust the styling of the label element and it's children, dependent on whether the nested input was currently `:checked` or not.

## Deployment

This project was deployed using GitHub Pages. The steps taken were:

1. Push all project files to a GitHub repository
2. Navigate to the repository **Settings** tab
3. Select **Pages** from the left hand menu
4. Under **Branch**, select `main` and click **Save**
5. GitHub Pages will publish the site and provide a live URL

To run the project locally:

1. Clone the repository: `git clone https://github.com/lewispratt/Project-Athena.git`
2. Open `index.html` in your browser — no build step or dependencies required

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

### Video Player

* Custom video player controls are hidden until the user presses play, preserving screen real estate and maintaining a clean design.
* A transparent overlay provides visual feedback when a player button is pressed.
* Using `IntersectionObserver`, if the user scrolls away from the video while it is playing, the video stops and the overlaid content is toggled back.
* When the user presses play, if the viewport is not fully aligned with the video panel, it will automatically scroll to bring the video panel into full view.

### Accessibility

* The `prefers-reduced-motion` CSS media query has been used where animations are present, ensuring users with vestibular conditions can access and use the site comfortably.

* To adhere to accessibility conventions, a distinction was made between the types of links used on each page. These distinctions allow assitive technology to provide more context aroudn the type of link that is being focussed.
  * Any link/clickable element that takes the user to a different page uses an `<a>` tag.

  * Any link/clickable element that performs an action on the same page uses a `<button>` element. E.g. scrolling to a different part of the page, toggling the play state of video media.

* Where appropriate, images have been contained within a `<figure>` element, with their accompanying description being nested inside a `<figcaption>` element. This accurately allows accessibility aids and search engines to identify the type of content being displayed and keeps these images as self contained pieces of content.

* Form elements that do not have an associated label, have had the `aria-label` attribute added to them, to describe their purpose and give each element context.

* To evaluate and identify any issues related to accessibility, i used a Chrome plugin called Accessibility Insights for Web. This enabled me to run tests on specific pages, and recieve an assessment regrding how effectively that page meets accessibility standards.

* All pages have been optimised to allow effective keyboard control if needed. This ensures all elements that a user may want to access, are available both via keyboard and mouse or just keyboard control. 

---

## Challenges & Problem Solving

### Form Validation and Security

From previous experience of hosting websites with a contact page, I am aware that without appropriate counter-measures, contact forms can be routinely targetted by bots that will submit unwanted form data. This causes unnecessary spam, as well as possible security concerns depending on the backend systems.

In order to address this issue, as well as ensure that all necessary information is collected, I chose to implement a layered approach of form validation, combining 4 strategies to reduce the likelihood of malicious or unwanted/unhelpful submissions.

1. Required attribute
    * Adding the `required` attribute to essential form inputs is the most basic form of validation, ensuring that key information such as contact details and names are not omitted either intentionally or accidentally. 
2. Time based validation.
    * When a page containing a form is loaded, the initial time at page load is recorded via Javascript.
    * The time is also recorded at form submission.
    * By determining the difference in these two time variables, we are able to see how long it took the user to complete and submit the form.
    * If the time taken between loading the page and form submission is less than 3 seconds, an error is displayed in the UI, asking the user to try completing the form again.
    * This helps to reduce automated form submissions as bots can often load the page, complete the required fields and submit the form within seconds.

3. User Logic based validation
    * Using a very simple math based logic question, it is possible to further reduce the risk of automated submissions.
    * Once submitted, the value of the selected answer is checked and if incorrect, the UI prompts the user to complete the verification question correctly.

4. 'Honeypot' input field
    * Placing an input field within the form, but ensuring the user never see's it, is another way of checking for genuine user input.
    * Many bots that submit spam via simple forms will fill out every form input element in an effort to meet all required criteria for it to submit successfully.
    * By adding an input field that is never intended to be completed by a genuine user, it is possible to check on submission if a value has been entered, and if so, prevent the submission from completing. 
    * Ideally the input should be visible (meaning not `display:none` as some bots can check for this) but placed out of view of the user.

    To achieve this is defined the input field:

        <input id="website-input" type="text" name="website" placeholder="Your Website" autocomplete="off" tabindex="-1">

    Then styled it so that it was placed out of the viewport by a significant amount:

        #website-input{
          position:absolute;
          left:-10000px;
        }

    The `tabindex` attribute allows the field to be focusable but not reachable using keyboard controls. `autocomplete="off"` also ensures that the field is not accidentally completed automatically, causing the validation to fail through no fault of the user.  

By combining these four methods, it is possible to reduce the likelihood of annoying/malicious automated form submissions. I am aware however, that for larger and more complex applciations, there are significantly more robust techniques available that will further reduce this risk.

For a simple applciation such as this, I believe the techniques i have implimented are sufficient to address this issue.

    contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //get for submission time
    const formSubTime = Date.now();
    let difference = (formSubTime - pageLoadTime) / 1000;
    //get answer to math question
    const formData = new FormData(contactForm);
    const mathAnswer = formData.get("math-answer");
    const honeypot = formData.get("website");

    // run through checks to determine if it's a valid submission
    if (difference < 3) {
        errorText.innerHTML = "An error occurred. Please try again.";
        console.log("stalled at check1");
    }
    else if (mathAnswer != 15) {
        errorText.innerHTML = "Please answer the verification question correctly.";
        console.log("stalled at check2");
    } 
    else if(honeypot){
        errorText.innerHTML = "An error occurred. Please try again.";
        console.log("stalled at check3");
    }
    else {
        contactForm.submit()
    }

    })


During development, i used `console.log()` to indicate during testing, which check the form was failing the validation on. This helped to identify any bugs or edge cases that may have been tricky to find.

### Form accessibility

When designing the custom `<input type="radio">` elements for my contact form, I initially set the  `input` element to `display:none;`. During testing I realised that this had taken the inputs out of the tab order, meaning that the custom radio buttons i had created could not be selected via the use of Tab on the keyboard. 

This is a poor experience for users who may have accessibility needs. The solution to this was to keep the inputs in the tab order by removing `display:none;` and using CSS to alter their visibility and size.

        .radio-container>input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

The result ensures that the radio buttons can be selected with Tab then arrow buttons are used to move between the seperate radio buttons in the fieldset.

### Full screen panels

I took inspiration for the design of my project from other tech companies such as SpaceX, who use full height 'panels' for a bold and visually pleasing effect.

When first exploring this idea, i became aware of the unit of measurement, `vh` which i started to use when sizing my full screen panels. This presented very well on the desktop and on first appeareance on mobile. `vh` sets the height of an element to the viewport height, a unit that at first sight i thought was exactly what i was looking for.

However, as i continued development of the site, and regularly checked the results on a mobile device, i realised that the placement of elements within full height panels was unpredictable and would vary depending on whether the address bar was visible or retracted at the top of the screen. This meant that the bold visual style i was attempting to implement was at times being disrupted, as elements would appear below the fold when loading the page initially, then when scrolling (and the address bar retracting) the elements would be in the psoition i had initially intended.

![Viewport Height screenshot](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/viewport-height.webp "100vh unit test")

*(Above panel is missing spacing at the bottom of the screen and an arrow that when pressed scrolls to the next panel)*

After some research, i discovered the measurement unit `svh`. This measurement reflects the smallest possible viewport height of the users borwser, taking into account the address bar and other possible borwser elements that tend to retract on scroll. 

![Smallest Viewport Height screenshot](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/smallest-viewport-height.webp "100svh unit test")

*(Using 100svh allows the full contents of the panel to be shown, without having to account for possible browser elements that take up some of the viewport space)*

Using this unit ensured that, when my page loaded on a mobile device, the full height panel was exactly the size of the viewable area on the mobile device. This merant placing my nested elements in each panel became easier to predict as i did not have to account for additional space taken up by mobile browser elements.



---

## Credits

* Images: [NASA](https://images.nasa.gov/)
* Images: [Unsplash](https://unsplash.com)
* Fonts: Google Fonts — `Aldrich`
* Icons: Font Awesome



---

---

## Author

Lewis Pratt — Diploma in Web Application Development — Code Institute — 2026
