const dino = document.getElementById('dino');

const obstacle = document.getElementById('obstacle');

const game = document.getElementById('game');

// jump by mouse/finger click on game box
game.addEventListener('click', function () {
    jump();
});

// jump by clicking on Spacebar key
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

// jump function add and remove the animate class to dino 
function jump() {
    if (dino.classList != 'animate') {
        dino.classList.add('animate');
    };
    setTimeout(function () {
        dino.classList.remove('animate');
    }, 500);
}

const gameoverCheck = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (obstacleLeft < 60 && obstacleLeft > 0 && dinoTop >= 280) {
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        alert('you LOSE');
        clearInterval(gameoverCheck);
    }
}, 10);



