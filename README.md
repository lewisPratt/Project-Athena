

# Athena Aerospace

![Athena Aerospace](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/readme-header.webp "Athena Aerospace")

Live site: [Athena Aerospace Home Page](https://lewispratt.github.io/Project-Athena/)

## Table of Contents

- [Athena Aerospace](#athena-aerospace)
  - [Table of Contents](#table-of-contents)
  - [Deployment](#deployment)
  - [Pages Overview](#pages-overview)
  - [Technologies Used](#technologies-used)
  - [Additional Reading References](#additional-reading-references)
  - [UX Design](#ux-design)
    - [Project Goals](#project-goals)
    - [Target Audience](#target-audience)
    - [Audience Goals](#audience-goals)
    - [Developer Goals](#developer-goals)
    - [User Stories](#user-stories)
  - [User Story Outcomes](#user-story-outcomes)
  - [Wireframes](#wireframes)
  - [Design \& Style](#design--style)
    - [Color Scheme](#color-scheme)
    - [Styling](#styling)
    - [Fonts](#fonts)
    - [CSS Animations](#css-animations)
  - [Key Features - Design \& content](#key-features---design--content)
    - [Pages](#pages)
  - [Technical Decisions](#technical-decisions)
    - [Styling](#styling-1)
    - [Layout](#layout)
    - [JavaScript](#javascript)
    - [Video Player](#video-player)
    - [Accessibility](#accessibility)
  - [Challenges \& Problem Solving](#challenges--problem-solving)
    - [Page Deployment](#page-deployment)
    - [Form Validation and Security](#form-validation-and-security)
    - [Form accessibility](#form-accessibility)
    - [Full screen panels](#full-screen-panels)
  - [Code Validation](#code-validation)
    - [CSS](#css)
    - [HTML](#html)
  - [Compatibility](#compatibility)
  - [Testing](#testing)
  - [Credits](#credits)
  - [Author](#author)



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

## Pages Overview
(Due to css driven animations that effect visibility dependant on scroll location, some elements are not fully visible in the following screenshots)

<img src="https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/index-screenshot.webp" width="600" alt="Home page screenshot">

<img src="https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/about-screenshot.webp" width="600" alt="Home page screenshot">

<img src="https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/gallery-screenshot.webp" width="600" alt="Home page screenshot">

<img src="https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/careers-screenshot.webp" width="600" alt="Home page screenshot">

<img src="https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/contact-screenshot.webp" width="600" alt="Home page screenshot">

<img src="https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/contact-success-screenshot.webp" width="600" alt="Home page screenshot">

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)
* Google Fonts - `Aldrich`, `Montserrat`
* Font Awesome Icons

## Additional Reading References

Whilst developing this site, additional reading was undertaken to learn and implement design features and interactivity that contribute to the business and developer goals. 

* Javascript / CSS / HTML - https://www.w3schools.com. When searching online for additional details on html elements, css selectors and JS functions, w3schools was utilized to gain a high level understanding of the code. W3 provides very good, short descriptions and examples of how specific pieces of code can be used, as well as linking to additional reading that may contribute to fully understanding it's use.

* Javascript / CSS / HTML - https://developer.mozilla.org/en-US/ For a more detailed understanding of particular concepts.

* I did not use any structured tutorials (either written or video format) to design or implement any aspects of this project.

* I utilized a LLM (Claude) to troubleshoot bugs that i was not able to solve through my additional reading. During my learning, I always ensure that my prompts are accompanied by a direction to not provide complete code to solve the issue i am facing. Instead I am clear to instruct the LLM to support my learning and help me to think out the problem i am facing and prioritize critical thinking in order to gain a deeper understanding of the problem i am trying to solve.

## UX Design

### Project Goals

The primary goal of the Athena Aerospace website is to provide a hub for the fictional aerospace company's contact information, media assets and history. It also serves as a recruitment portal, displaying available job roles and facilitating the submission of job applications.

### Target Audience

There are three main target audiences for the site:

* Aerospace Industry professionals looking for new work opportunities.
* Investors looking for information on the company and its history.
* Hobbyists looking for information about Athena Aerospace projects as well as associated images and videos.

### Audience Goals

* Aerospace Industry Professional
  * To view information on current projects being undertaken.
  * To view information on available jobs at the company.
  * To be able to submit a job application directly to the company.
  * To find information future plans, projects and vision for the company
  * To contact the company directly to ask any questions.

* Investors
  * To view information on the history of the company.
  * To view information detailing the founding members of the company.
  * To gain an understanding of future plans, projects and vision for the company.
  * To contact the company directly to ask any questions.

* Hobbyist
  * To view information on the history of the company.
  * To view information detailing the founding members of the company.
  * To gain an understanding of future plans, projects and vision for the company.
  * To contact the company directly to ask any questions.
  * To access images of past projects and meaningful achievements that the company has undertaken.
  * To access videos of past launches and view details of these launches.

---

### Developer Goals

* The site should be professional and modern, incorporating current design standards and meeting accessibility needs.
* The site should present media assets in a clean and responsive design, ensuring that images and videos can be viewed on both mobile and desktop browsers.
* Javascript should be used to enhance the UX, providing user interaction feedback that feels modern and falls in line with current design trends seen elsewhere on the web.
* The site should demonstrate the developers knowledge of and ability to use the three core languages of web design (HTML/CSS/JS), with code being cross-browser compatible, fully validated, tested and organized in line with industry standard practices.

---

### User Stories

The following user stories describe the key ways in which the site may be used, from the perspective of different users.

---

### User Story 1 - Hobbyist Space Enthusiast

(Must Have)

I am a space enthusiast and i want to view media related to shuttle launches undertaken by Athena to increase my knowledge on the progress of the companies work.

#### Acceptance Criteria

* [x] The site navigation should allow easy and intuitive access to media such as videos and images.
* [x] Images and videos should be well presented and not distorted or poor quality.
* [x] Launch videos should be of good quality and easily identifiable by date.
* [x] Images and videos should be accompanied by brief descriptions.

#### Tasks

* [x] Create gallery page.
* [x] Create Image gallery section.
* [x] Create video gallery section.
* [x] Create responsive layout for gallery page.
* [x] Hover effect that shows additional information about the media.
* [x] Add option that when clicked images/videos open in separate tab to view larger.
* [x] Add gallery link to site navigation.

---

### User Story 2 - Industry professional

(Must Have)

As an engineer, I'd like to view possible job opportunities that i may be interested in applying for.

#### Acceptance Criteria

* [x] Clear call to action on home page that directs the user to the careers/available job roles page.
* [x] Careers page must have currently available job opportunities clearly outlined.
* [x] Job listings should be responsive on all screen sizes and easily readable.
* [x] Each job opportunity must have a clear path to apply for the role.  

#### Tasks

* [x] Add and style a clear call to action button on the homepage that directs the user to the careers page.
* [x] Add careers link to the footer of every page.
* [x] Add careers link to the nav bar.
* [x] Create responsive layout of current job opportunities on careers page.
* [x] Implement card HTML structure to format each job opportunity aesthetically.
* [x] Add button on each job card to apply for that role. Button links to application page.

---

### User Story 3 - Industry Investor

(Must Have)

I am an investor who wants to learn more about the founders of Athena Aerospace and the company's history.

#### Acceptance Criteria

* [x] The site navigation should allow easy and intuitive access to an about page.
* [x] Images and videos should be well presented and not distorted or poor quality.
* [x] History of the company should be easily read in a short period of time.
* [x] Images should be used to increase confidence and put a face to the founders of the company.

#### Tasks

* [x] Create about page.
* [x] Create history section that outlines briefly the origins of the company.
* [x] Add images to history section.
* [x] Add quotes from founders.
* [x] Create founder bio cards to give background on each founder.

---

### User Story 4 - Industry Professional

(Must Have)

I am a member of the the Aerospace profession and would like to contact Athena to ask a question about a project they are undertaking.

#### Acceptance Criteria

* [x] The site navigation should allow easy and intuitive access to a contact page.
* [x] The contact page should be responsive and work on mobile as well as desktop.
* [x] The contact page should have required fields to ensure a response can be sent to the user when ready.
* [x] The contact form should use validation strategies to reduce the likelihood of accidental or malicious submissions.
* [x] The user should be informed when their contact form has successfully been submitted.

#### Tasks

* [x] Create contact page.
* [x] Ensure a responsive layout for contact page to make it work easily on mobile and desktop.
* [x] Gather the users email address, name and query.
* [x] Require all fields to be completed to ensure it is a meaningful submission.
* [x] Utilise JS to validate the form submission.
* [x]  For invalid submission, show clearly visible error prompt.
* [x] For valid submission direct the user to the contact success page.
* [x] Create contact success page
* [x] Write successful submission message to inform user of valid submission

---

### User Story 5 - Hobbyist

(Could Have)

I am a member of the public that likes to learn about past rocket launches as well as see details of future planned launches

#### Acceptance Criteria

* [ ] The site navigation should allow easy and intuitive access to a launches page.
* [X] Videos should be well presented and not distorted or poor quality.
* [X] Each video should be accompanied by launch date and description.
* [ ] Details of future planned launches should be clear and easy to understand.
* [ ] Future launch details should include descriptions of their purpose and location.

#### Tasks

* [ ] Create launches page.
* [x] Create video gallery section.
* [ ] Create responsive layout for launches page.
* [x] Hover effect that shows additional information about the video being selected.
* [x] Add option to show video in full screen/larger size if wanted.
* [ ] Add launches link to site navigation.
* [ ] Create countdown timer, counting towards next launch.

---

## User Story Outcomes

During development, all [Must have] designated user stories were implemented and completed in full. These features were essential to ensure the site met the core goals of the company.

User Story 5 was not fully implemented due to the limited time available on the project, however, selected acceptance criteria and tasks were integrated into the gallery page of the final website, allowing the viewing of videos alongside images.

Implementing a fully featured launch page would be completed if this were an ongoing project. Not having the launch page does not have a significant impact on the core goals of the company, but does affect a specific user group that may appreciate the ease of access to associated launch details in the future.

## Wireframes

![Index.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/index-wireframe.webp "Index.html Wireframe")

![About.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/about-wireframe.webp "About.html Wireframe")

![Gallery.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/gallery-wireframe.webp "Gallery.html Wireframe")

![Careers.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/careers-wireframe.webp "Careers.html Wireframe")

![Contact.html Wireframe](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/wireframes/contact-wireframe.webp "contact.html Wireframe")

---

## Design & Style

Inspiration was taken from the SpaceX website, focusing on a minimal yet visually impactful design language. Large images highlight attractive features within high quality photography and contribute aesthetically to the overall design. The colour scheme is primarily black and white, allowing attractive transitions between images of space and the body background colour. Font colour has been set to an off-white `(#F4F4F4)` to reduce eye strain caused by using pure white against pure black.

### Color Scheme

The color scheme was kept simple and high contrast to complement the theme of the site, drawing parallels between the high contrast of many images taken from space. Using black as a background color allows some creative use of background images, enabling some images to gradually fade to black. This can contribute to the pages sense of flow is in keeping with the theming of the overall site.

Other colours were used sparingly in order to ensure consistency and predictability across the site:

* Red `#ff0000` has been used to highlight error messages (on the form submission pages)  
* A shade of grey `#999898` has been used on the footer elements, reducing their contrast with the background to show that they are less vital elements but still useful and informative if needed.
* Hover effects were added to the navigation links to ensure that the user receives feedback on which link they are about to select. Inverting the colours of the nav link (to white background and black text) clearly highlights the relevant navigation link.

### Styling

All CSS styling has been achieved through the use of a maximum of 2 stylesheets per page. No inline or embedded CSS has been used throughout the site.

* `styles.css` - Includes the global styling for elements that are used throughout the website. Utilizing a central global stylesheet allows changes to elements on multiple pages by only changing the properties in one sheet.
* `page-name.css` - Each page has it's own named stylesheet, containing specific CSS styling relevant to that page alone.

By separating out global styles and page specific styles, it ensures that stylesheets stay readable and specific to their intended purpose. Ensuring that the page specific stylesheet is included after the global stylesheet allows the developer to overwrite global styles if needed, as CSS is applied in a cascading fashion (top down).

CSS variables were used to specify key property values that may change at some point, ensuring that these properties were applied consistently across the entire site.

                /*======================
                    VARIABLES
                =====================*/

                :root{
                    --primary-font-color: #F4F4F4;
                    --background-color: #000000;
                    --primary-font: "Montserrat", "Verdana", sans-serif;
                    --heading-font: "Aldrich", "Verdana", sans-serif;
                }

These variables were then accessible in all of my page specific stylesheets because:

1. The global `style.css` was loaded before the page specific stylesheet.This ensures that when the page specific sheet uses a variable, it has actually been created.

        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/index.css">

2. The variables were applied to the root pseudo class, making them accessible to the entire document because they have been applied to the root element of the document (which in HTML is the `<html>` element.)

### Fonts

Google fonts was used to import selected fonts into the project. Only 2 fonts were used to ensure consistency in design across the whole site.

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Aldrich&display=swap" rel="stylesheet" />

* Aldrich
* Montserrat

Heading fonts:

            h1,
            h2,
            h3,
            h4,
            h5,
            h6{
                font-family: var(--heading-font)
                text-transform: uppercase;
            }
Button fonts :

            .button-class{
                text-transform: uppercase;
                font-size: 1rem;
                font-family: var(--heading-font)
            }

Paragraph fonts:

            p {
                font-family: var(--primary-font)
            }

### CSS Animations

Throughout the site there are a number of CSS animations that add some interest to the pages.

1. index.html
    * Animations added to the spinning base location circles at the top of the page. These animations have been added to draw attention to the information in the header of the page and to add some interactivity to the page:

            #base-one-location-circle,
            #base-two-location-circle {
                transform-origin: center;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: rgba(255, 255, 255, .3);
                border: 1px dashed white;
                animation: rotateLocator 12s infinite linear;
                transition: .8s;
                cursor: pointer;
            }

            #base-one-location-circle:hover,
            #base-two-location-circle:hover {
                scale: 1.5;
            }
            #base-one-location-circle:focus-visible,
            #base-two-location-circle:focus-visible{
                scale: 1.5;
                background-color:rgb(255, 255, 219);
            }

            @keyframes rotateLocator {
                0% {
                    transform: rotateZ(0deg);
                }

                100% {
                    transform: rotateZ(360deg);
                }   
            }

        The base location indicators are also buttons that the user can click to jump to another section of the page. The addition CSS rule for `:focus-visible` ensures that keyboard users are able to see when the base elements are selected using the Tab key.

    * Animation to control opacity of the video overlay that is shown when a video control element is pressed:

                @keyframes video-overlay {
                    0% {
                        opacity: 0;
                    }

                    50% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 0;
                    }
                }

        The video overlay provides feedback for when the user presses the skip, volume up or volume down buttons. revealing and concealing the the video itself is managed via Javascript.

        Using classes with different properties applied, Javascript is able to hide and reveal elements dependant on the state of the video. (play/stopped/out of view). Below is a simplified version of the code used to manage the video section:

                //Javascript

                const videoOverlayPicture = document.querySelector("#video-overlay-picture");

                function toggleVideoState(){
                    if(video.paused()){
                        video.play();
                        video.muted = false;
                        video.volume = 0.2;
                        videoOverlayPicture.classList.remove("slide-in-x");
                        videoOverlayPicture.classList.add("slide-out-x");
                    }
                
                    else{
                        video.pause();
                        video.muted = true
                        videoOverlayPicture.classList.remove("slide-out-x");
                        videoOverlayPicture.classList.add("slide-in-x");
                    }
                }


                //CSS

                    .slide-out-x {
                        transform: translateX(-100%);
                        opacity: 0;
                    }

                    .slide-in-x {
                        transform: translateX(0);
                        opacity: 1;
                    }

2. About.html

    - Animations applied to elements when they enter the viewport. These animations have been added to improve the visual appeal, creating some additional movement and interactivity to the page. About pages can sometimes be lengthy and unattractive with large blocks of text, so adding smaller chunks of text, with added visual flair, helps to keep the content approachable and interesting.  
    - The top of the page features a strong heading, with a striking background and animated timeline leading the user downwards. The moving circles that travel down the timeline were animated using the following CSS animation, with each circle (blip) being given a staggered animation delay to have them appearing to be produced infinitely. 
  
                @keyframes moveBlip {
                    0% {
                        top: 0;
                    }

                    90% {
                        top: 100%;
                        opacity: 1;
                    }

                    100% {
                        opacity: 0;
                    }
                }

    - These moving circles guide the users view downwards and create a sense of movement and progress as you move through the timeline below.
  
    - As you move down the page, the timeline containers subtly move upwards into view.

                @keyframes slideUp {
                    0% {
                        transform: translateY(100%);
                    }

                    100% {
                        transform: translateY(0);
                    }
                }

    - As you come to the end of the timeline, you see the 'We are Athena' headline again as it has a fixed position and there has been transparent space left for it to appear again just above the founders portraits. This further positions the founders as committed and dedicated, showing that they are confident to put their names and reputations alongside the company name and culture.

    - The position and visibility of the heading above the founders portraits is linked to position of the scroll in the viewport using `animation-timeline: view();`

                #founders-title {
                    width: 90%;
                    animation-timeline: view();
                    animation-range: cover 0% cover 70%;
                    animation-fill-mode: both;
                    animation-name: fadeInSide;
                    font-size: 2rem;
                    line-height: 2rem;
                    margin-bottom: 30px;
                }

    - this same type of CSS animation was used for the founder portrait cards, adding slightly different values to stagger their entrance into the viewport. 


                #portrait-one {
                    animation-range: cover 0% cover 30%;
                }

                #portrait-two {
                    animation-range: cover 10% cover 30%;
                }

                #portrait-three {
                    animation-range: cover 20% cover 30%;
                }

    - The first `cover` defines when the animation should start playing, in this case it is when the element starts to "cover"   the viewport. 0% would mean as soon as it starts covering the viewport. 10% means when the element is 10% into covering the viewport etc. This results in all the elements starting their entry animation slightly staggered. The second `cover` defines when the animation will finish, when the element is 30% into covering the viewport.
    As the start thresholds are slightly staggered but the ending threshold is the same for all three, the last cards animation runs over a shorter scroll period, ensuring that all elements are fully visible within the viewport before the user scrolls too far down the page.  

    - When researching the `animation-range` property, I came to understand that it is not currently supported in all major browsers, with FireFox being the main browser missing support.

    ![browser support](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/animation-range.webp "missing browser support")

    For this reason, this property has not been used in a way that would impact on the sites core features, and during testing in FireFox, as the property is not supported, the elements that use it, simply appear as usual on the About.html page, with no evident negative impact. 
  
---

## Key Features - Design & content

* Fully responsive layout built with Flexbox, designed with a mobile first approach.
* Full viewport height panels using `100svh`.
* Scroll driven fade in animations using `animation-timeline: view()`.
* CSS animations and pseudo classes used to highlight key areas and enhance visual appeal.
* Responsive navigation with active page indicators on both mobile and desktop.
* Clear calls to action (CTAs) directing users to the most important sections of the site.
* Custom video player with hidden controls, overlay feedback, and IntersectionObserver integration.
* Footer with social media links and navigation.
* Consistent styling across all pages to convey business branding.
* Robust form validation and measures to reduce spam submissions.
* Gallery page that features images and videos. Descriptions and the ability to view larger versions of the media.
* About page featuring unique styling to engage the user and convey the culture and history of the business.
* Careers page to allow users to view available job roles and submit job applications.

---

### Pages

* **Home** — details the goals of the company
* **About** — a visual history of Athena
* **Contact** — allows visitors to submit their details and receive confirmation their message was sent
* **Gallery** — features images that align with Athena's mission statement
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

### Layout

* Semantic HTML elements (`<header>`, `<main>`, `<article>`, `<footer>`) have been used to structure all pages logically, ensuring search engines and accessibility tools can understand the content.
* Flexbox has been used extensively for the main layout elements, enabling dynamic resizing and placement depending on viewport size.
* Viewport breakpoints have been implemented at 768px and 1024px, with some pages having additional breakpoints for page-specific elements.

### JavaScript

* All JavaScript has been placed in external files linked in the `<head>` section with the `defer` attribute. This ensures scripts are loaded only after the DOM has finished parsing, improving performance and keeping the `<head>` organized alongside other external file links. This is a more modern approach than placing scripts just before the closing `</body>` tag.
* A site-wide `global.js` file handles universal JS functions, with each page having its own JS file for page-specific functionality.
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

* To adhere to accessibility conventions, a distinction was made between the types of links used on each page. These distinctions allow assistive technology to provide more context around the type of link that is being focussed.
  * Any link/clickable element that takes the user to a different page uses an `<a>` tag.

  * Any link/clickable element that performs an action on the same page uses a `<button>` element. E.g. scrolling to a different part of the page, toggling the play state of video media.

* Where appropriate, images have been contained within a `<figure>` element, with their accompanying description being nested inside a `<figcaption>` element. This accurately allows accessibility aids and search engines to identify the type of content being displayed and keeps these images as self contained pieces of content.

* Form elements that do not have an associated label, have had the `aria-label` attribute added to them, to describe their purpose and give each element context.

* To evaluate and identify any issues related to accessibility, i used a Chrome plugin called Accessibility Insights for Web. This enabled me to run tests on specific pages, and receive an assessment regarding how effectively that page meets accessibility standards.

* All pages have been optimized to allow effective keyboard control if needed. This ensures all elements that a user may want to access, are available both via keyboard and mouse or just keyboard control.

---

## Challenges & Problem Solving

### Page Deployment
Towards the end of the project, i encountered an issue with GitHub failing to deploy my pages site successfully. The error messages were not helpful in determining what was wrong as they just returned "Deployment Failed, try again later". 
![Failed Deployment](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/failed-pages-deployment.webp "Failed Pages Deployment")

By searching online for recent news about this issue, it appeared that there had been a GitHub service issue the previous day that was causing pages to fail deployment, however it was now marked as solved and should no longer be an issue. This was not the case for my project. 
I spent some time making sure the commit that first failed to deploy wasn't causing the issue. This commit was simply adding an additional CSS rule, so was highly unlikely to be the cause of the issue. 

From further reading online I came to the conclusion that i had tried to push my changes to GitHub during the disrupted service period, which then effectively caused my pages deployment to become "locked up" stopping any further deployments.


To solve this, i essentially reset my pages deployment by going back to the pages section in the repo settings, setting the root folder to none and pressing save. Then waiting 5 minutes and re-selecting my root folder and saving again.
Within 5 minutes the site had deployed successfully with the changes from the previously failed deployments. 


### Form Validation and Security

From previous experience of hosting websites with a contact page, I am aware that without appropriate counter-measures, contact forms can be routinely targeted by bots that will submit unwanted form data. This causes unnecessary spam, as well as possible security concerns depending on the backend systems.

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

By combining these four methods, it is possible to reduce the likelihood of annoying/malicious automated form submissions. I am aware however, that for larger and more complex applications, there are significantly more robust techniques available that will further reduce this risk.

For a simple application such as this, I believe the techniques i have implemented are sufficient to address this issue.

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

During development, i used `console.log()` to indicate during testing, which check the form was failing the validation on. This helped to identify any bugs or edge cases that may have been tricky to find. These liens were removed prior to final deployment.

### Form accessibility

When designing the custom `<input type="radio">` elements for my contact form, I initially set the  `input` element to `display:none;`. During testing I realized that this had taken the inputs out of the tab order, meaning that the custom radio buttons i had created could not be selected via the use of Tab on the keyboard.

This is a poor experience for users who may have accessibility needs. The solution to this was to keep the inputs in the tab order by removing `display:none;` and using CSS to alter their visibility and size.

        .radio-container>input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

The result ensures that the radio buttons can be selected with Tab then arrow buttons are used to move between the separate radio buttons in the fieldset.

### Full screen panels

I took inspiration for the design of my project from other tech companies such as SpaceX, who use full height 'panels' for a bold and visually pleasing effect.

When first exploring this idea, i became aware of the unit of measurement, `vh` which i started to use when sizing my full screen panels. This presented very well on the desktop and on first appearance on mobile. `vh` sets the height of an element to the viewport height, a unit that at first sight i thought was exactly what i was looking for.

However, as i continued development of the site, and regularly checked the results on a mobile device, i realized that the placement of elements within full height panels was unpredictable and would vary depending on whether the address bar was visible or retracted at the top of the screen. This meant that the bold visual style i was attempting to implement was at times being disrupted, as elements would appear below the fold when loading the page initially, then when scrolling (and the address bar retracting) the elements would be in the position i had initially intended.

![Viewport Height screenshot](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/viewport-height.webp "100vh unit test")

*(Above panel is missing spacing at the bottom of the screen and an arrow that when pressed scrolls to the next panel)*

After some research, i discovered the measurement unit `svh`. This measurement reflects the smallest possible viewport height of the users browser, taking into account the address bar and other possible browser elements that tend to retract on scroll.

![Smallest Viewport Height screenshot](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/smallest-viewport-height.webp "100svh unit test")

*(Using 100svh allows the full contents of the panel to be shown, without having to account for possible browser elements that take up some of the viewport space)*

Using this unit ensured that, when my page loaded on a mobile device, the full height panel was exactly the size of the viewable area on the mobile device. This meant placing my nested elements in each panel became easier to predict as i did not have to account for additional space taken up by mobile browser elements.

## Code Validation

### CSS

I used the Jigsaw CSS Validator to ensure that my CSS files were valid and met current standards.

about.css was the only file to show any errors. The validator stated that the properties `animation-timeline:view()` and `animation-range:cover 0% cover 70%` were not valid and did not exist.

By undertaking some research I was able to find that despite the validator not recognizing these properties, they are in fact valid, but are not yet added to the documentation that is being used by the validator. Chromium based browsers have supported the properties since 2023 and alternative browsers have begun supporting it more recently. Through my testing, i have seen the properties successfully work in the majority of mainstream browsers, with FIreFox being the notable exception. However the property not being supported just results in the animation not being applied to the elements, so no difference can be seen on the page and there is no negative impact on the UX.

![about.css validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/about-jigsaw-result.jpg "about.css jigsaw result")

![index.css validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/index-jigsaw-result.jpg "index.css jigsaw result")

![contact.css validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/contact-jigsaw-result.jpg "contact.css jigsaw result")

![contact-success.css validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/contact-success-jigsaw-result.jpg "contact-success.css jigsaw result")

![gallery.css validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/gallery-jigsaw-result.jpg "gallery.css jigsaw result")

![careers.css validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/careers-jigsaw-result.jpg "careers.css jigsaw result")

![style.css validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/style-jigsaw-result.jpg "style.css jigsaw result")

### HTML

![index.html validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/index-html-result.jpg "index.html validator result")

![about.html validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/about-html-result.jpg "about.html validator result")

![gallery.html validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/gallery-html-result.jpg "gallery.html validator result")

![careers.html validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/careers-html-result.jpg "careers.html validator result")

![contact.html validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/contact-html-result.jpg "contact.html validator result")

![contact-success.html validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/contact-success-html-result.jpg "contact-success.html validator result")


### Javascript

To validate my Javascript code, i used jshint.com, which helped to identify unused variables, missing semicolons and syntax errors that could cause bugs in the codes function.

![contact.js validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/contact-js.png "contact.js validator result")

![index.js validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/index-js.png "index.js validator result")

![gallery.js validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/gallery-js.png "gallery.js validator result")

![careers.js validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/careers-js.png "careers.js validator result")

![global.js validator result](https://raw.githubusercontent.com/lewisPratt/Project-Athena/refs/heads/main/assets/images/readme/global-js.png "global.js validator result")

---

## Compatibility

---

## Testing

| Feature | Chrome | Firefox | Safari | Mobile |
|---|---|---|---|---|
| Navigation | ✅ | ✅ | ✅ | ✅ |
| Lightbox | ✅ | ✅ | ✅ | ✅ |
| Video Playback | ✅ | ✅ | ✅ | ✅ |
| Form Validation radio buttons | ✅ | ✅ | ✅ | ✅ |
| Scroll to section arrows | ✅ | ✅ | ✅ | ✅ |
| Full viewport height panels | ✅ | ✅ | ✅ | ✅ |
| CSS: animation-range | ✅ | X | ✅ | ✅ |



## Credits

* Images: [NASA](https://images.nasa.gov/)
* Images: [Unsplash](https://unsplash.com)
* Fonts: Google Fonts — `Aldrich`, `Montserrat`
* Icons: Font Awesome


## Author

Lewis Pratt — Diploma in Web Application Development — Code Institute — 2026
