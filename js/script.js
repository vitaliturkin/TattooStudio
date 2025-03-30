const accordionButtons = document.querySelectorAll('.accordion__button');
accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        btn.classList.toggle('open');
        if (btn.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});

new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    mobile: true
}).init();

