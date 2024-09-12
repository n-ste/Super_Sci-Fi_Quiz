# Super Sci-Fi Quiz

![Responsive Web Design](docs/responsive-design/responsive-design.png)

## Contents

* [User Experience](#user-experience)

* [Design](#design)
  * [Typography](#typography)
  * [Colour Scheme](#colour-scheme)
  * [Wireframes](#wireframes)
  * [Imagery](#imagery)
  * [Features](#features)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Frameworks and Libraries](#frameworks-and-libraries)

* [Deployment and Local Development](#deployment-and-local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [HTML Validation](#html-validation)
  * [CSS Validation](#css-validation)
  * [Bugs](#bugs)
  * [Resolutions](#resolutions)
  * [Known Bugs](#known-bugs)
    * [All Pages - Mobile](#all-pages---mobile)
    * [All Pages - Desktop](#all-pages---desktop)

* [Credits](#credits)
  * [Code](#code)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgements](#acknowledgements)

- - -

## User Experience

* In this project I've created a recipe website, this purpose is for users to be able to make healthy meals cooked from the comfort of their home without having to decipher difficult recipes.

* I've created four pages, on the home page the user will find a summary of what the website is for with a few tips and an optional newsletter they can sign up to so they can remain up to date on the latest recipes.

- - -

## Design

## Typography

I carefully chose two fonts for this project as I didn't want to use too many and make the project look cluttered, I imported these to my CSS file from Google Fonts.

* For the title, headings and expand/hide buttons for the recipe instructions and newsletter I used the font Kanit, in weight 700.

![Kanit 700](docs/fonts/kanit-700.jpg)

* For the main body paragraphs and navigation links I used Montserrat, in its standard weight of 400.

![Montserrat 400](docs/fonts/montserrat-400.jpg)

## Colour Scheme

Like with the fonts I didn't want to have too many colours in my project as I thought this could be quite distracting with the amount of images I've got displayed on the web page. I chose to use 5 different colours for separate sections of the page.

* For the header and footer I decided to use #B1CC74 to stand out against the other colours selected and be one of the first things the user sees.

* When it came to the background colour for the body element I wanted to use a colour to compliment the footer but not be too similar and I settled on #E8FCC2 which came out as a lighter green but not too similar to that of the header and footer section.

* As for the background colours for the paragraph sections in the page I chose to use a darker colour of #829399 to make it really stand out again the white font colour I chose, and further complimented this by added another even darker colour of #545F66 for the background of their respective headings.

* I opted to have a white font colour as I found this provided a great contrast to the header, footer and paragraph section background colours.

* The final colour I selected was always going to be a light blue which I only used to provide a border to the bottom of the header, and paragraph sections and the top of the footer for for this I chose #D0F4EA.
![Website Colour Scheme](docs/color-scheme/colour-scheme.jpg)

## Wireframes

* To give myself an idea of how I'd like the website to look I produced wireframes through the use of [Balsamiq](https://www.balsamiq.com), this allowed me to visualise what I wanted the website to look like before it was created and prompted me to style it accordingly.

* [Mobile Webpages](https://github.com/n-ste/Healthy_Cooking_Made-Simple/blob/main/docs/wireframes/mobile-wireframes.png)
* [Tablet Webpages](https://github.com/n-ste/Healthy_Cooking_Made-Simple/blob/main/docs/wireframes/tablet-wireframes.png)
* [Laptop Webpages](https://github.com/n-ste/Healthy_Cooking_Made-Simple/blob/main/docs/wireframes/laptop-wireframes.png)
* [Desktop Webpages](https://github.com/n-ste/Healthy_Cooking_Made-Simple/blob/main/docs/wireframes/desktop-wireframes.png)

### Imagery

* All images on my website including hero images and recipe images have been taken from [BBC Food](https://www.bbc.co.uk/food), individual images will be referenced in the credits section.

### Features

* Navigation Menu

  * When I started working on this project I knew that I wanted to create several different pages opposed to using a single-scrolling page.

  * Every page will have the same format and I started this by incorporating a navigation menu which will include the links to the other pages in my project.

* [Navigation Menu for Mobiles - Image](docs/features/navigation/mobile-nav.png)

  * For the navigation menu I decided to make this as responsive as I could due to the limited screen size and to prevent things from looking too cluttered. I started doing this by including a hamburger dropdown menu for smaller devices and positioning it on the far right of the screen.

    * This was done by using a checkbox and label, then in CSS I was able to hide the checkbox and make it so when you clicked it would display and hide the navigation menu.

  * Another choice I made when it came to the navigation menu was to have an active class on the page the user was currently visiting.

    * I did this by styling this class on CSS to have inverted colours and display it as a button.

  * I also adding some styling to the links for when they're hovered over, this was only a simple change and I did this by providing a bottom border to the link the user was hovering over in a contrasting white colour.

* [Navigation Menu for Tablets - Image](docs/features/navigation/tablet-nav.png)

* [Navigation Menu for Laptops - Image](docs/features/navigation/laptop-nav.png)

* When it came to the styling for the navigation menu on tablet and laptop size screens I decided to remove the hamburger icon and display the page links as we've got more space on these displays.

  * This was done by displaying the navigation toggle on the tablet breakpoint as 'none'.

* [Navigation Menu for Desktops - Image](docs/features/navigation/desktop-nav.png)

* For styling the navigation menu for desktop screens I decided to have this displayed on the left hand side of the screen so it could easily be differentiated from the way it was displayed on tablets and laptops.

* Footer
  * When it came to creating the footer I wanted this to appear the same on all devices, the only change that I made was adjusting the height depending on the screen size.

  * The only information provided on the footer is the links to our social media pages and I added these through the use of an unordered list.

  * [Mobile Footer - Image](docs/features/footer/mobile-footer.png)
  * [Tablet Footer - Image](docs/features/footer/tablet-footer.png)
  * [Laptop Footer - Image](docs/features/footer/laptop-footer.png)
  * [Desktop Footer - Image](docs/features/footer/desktop-footer.png)

* Page Layout
  * The layout of the page depends on the screen size you're viewing it on. Because I wanted to make the site as adaptable as possible I made it so the layout would change for each device type you view it on.
  
  * For mobiles I made the content display vertically to avoid the user having to scroll from left to right to view all the content on the screen.

  * But when it came to creating the design for bigger devices I wanted to display the content on the screen differently and I decided to do this by using a flexbox model so the items would display differently depending on the screen size. Instead of the sections displaying above eachother, they would display to the side.

  * I also adjusted the margin and padding size on the different breakpoints so that there would be more free space depending on the device the user was viewing the website on.

  * [Page Layout for Mobile - Image](docs/features/layout/mobile-layout.png)
  * [Page Layout for Tablet - Image](docs/features/layout/tablet-layout.png)
  * [Page Layout for Laptop - Image](docs/features/layout/laptop-layout.png)
  * [Page Layout for Desktop - Image](docs/features/layout/desktop-layout.png)

* Home
  * On the homepage we have a hero image welcoming the user to the website and on top of the image you can find some cover text explaining what this page is for.

    * [Home Hero Image](docs/features/home/home-hero.png)

  * I also 4 different sections and a header above these.
    * The first section is providing the user with the essentials they should have in their kitchen.
      * [Essentials Section](docs/features/home/essentials.png)
    * The second section is an image of some pots and pans which I thought fit in with the theme of the webpage.
      * [Pots and Pans Image](docs/features/home/pots-and-pans.png)
    * The third section was used to provide the user with a tip before following these recipes.
      * [Top Tip Section](docs/features/home/top-tip.png)
    * And the final section was used to enable the user to sign up to our newsletter.
      * I chose to display the newletter form with an expand/hide button to prevent taking up unneccesary space if the user wasn't interested in signing up to this.
      * I was able to do this by wrapping the content in a checkbox input element and hiding this unless it was checked.
        * [Unchecked Sign Up Form](docs/features/sign-up/unchecked-sign-up.png)
        * [Checked Sign Up Form](docs/features/sign-up/checked-sign-up.png)

* Recipe Pages
  * For the recipe pages I kept this very simple as I didn't want the user to get distracted by a flashy background.
  * However, I did want some colour on the page so I decided to include another hero image based on the meal type with a heading centered in the image.
    * [Recipe Pages Hero Image](docs/features/recipe-pages/recipe-hero-image.png)

  * I decided to include a short paragraph to open the page with which would give the user an idea of what the page was for.
    * [Introduction Paragraph](docs/features/recipe-pages/introduction-paragraph.png)

  * Like with the newsletter form I used an expand/hide button to keep the actual recipe hidden unless the user wanter to see this.
  * I was able to do this by wrapping the content in a checkbox input element and hiding this unless it was checked.
    * [Recipe Content Hidden](docs/features/recipe-pages/recipe-image.png)
    * [Recipe Content Expanded](docs/features/recipe-pages/recipe-image-expand.png)

### Accessibility

* One of my main goals was to make this website as accessible as possible and I did this by:
  * Using semantic selectors in my HTML through the use of an aria-label to allow the links to be read aloud for those using screen readers.
  * Providing the website with a fallback font for if the browser the user was using wouldn't load the page as it was initially designed.
  * Using contrasting colours for the background, section and headings.
  * I also made sure to provide an alt attribute to the images displayed incase these wouldn't load on the users browser.

## Technologies Used

### Languages

This website was built using HTML and styled with CSS.

### Frameworks and Libraries

* [Gitpod](https://www.gitpod.io/) - Used as the workspace implement changes to my website.
* [Github](https://github.com/) - Used to store and build my repository and to deploy my website.
* [Google Developer Tools](https://developer.chrome.com/docs/devtools) - To allow me to find out what might be preventing the bugs in my code.
* [Google Fonts](https://fonts.google.com/) - I used the fonts 'Kanit', and 'Montserrat'.
* [Balsamiq](https://balsamiq.com/) - I used Balsamiq to produce wideframes for my website and give me an idea of what might work and what might not.
* [Font Awesome](https://fontawesome.com/) - Font Awesome was used to download the icons for my navigation and social media links.
* [Am I Responsive?](https://ui.dev/amiresponsive) - Used to show how the webiste will look on different device types.
* [StackOverflow](https://stackoverflow.com/) - Used to troubleshoot and for help with understanding concepts.
* [W3Schools](https://www.w3schools.com/) - Used to troubleshoot and for help with understanding concepts.

## Deployment and Local Development

### Deployment

As we're using Github to deploy the site we'll do this through pages.

1. First, you'll go to [Github](https://github.com)
2. Then you'll need to find the correct repository, for this project it will be [Healthy_Cooking_Made_Simple](https://github.com/n-ste/Healthy_Cooking_Made-Simple)
3. You'll then go to the [settings](docs/deployment/depoloy-settings.png) page at the top of the screen.

4. When on the settings page there will be a [sidebar](docs/deployment/deploy-pages.png) on the left of the screen, click the link that says "Pages"
5. Now at the top of the page you'll want to select the option to "Deploy page from branch"
6. Select the ["main" branch from the"/root"](docs/deployment/deploy-branch.png) file and click save.
7. The [site will now be ready](docs/deployment/deploy.png) to be deployed.

## Local Development

### How to Fork

1. To fork the repository you'll first need to go to [Healthy_Cooking_Made_Simple](https://github.com/n-ste/Healthy_Cooking_Made-Simple)
2. At the top of the page there will be a button that says ["Fork"](docs/deployment/fork.png), click on this.

### How to Clone

1. To clone the repository first you'd need to visit the [repository page.](https://github.com/n-ste/Healthy_Cooking_Made-Simple)

2. You'd then click the green button that says ["Code"](docs/deployment/deploy-clone.png), this should open a box which will say "Clone" on it. Copy the Link that appears.

3. Then you can go to your terminal and type "git clone (paste in the link that you copied earlier) and you should have successfully cloned the repository.

## Testing

### HTML Validation

* [Home Page HTML](docs/validation/html-home.png)

* [Breakfast Recipe Page](docs/validation/html-breakfast.png)

* [Lunch Recipe Page](docs/validation/html-lunch.png)

* [Dinner Recipe Page](docs/validation/html-dinner.png)

* [About Page](docs/validation/html-about.png)

### CSS Validation

* [Stylesheet](docs/validation/css-validator.png)

### Bugs

* Home Page HTML
  * There were 2 warnings that came up in the validation test for the index page. These advised that I shouldn't be using a heading with any content in my code.
  * [Warnings for Home Page](docs/validation/warning-index.png)

* Breakfast Recipes, Lunch and Dinner Recipe Pages
  * There were 11 warnings issued over reusing the same ID for recipe item and expand-checkbox-label.
  * [Warnings for Breakfast Recipes, Lunch and Dinner Recipe Page](docs/validation/warning-breakfast.png)

* About Page
  * A warning was issued for the same reason that popped up in the home page validation section. It advised I shouldn't be using a h2 element without any content, but what the validator doesn't see is that this is for the styling of the hero image inside the h2 element.
  * [Warnings for About Page](docs/validation/warning-index.png)

### Resolutions

* Home Page HTML
  * Though I understand the reason for the errors in the home page, I've opted to leave these as they are as I did this purposefully for the styling that came with using the h2 element.

* Breakfast Recipes, Lunch and Dinner Recipe Pages
  * I decided to carry and leave the IDs as they were as once again this was purposeful for styling purposes. the expand-label checkbox was used to enable the user to show and hide more content and I felt there was no reason to change all of these to product the same output.

![Index Warnings](docs/validation/warning-index.png)

### Known Bugs

#### All Pages - Mobile

* Lighthouse
  * The known bugs for the home page is mostly the performance. I ran a check on this through Lighthouse on Chrome and found that the performance came out with a score of 75. While this isn't a terrible number, I thought this could definately be better. I solved this by lowering the image quality of the images on the webpage but found that negatively impacted the quality and decided that I could settle for the performance not being so great.
    * [Mobile Lighthouse Results - All Pages](docs/lighthouse/lighthouse-home.png)

#### All Pages - Desktop

* Lighthouse
  * When I ran the same check on the desktop version of the site I found that there wasn't much difference and this came back with a result of 78. For the same reasons as with the mobile display I chose to keep the images as the original resolutions to prevent any lack of quality for the webpages.
    * [Desktop Lighthouse Results - All Pages](docs/lighthouse/lighthouse-desktop.png)

## Credits

### Code

* [StackOverflow - Ignore Whitespace on Newsletter Form](https://stackoverflow.com/questions/13766015/is-it-possible-to-configure-a-required-field-to-ignore-white-space)

* Code Institute Love Running Project - Concept for the Navigation and Forms.

### Content

* Breakfast Recipe Page

  * [Breakfast Hero Image - Waterbury Publications, Inc.](https://www.eatthis.com/healthy-egg-recipes/)

  * [Banana Pancakes Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/banana_pancakes_62919)

  * [Fried Bacon with Poached Egg and Tomatoes Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/pan-fried_bacon_with_76907)

  * [Overnight Oats Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/overnight_muesli_with_57876)

  * [All-Day Breakfast Frittata Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/all-day_breakfast_12416)

  * [Blueberry Ricotta Pot Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/ricotta_pots_with_13643)

  * [Breakfast Quesadillas Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/breakfast_quesadillas_82028)

* Lunch Recipe Page
  * [Caesar Salad Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/easy_caesar_salad_64317)
  
  * [Halloumi Wrap Recipe - BBc Food](https://www.bbc.co.uk/food/recipes/easy_halloumi_wrap_57379)

  * [Tuna Bean Salad Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/tuna_bean_salad_54783)

  * [Pizza on Toast Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/pizza_on_toast_09337)

  * [Cheese, Tomato and Pesto Toastie Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/cheese_tomato_and_pesto_42396)

  * [Vegan Noodle Soup Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/vegan_noodle_soup_84779)

* Dinner Recipe Page

  * [Gnocchi with Cripsy Bacon and Spinach Pesto Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/gnocchi_with_crispy_19660)

  * [Chilli Bean Stir-Fry Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/chilli_bean_stir-fry_19412)

  * [Kimchi Fried Rice Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/kimchi_fried_rice_03887)

  * [Air-Fryer Sausage Bake Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/air_fryer_sausage_bake_35909)

  * [Spaghetti with Broccoli Pesto Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/spaghetti_with_broccoli_82791)

  * [Korean-Style Crispy Vegetable Pancakes Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/yachaejeon_korean_crispy_55746)

* About Page

  * [About Section - AI Generated from Deepai.org](https://deepai.org/chat/text-generator)

### Media

* Home Page

  * [Home Page Hero Image - mywholekitchen.com](https://www.mywholekitchen.com/)
  
  * [Pots and Pans Image - Alex Lau](https://www.bonappetit.com/story/10-essential-kitchen-tools-beginner-cooks)

* Breakfast Recipe Page

  * [Banana Pancakes Image - BBC Food](https://www.bbc.co.uk/food/recipes/banana_pancakes_62919)

  * [Fried Bacon with Poached Egg and Tomatoes Image - BBC Food](https://www.bbc.co.uk/food/recipes/pan-fried_bacon_with_76907)

  * [Overnight Oats Image - BBC Food](https://www.bbc.co.uk/food/recipes/overnight_muesli_with_57876)

  * [All-Day Breakfast Frittata Image - BBC Food](https://www.bbc.co.uk/food/recipes/all-day_breakfast_12416)

  * [Blueberry Ricotta Pot Image - BBC Food](https://www.bbc.co.uk/food/recipes/ricotta_pots_with_13643)

  * [Breakfast Quesadillas Recipe - BBC Food](https://www.bbc.co.uk/food/recipes/breakfast_quesadillas_82028)

* Lunch Recipe Page

  * [Caesar Salad Image - BBC Food](https://www.bbc.co.uk/food/recipes/easy_caesar_salad_64317)

  * [Halloumi Wrap Image - BBC Food](https://www.bbc.co.uk/food/recipes/easy_halloumi_wrap_57379)  

  * [Tuna Bean Salad Image - BBC Food](https://www.bbc.co.uk/food/recipes/tuna_bean_salad_54783)

  * [Pizza on Toast Image - BBC Food](https://www.bbc.co.uk/food/recipes/pizza_on_toast_09337)

  * [Cheese, Tomato and Pesto Toastie Image - BBC Food](https://www.bbc.co.uk/food/recipes/cheese_tomato_and_pesto_42396)

  * [Vegan Noodle Soup Image - BBC Food](https://www.bbc.co.uk/food/recipes/vegan_noodle_soup_84779)

* Dinner Recipe Page
  * [Gnocchi with Cripsy Bacon and Spinach Pesto Image - BBC Food](https://www.bbc.co.uk/food/recipes/gnocchi_with_crispy_19660)

  * [Chilli Bean Stir-Fry Image - BBC Food](https://www.bbc.co.uk/food/recipes/chilli_bean_stir-fry_19412)

  * [Kimchi Fried Rice Image - BBC Food](https://www.bbc.co.uk/food/recipes/kimchi_fried_rice_03887)

  * [Air-Fryer Sausage Bake Image - BBC Food](https://www.bbc.co.uk/food/recipes/air_fryer_sausage_bake_35909)

  * [Spaghetti with Broccoli Pesto Image - BBC Food](https://www.bbc.co.uk/food/recipes/spaghetti_with_broccoli_82791)

  * [Korean-Style Crispy Vegetable Pancakes Image - BBC Food](https://www.bbc.co.uk/food/recipes/yachaejeon_korean_crispy_55746)

* About Page

  * [About Page Hero Image - mywholekitchen.com](https://www.mywholekitchen.com/)

### Acknowledgements

First I'd like to acknowledge everyone involved in creating the Code Institute learning videos, which I've found invaluable. 

I'd also like to give a special mention to my mentor Jubril Akolade for providing me with advise and feedback on this project. 