
let newX = 0;
let newY = 0;
let startX = 0;
let startY = 0;


const card = document.getElementById('card');

card.addEventListener('mousedown', mouseDown)

function mouseDown(e) {
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) + 'px';
    card.style.left = (card.offsetLeft - newX) + 'px'

}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove)
};