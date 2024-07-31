//index.js

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const gif = document.querySelector('.thinking-gif');

    // Example: Move the GIF to a new position
    function moveGif(top, left) {
        gif.style.top = top + 'px';
        gif.style.left = left + 'px';
    }

    // Move the GIF to position (100, 100)
    moveGif(100, 100);

    // Example: Move GIF on button click
    document.querySelector('#move-button').addEventListener('click', () => {
        moveGif(200, 200); // New position (200, 200)
    });
});

