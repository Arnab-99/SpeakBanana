var btnTranslate = document.body.querySelector("#translate-btn");
var txtInput = document.querySelector("#user-input");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getURL(input){
    return serverURL + "?text=" + input;
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getURL(inputText))
    .then(response => response.json() )
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }) 
}

btnTranslate.addEventListener("click",clickHandler);
