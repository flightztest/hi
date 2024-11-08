let randomNumber;
let attemptsLeft = 10;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // 隨機生成 1 到 100 之間的數字
    attemptsLeft = 10;
    document.getElementById("remainingAttempts").textContent = attemptsLeft;
    document.getElementById("message").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
}

function checkGuess() {
    const userInput = document.getElementById("userInput").value;
    const messageElement = document.getElementById("message");
    const remainingAttemptsElement = document.getElementById("remainingAttempts");

    if (userInput === "") {
        messageElement.textContent = "請輸入一個數字！";
        return;
    }

    const userGuess = parseInt(userInput);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "請輸入 1 到 100 之間的數字。";
        return;
    }

    attemptsLeft--;
    remainingAttemptsElement.textContent = attemptsLeft;

    if (userGuess === randomNumber) {
        messageElement.textContent = "恭喜你，猜對了！";
        document.getElementById("restartBtn").style.display = "inline-block";
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "太小了，試試更大的數字！";
    } else {
        messageElement.textContent = "太大了，試試更小的數字！";
    }

    if (attemptsLeft === 0) {
        messageElement.textContent = "遊戲結束！正確答案是 " + randomNumber;
        document.getElementById("restartBtn").style.display = "inline-block";
    }
}

function restartGame() {
    startGame();
    document.getElementById("userInput").value = "";
}

startGame(); // 開始遊戲
