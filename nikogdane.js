let random_btn = document.getElementById("random_btn");
let next_btn = document.getElementById("next_btn");
let string_container = document.getElementById("string_container");
let string = document.getElementById("string");
let xmlHttp = new XMLHttpRequest();
let strings = [];
xmlHttp.open("GET", "strings.txt", true);
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === XMLHttpRequest.DONE && xmlHttp.status === 200) 
    {
        document.getElementById("loading").remove(); 
        strings = xmlHttp.responseText.split('\n');
    }; 
};
xmlHttp.send();
let index = 0;


function setText(text) {
    string_container.classList.add('pre-animation');
    string.innerHTML = text;
    setTimeout(function() { string_container.classList.remove('pre-animation'); }, 100);
}

function randomButtonClick() {
    let rand = strings[Math.floor(Math.random() * (strings.length - 1))];
    setText(rand);
}

function nextButtonClick() {
    if (index >= strings.length - 1) {
        index = 0;
    }
    setText(strings[index++]);
}

next_btn.addEventListener("click", nextButtonClick);
random_btn.addEventListener("click", randomButtonClick);
