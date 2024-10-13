const gameContainer = document.getElementById("game-container");
const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");
const startMessage = document.getElementById("start-message");
const gameOverMessage = document.getElementById("game-over-message");

let gameInterval;
let isGameRunning = false;
let score = 0;
let ballSpeedX = 6;
let ballSpeedY = 6;
let ballX = 400;
let ballY = 300;
let paddleX = 340;

document.addEventListener("keydown", startGame);

function startGame() {
    if (!isGameRunning) {
        isGameRunning = true;
        score = 0;
        ballX = 400;
        ballY = 300;
        ballSpeedX = 6;
        ballSpeedY = 6;
        paddleX = 340;
        startMessage.style.display = "none";
        gameOverMessage.style.display = "none";
        gameInterval = setInterval(updateGame, 20);
    }

    document.addEventListener("mousemove", movePaddle);
}

function updateGame() {
    // Mover la pelota
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Rebote contra los bordes
    if (ballX <= 0 || ballX >= 780) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY <= 0) {
        ballSpeedY = -ballSpeedY;
        score++;
        scoreDisplay.textContent = `Puntos: ${score}`;

        // Incrementar la velocidad en cada rebote superior
        ballSpeedX *= 1.05;
        ballSpeedY *= 1.05;
    }


    // Colisión con la paleta
    if (ballY >= 552 && ballX >= paddleX && ballX <= paddleX + 120) {
        ballSpeedY = -ballSpeedY;
    }

    // Si la pelota toca la parte inferior, termina el juego
    if (ballY > 580) {
        gameOver();
    }

    // Actualizar posiciones de la pelota y la paleta
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
    paddle.style.left = paddleX + "px";
}


function movePaddle(event) {
    const containerRect = gameContainer.getBoundingClientRect();
    paddleX = event.clientX - containerRect.left - 60;

    // Limitar el movimiento de la paleta dentro de los bordes del contenedor
    if (paddleX < 0) {
        paddleX = 0;
    }
    if (paddleX > 680) {
        paddleX = 680;
    }
}

function gameOver() {
    clearInterval(gameInterval);
    isGameRunning = false;
    gameOverMessage.style.display = "block";
    document.removeEventListener("mousemove", movePaddle);
    document.addEventListener("keydown", startGame);
}
