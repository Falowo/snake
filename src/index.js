import './style.css';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const gridElem = 40; // 20 elem * 20
const snake = [
    [9, 9],
    [8, 9],
    [7, 9]
];

const drawMap = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 800);
};
const drawSnake = () => {
    ctx.fillStyle = 'green';
    for (let body of snake) {
        ctx.fillRect(body[0] * gridElem, body[1] * gridElem, gridElem, gridElem);
    }
};

drawMap();
drawSnake();
