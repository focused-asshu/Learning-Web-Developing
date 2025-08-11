const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
const retryButton = document.querySelector(".retry-button");

const boxSize = 20;
let score = 0;
let snake = [];
let direction = "RIGHT";
let food = {};
let gameInterval;

function initializeGame() {
    score = 0;
    scoreDisplay.innerText = score;
    snake = [{ x: boxSize * 5, y: boxSize * 5 }];
    direction = "RIGHT";
    food = generateFood();
    clearInterval(gameInterval); // Clear any existing interval
    gameInterval = setInterval(gameLoop, 100); // Game updates every 100ms
    retryButton.style.display = "none"; // Hide retry button at start
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
        y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize
    };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);

    // Draw snake
    ctx.fillStyle = "lime";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
        // Add a border for better visibility
        ctx.strokeStyle = "darkgreen";
        ctx.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize);
    }
}

function update() {
    // Get head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Update head position based on direction
    if (direction === "LEFT") snakeX -= boxSize;
    if (direction === "UP") snakeY -= boxSize;
    if (direction === "RIGHT") snakeX += boxSize;
    if (direction === "DOWN") snakeY += boxSize;

    // Add new head to snake
    let newHead = { x: snakeX, y: snakeY };

    // Check for collisions
    if (
        snakeX < 0 || snakeX >= canvas.width ||
        snakeY < 0 || snakeY >= canvas.height ||
        checkCollision(newHead, snake)
    ) {
        gameOver();
        return;
    }

    snake.unshift(newHead); // Add new head to the front

    // Check if snake ate food
    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        scoreDisplay.innerText = score;
        food = generateFood();
    }
        if (score === 1) {
        window.location.href = "bday.html"; // Redirect to the birthday site
    }

    else {
        snake.pop(); // Remove tail if no food eaten
    }
}

function checkCollision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

function gameOver() {
    clearInterval(gameInterval);
    alert("Game Over! Your score: " + score);
    retryButton.style.display = "block"; // Show retry button
}

function gameLoop() {
    update();
    draw();
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
});

initializeGame(); // Start the game on page load