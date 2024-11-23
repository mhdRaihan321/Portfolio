// Typing Effect for Name
const typing = document.querySelector('.typing');
const text = "Raihan";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typing.textContent += text[index];
        index++;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();

// Scroll Animation
const hiddenElements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
    hiddenElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Typed.js Effect for titles
    const typed = new Typed('#Auto-Type', {
        strings: ['Raihan!'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,

    });

    const typed2 = new Typed('#Auto-Typ', {
        strings: ['Web Developer', 'App Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });

    // Reveal sections with animations on scroll
    const revealSections = () => {
        document.querySelectorAll('.hidden').forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add('show');
            }
        });
    };

    // Call the function on scroll
    window.addEventListener('scroll', revealSections);

    // Initial check on load
    revealSections();
});
