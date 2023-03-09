console.log("doshitan?");


let inputText = '';
let futureText = 'dositan?hanasikikoka?';
let inputTextElement = document.getElementById('input-text');
let futureTextElement = document.getElementById('future-text');


progress_update();
window.addEventListener('keydown', typing);

function typing(event) {
    console.log(event.key);
    let key = event.key;
    if (key == futureText[0]) {
        console.log('ok');
        inputText += key;
        futureText = futureText.slice(1);
    }
    progress_update();
}

function progress_update() {
    inputTextElement.textContent = inputText;
    futureTextElement.textContent = futureText;
}
