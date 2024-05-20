# Anime Show Website

Welcome to the Anime Show Website project! This website showcases popular anime shows with information and images, providing a visually appealing and user-friendly interface. Built with HTML, CSS, JavaScript, and the Swiper.js library, this project aims to deliver a smooth and engaging user experience.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Swiper Integration**: Seamless integration of the Swiper.js library for creating engaging carousels.
- **Autoplay Slides**: Automatically swiping slides with adjustable delay.
- **Customizable Breakpoints**: Display a different number of slides based on screen width.
- **Anime Information**: Displays images, titles, and descriptions for various anime shows.

## Demo

You can view a live demo of the project [here](https://satyam-pratibhan.github.io/Anime-Website/).

![image](https://github.com/SATYAM-PRATIBHAN/Anime-Website/assets/142714564/a09144fa-e6b6-488d-b949-65ba64f8470e)


## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/SATYAM-PRATIBHAN/Anime-Website.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Anime-Website
    ```

## Usage

1. Open the `index.html` file in your web browser to view the website.

2. To customize the content, edit the HTML files in the project directory.

## Technologies Used

- **HTML**: For the structure of the website.
- **CSS**: For styling the website.
- **JavaScript**: For adding interactivity.
- **Swiper.js**: For creating carousels and slideshows.

### HTML Structure

The website has two main sections: a home section for featured anime shows and a coming soon section for upcoming anime shows.

### Swiper Initialization

Swiper is initialized in the JavaScript files to create carousels for both sections.

```javascript

    var comingSwiper = new Swiper(".coming-container", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            568: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            968: {
                slidesPerView: 5,
            },
        }
    });
});
```

Sure! Here is a sample README.md file for your anime show website project:

markdown
Copy code
# Anime Show Website

Welcome to the Anime Show Website project! This website showcases popular anime shows with information and images, providing a visually appealing and user-friendly interface. Built with HTML, CSS, JavaScript, and the Swiper.js library, this project aims to deliver a smooth and engaging user experience.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: The website is fully responsive and works on all device sizes.
- **Swiper Integration**: Seamless integration of the Swiper.js library for creating engaging carousels.
- **Autoplay Slides**: Automatically swiping slides with adjustable delay.
- **Customizable Breakpoints**: Display a different number of slides based on screen width.
- **Anime Information**: Displays images, titles, and descriptions for various anime shows.

## Demo

You can view a live demo of the project [here](https://your-demo-link.com).

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/anime-show-website.git
    ```

2. Navigate to the project directory:

    ```bash
    cd anime-show-website
    ```

## Usage

1. Open the `index.html` file in your web browser to view the website.

2. To customize the content, edit the HTML files in the project directory.

## Technologies Used

- **HTML**: For the structure of the website.
- **CSS**: For styling the website.
- **JavaScript**: For adding interactivity.
- **Swiper.js**: For creating carousels and slideshows.

## Code Overview

### HTML Structure

The website has two main sections: a home section for featured anime shows and a coming soon section for upcoming anime shows.

### Swiper Initialization

Swiper is initialized in the JavaScript files to create carousels for both sections.

```javascript
document.addEventListener("DOMContentLoaded", function() {
    var homeSwiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var comingSwiper = new Swiper(".coming-container", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            568: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            968: {
                slidesPerView: 5,
            },
        }
    });
});
```
## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or enhancements.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to the branch.
5. Open a pull request.

## Contact
For any questions or feedback, please contact satyampratibhaan@gmail.com.
