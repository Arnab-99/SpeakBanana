var btnTranslate = document.body.querySelector("#translate-btn");
var txtInput = document.querySelector("#user-input");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/valyrian.json";

function getURL(input){
    return serverURL + "?text=" + input;
}

function errorHandler(error){
    console.log("error occured "+error);
    alert("Something went wrong with the server! Please Try Again Later")
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getURL(inputText))
    .then(response => response.json() )
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);
