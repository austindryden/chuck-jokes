//GET data
//wait til downloaded, convert to a usable format
//console.log it
//create DOM elements.
let CATEGORY = "all jokes";
let buttons = [];
let catsDomArr = [];
const jokeServerAddress = "https://api.chucknorris.io/jokes/random";
const jokeCategoryAddress = "https://api.chucknorris.io/jokes/categories";

function makeACatArray(){
        return fetch(jokeCategoryAddress)
                    .then(convertToJson)
                    .then(makeListItems)
                    .then(attachArrToContainer)
}

function attachArrToContainer(arr){
    arr.map(x => document.body.appendChild(x));
}

function extractJoke(dataObject){
    return dataObject.value;
}

function convertToJson (response) {
    return response.json();
}

function makeListItems(response){
    response.push("all jokes");
    let li = document.createElement("li");
    for (let i=0; i< response.length;i++){
        li.textContent = response[i];
        li.addEventListener('click', x=> CATEGORY = x.target.textContent)
        catsDomArr.push(li);
        li = document.createElement("li");
    }
    return catsDomArr;
}

function rendersJokesToPage(jokeString){
    const h1 = document.createElement('h1');
    h1.textContent = jokeString;
    document.body.appendChild(h1);
}

function fetchJokeAction(){
    if (CATEGORY == "all jokes"){
        fetch(jokeServerAddress)
            .then(convertToJson)
            .then(extractJoke)
            .then(rendersJokesToPage)
    } else {
        fetch(`${jokeServerAddress}?category=${CATEGORY}`)
            .then(convertToJson)
            .then(extractJoke)
            .then(rendersJokesToPage)
    }
}

function fetchOneJoke(){
    clear();
    fetchJokeAction();
}

function fetchMultipleJokes(){
    clear();
    for(let i =0; i<5;i++){
        fetchJokeAction();
    }
}

function clear(){
    document.body.textContent = "";
    attachArrToContainer(catsDomArr);
    attachArrToContainer(buttons);
}

function jokeButton(){
    const button = document.createElement("button");
    button.textContent = "heres a joke button";
    button.addEventListener("click",fetchOneJoke);
    document.body.appendChild(button);
    return button;
}

function jokeMultipleButton(){
    const button = document.createElement("button");
    button.textContent = "heres a 5 joke button";
    button.addEventListener("click",fetchMultipleJokes);
    document.body.appendChild(button);
    return button;
}

makeACatArray()
    .then(() => buttons[0] = jokeButton())
    .then(() => buttons[1] = jokeMultipleButton())