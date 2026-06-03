
# Project-Athena

## Description

A static website for a private aerospace company seeking to raise awareness of their brand, goals and attract new employees.

Built utilising HTML, CSS and Javascript to present a professional, responsive and modern experience.

## Project Goals

- To communicate to the user, the goals of the company in a succinct manner.
- To provide a history of the company, and insight into the motivations for it's formation.
- To atttract new talent and provide a route for interested applicants to submit their information and be considered for a job at the company.  
- To act as a hub for the company to display it's media, such as launch videos and images.

## Style and Design inspirations

I took inspiration from the SpaceX website, focussing on a minimal yet visually impactful design language. Large images highlight attractive features within the high quality photogaphy and contribute aesthetically to the overall design.  


## CTAs

The website has clear calls to action (CTA), prompting the user to be aware of and access the areas of the website that most align with the business goals of the company.

Each CTA is a styled button, with clearly defined characteristics and wording.

## Key Features

- Flex-box structured responsive html pages with key viewport breakpoints. 
- CSS animations used to highlight key areas and enhance visual appeal. 
- Home page detailing goals of the company.
- About page giving a visual history of Athena.
- Join page allowing intrested users to express their interest in joining Athena.
- Contact page allowing visitors to submit their details and receive confirmation that their message was sent.
- Gallery page featuring a number of images that align with Athenas mission statement.
- Launch page for displaying future and past rocket launch videos.
- Careers page for viewing possible job vacancies.
- Responsive navigation.
- Footer section with relevant links and copyright.
- Consistent styling across the site.

## Usage

To view this project, clone the repository to your machine and visit the index.html file in your browser of choice.

## Key design considerations

- Max-width of all full width containers has been set to 1440px, ensuring that the site maintains a cotrolled layout even on the highest resolution dispalys.

- Font color has been set to an off white (#F4F4F4), to reduce eye strain caused by using pure white in contrast with pure black.

- Each page has its own css file as well as including the sitewide style.css.

- Each page has its own JavaScript file (if it uses JavaScript), as well as including the sitewide.js file for universal JS functions.

- Some of the images have been edited to add a smooth transition between the image and the black background.

## Site Wide feature breakdown

- Font awesome has been used to include icons where necessary. Custom graphics have been created using Affinity Designer when needed.

- Colour scheme is primarily black and white allowing attractive transitions between images of space and the body background colour.

- Navbar links show indicators of the page you are on both in mobile and desktop menu.

- Footer includes social media links that open in seperate tab

- Footer includes typical footer nav links.

## Page feature breakdown

- Used svh to achieve full viewport height panels that could be styled predictably. Initially used VH, but on mobile this does not account for the retractable address bar, toolbars etc. This means that elements appear at different positions (above the fold/under the fold) on different devices/viewport sizes. svh unit calculates the height of the panels to the smallest potential viewport height, taking into account the height of the address bar etc, meaning that styling of the panels could be consistent and predictable.  

- JavaScript has been used to manage the visibility of items such as the navbar icon, overlay text, video player controls and other buttons as well as other dynamic elements. This has allowed for a more interesting and interactive design.
Most of these elements have had their display property adjusted through the assignment and de-assignment of classes that change this property from block to none or vica-versa.

- The scroll arrows at the bottom edge of each panel allow the user to follow the flow of the home page, providing a visually pleasing experience as well as a guided route through the content most important to the business goals.

- The custom video player controls are hidden until the user presses play, saving on screen real estate and maintaining a less cluttered design. A transparent overlay on top of the video panel provides visual feedback when a player button is pressed.

- Through the use of intersectionObserver, should the user scroll away from the video whilst it is still playing, it will stop playing and toggle back the overlayed content in that panel.

- When the user presses play on the video controls, if the viewport is not fully aligned with the video panel, it will scroll to make the video panel fill the entire viewport.

- Clear CTAs direct the user to the most important sections of the site, prioritizing business goals.

- Flexbox has been used for the main layout elements on the page, allowing for dynamic re-sizing and placement depending on the viewport size.

- Within the header panel, there are some absolutely positioned elements that identify planned areas of development for the moon project. These indicators have been animated using CSS animations and pseudo classes.
