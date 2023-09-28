function typeText(element, text, speed) {
    let i = 0;
    let isCursorVisible = true;

    function toggleCursor() {
        isCursorVisible = !isCursorVisible;
        element.textContent = text.substring(0, i) + (isCursorVisible ? '|' : ' ');
    }

    function type() {
        if (i <= text.length) {
            toggleCursor();
            if (i < text.length) {
                i++;
                setTimeout(type, speed);
            }
        }
    }

    type();
}

// Call the typing effect function when the page loads
window.addEventListener('load', function () {
    const bigTextElement = document.querySelector('.centered-text p');
    const textToType = "👋 | Hello, my name is Igor, and these are my GitHub projects.";
    const typingSpeed = 100; // Adjust typing speed in milliseconds

    // Start the typing animation
    typeText(bigTextElement, textToType, typingSpeed);
});


