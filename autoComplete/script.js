
const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');
let availableKeywords = [];

const fetchData = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');    
        if (!response.ok) { throw new Error(`Bad response, Error status : ${response.status}`) };

        let countries = await response.json();
        countries.forEach((country) => {
            availableKeywords.push(country.name.common);
        });

    } catch (e) {
        console.error("Error fetching data :", e)
    };
};

fetchData()


inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });      
    };
    display(result);
    if (!result.length) { resultBox.innerHTML = '';};
};

function display(result) {
    const content = result.map((list) => {
        return `<li class="result-list-item" onclick=selectInput(this)> ${list} </li>`;
    })
    resultBox.innerHTML = `<ul class="result-container"> ${content.join('')} </ul>`;
};

function selectInput(clickedValue) {
    inputBox.value = clickedValue.innerHTML;
    resultBox.innerHTML = '';
};