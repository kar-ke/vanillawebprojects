
const titles = document.querySelectorAll('.accordion-item');

titles.forEach((title) => {
    title.addEventListener('click', function () {
        titles.forEach((item) => {
            if (item !== this && item.classList.contains('active')) {
                item.classList.remove('active');
            };
        });
        title.classList.toggle('active');
    });
});