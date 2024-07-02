document.addEventListener('DOMContentLoaded', function () {
    
    let navTrigger = document.querySelector('.nav-actions');
    
    function toggleMenu() {
        document.querySelector('.open-menu').classList.toggle('visible');
        document.querySelector('.close-menu').classList.toggle('visible');
    };
    
    navTrigger.addEventListener('click', function () {
        toggleMenu();
        document.querySelector('.nav-list').classList.toggle('active');
    });

});

