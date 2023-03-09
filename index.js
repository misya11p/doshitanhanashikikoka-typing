console.log("コンソールなんて開いてどしたん?話聞こか？");

let isPlaying = false;
let inputText
let futureText
let inputTextElement = document.getElementById('input-text');
let futureTextElement = document.getElementById('future-text');
const COUNT_DOWN_SEC = 3;
let countDownTimerId;
let timeElement = document.getElementById('time');
let time;
let timerId;
let timeText;
let resultElement = document.getElementById('result-text');
let tweetButtonElement = document.getElementById('tweet-button');

window.addEventListener('keydown', game);


function progress_update() {
    inputTextElement.textContent = inputText;
    futureTextElement.textContent = futureText;
}

function count_down() {
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    time = 0;
    let count = COUNT_DOWN_SEC;
    let countDownElement = document.getElementById('count-down');
    countDownElement.textContent = count;
    countDownTimerId = setInterval(() => {
        count--;
        if (count == 0) {
            clearInterval(countDownTimerId);
            start();
        }
        countDownElement.textContent = count;
    }, 1000);
}

function start() {
    isPlaying = true;
    inputText = '';
    futureText = 'dositan?hanasikikoka?';
    progress_update();
    timer();
}

function timer() {
    timerId = setInterval(() => {
        time += 10;
        timeText = (time / 1000).toFixed(2) + '秒';
        timeElement.textContent = timeText;
    }, 10)
}

function game(event) {
    if (isPlaying) {
        typing(event.key);
        if (futureText.length == 0) {
            console.log('クリア');
            isPlaying = false;
            clearInterval(timerId);
            result();
        }
    }
}

function typing(key) {
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

function result() {
    resultElement.textContent = '記録：' + timeText;
    let tweetText = 'どしたん？話聞こか？を' + timeText + 'でタイピングしました';
    tweetButtonElement.setAttribute("href","https://twitter.com/intent/tweet?text=" + tweetText + "&hashtags=ドシハナRTA" + "&url=https://rta.com");
}