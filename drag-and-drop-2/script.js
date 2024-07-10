
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

// controlling opacity of currently selected or dragging element 
draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
});

// adding the dragging elem to target container 
containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable)
    });
});