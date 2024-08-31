
document.addEventListener('DOMContentLoaded', function () {
    
    const button = document.querySelector('.btn');
    const closeButton = document.querySelector('.toast-container')
    
    button.addEventListener('click', function () {
        document.querySelector('.toast-container').classList.toggle('active');
        setTimeout(function () {
            if (document.querySelector('.toast-container').classList.contains('active')) {
                document.querySelector('.toast-container').classList.toggle('active');
            }
        }, 2000);
    });
    
    document.querySelector('.close-icon').addEventListener('click', () => {
        closeButton.classList.toggle('active');
    });

});