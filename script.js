// Set up canvas and image
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const spriteSelector = document.getElementById('spriteSelector');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// Set up player image character
const playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
let staggerFrames = 5;
let playerState = 'idle';
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },    
    {
        name: 'run',
        frames: 9,
    },    
    {
        name: 'dizzy',
        frames: 11,
    },    
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'rolling',
        frames: 7,
    },        
    {
        name: 'nurut',
        frames: 7,
    },    
    {
        name: 'tidur',
        frames: 12,
    },    
    {
        name: 'seneng',
        frames: 4,
    },    
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});        
    }
    spriteAnimations[state.name] = frames;
})


// Make function to animate
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    console.log(position)
    let frameX = position * spriteWidth;    
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);    

    gameFrame++;
    requestAnimationFrame(animate);
};

spriteSelector.addEventListener('change', function (e) {
    playerState = e.target.value;
})

animate();