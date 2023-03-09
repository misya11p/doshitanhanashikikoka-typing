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
        inputText += key;
        futureText = futureText.slice(1);
    } else if (key == 'c') {
        if (futureText[0] == 's' || (futureText[0] == 'k' & futureText[1] != 'i')) {
            inputText += key;
            futureText = futureText.slice(1);
        }
    } else if (key == 'h') {
        if (inputText.slice(-1)[0] == 's') {
            inputText += key;
        }
    } else if (key == 'n') {
        if (inputText.slice(-1)[0] == 'n' & inputText.slice(-2)[0] != 'n' & inputText.slice(-2)[0] != 'x') {
            inputText += key;
        }
    } else if (key == 'x') {
        if (futureText[0] == 'n') {
            inputText += key;
        }
    }
    progress_update();
}

function progress_update() {
    inputTextElement.textContent = inputText;
    futureTextElement.textContent = futureText;
}
