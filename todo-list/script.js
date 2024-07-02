
document.addEventListener('DOMContentLoaded', function () {
    
    let input = document.getElementById('inputBox');
    let button = document.getElementById('add-button');
    let todolist = document.getElementById('todolist');

    button.addEventListener('click', () => {
        if (input.value === '') {
            alert("Enter valid task...")
        } else {
            createTask();
        };

        input.value = '';
        saveData();
    })


    todolist.addEventListener('click', (element) => {
        if (element.target.tagName === 'LI') {
            element.target.classList.toggle('checked')
            saveData();
        }
        else if (element.target.id === 'delete') {
            removeTask(element);
            input.value = '';
            saveData();
        }
        else if (element.target.id === 'edit') {
            input.value = element.target.parentElement.parentElement.innerText;
            removeTask(element);
        };
    });


    function createTask() {
        let listTemplate = `${input.value}
                        <span>
                            <i id="edit" class='bx bxs-pencil f20' ></i>
                            <i id="delete" class='bx bx-x f20'></i>
                        </span>`
        let li = document.createElement('li');
        todolist.appendChild(li).innerHTML = listTemplate;
    };

    function removeTask(element) {
        element.target.parentElement.parentElement.remove();
    };

    function saveData() {
        try {
            localStorage.setItem('data', todolist.innerHTML);
        } catch (err) {
            console.error('Failed to save data to localStorage', err);
        };
    };

    function setData() {
        todolist.innerHTML = localStorage.getItem('data');
    };

    setData();


});