const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');


let result = 0;
let hitPosition;
let currenTime = 60;
let timerId = null;  // thanks to 'timerId' we can stop it.

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    const randomNumber = Math.floor(Math.random() * 9) + 1;
    let randomSquare = squares[randomNumber];
    // console.log(randomSquare);  OUTPUT : <div id="6" class="square"> , <div id="3" class="square"> , ....

    // console.log(randomSquare);
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
    console.log(hitPosition);
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id === hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currenTime--;
    timeLeft.textContent = currenTime;

    if(currenTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert(`Game Over! Your final score is :  ${result}`);
    }
}

let countDownTimerId = setInterval(countDown,1000);