const gameMenuBtn = document.querySelector('.menu button');
const menu = document.querySelector('.menu');

// Menu Toggler
gameMenuBtn.addEventListener('click', function (event) {
    let isExpanded = gameMenuBtn.getAttribute('aria-expanded');
    if (isExpanded === 'false') {
        gameMenuBtn.setAttribute('aria-expanded', 'true');
        menu.classList.add('show');
    } else {
        gameMenuBtn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
    }
});

// Close menu when clicking outside of it
document.addEventListener('click', function (event) {
    let isExpanded = gameMenuBtn.getAttribute('aria-expanded');
    // Check if the menu is expanded
    if (isExpanded === 'true') {
        // Check if the click is inside the menu
        if (!menu.contains(event.target) && !gameMenuBtn.contains(event.target)) {
            gameMenuBtn.setAttribute('aria-expanded', 'false');
            menu.classList.remove('show');
        }
    }
});