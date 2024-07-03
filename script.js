const dino = document.getElementById('dino');

const obstacle = document.getElementById('obstacle');


const game = document.getElementById('game').addEventListener('click',function jump() { 
    if(dino.classList != 'animate') {
         dino.classList.add('animate');
    };
    setTimeout(function() {
        dino.classList.remove('animate');
    },500);
});