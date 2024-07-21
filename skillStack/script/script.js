let availableKeywords = [
    'HTML','CSS','JavaScript','Python','Java','C++','React','Angular','Node.js','SQL','Ruby','PHP',
    'Swift','Kotlin','R','Go','TypeScript','Django','Flask','Spring','Hibernate','Docker','Kubernetes',
    'AWS','Azure','GCP','TensorFlow','PyTorch','Machine Learning','Data Science'
];
let selectedValues = []
const inputBox = document.querySelector('.search-bar');
const resultBox = document.querySelector('.result-box');
const skillBox = document.querySelector('.skills-container');


// search bar 
inputBox.addEventListener('keyup', function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    };

    display(result);
    if (!result.length) resultBox.innerHTML = '';
});


// autocomplete 
function display(result) {
    let content = result.map((list) => {return `<li class="list-item" onclick=storeSkill(this)> ${list} </li>`});
    resultBox.innerHTML = `<ul class="autocolpmete-list"> ${content.join('')}</ul>`
};


// selected skills 
function storeSkill(skill) {
    selectedValues.push(skill.innerHTML)
    resultBox.innerHTML = '';
    inputBox.value = '';

    addSkill();
    saveData();
};

function addSkill() {
    let content = selectedValues.map((skill) => {
        return `<li class="skill-item">
                    <p>${skill}</p>
                    <i class='bx bx-x' onclick=removeSkill(this)></i>
                </li>`;
    });

    skillBox.innerHTML = content.join('');
    saveData();
};

function removeSkill(skill) {
    let valueToRemove = skill.previousElementSibling.innerHTML;
    selectedValues = selectedValues.filter(skill => skill !== valueToRemove);
    skill.parentElement.remove();

    saveData();
};


// local storage 
function saveData() { localStorage.setItem('skills', skillBox.innerHTML);};

function setData() {skillBox.innerHTML = localStorage.getItem('skills');};
setData();