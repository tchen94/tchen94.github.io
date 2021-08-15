// Creating the 16 x 16 grid //

// Grabbing the container
const container = document.getElementById('container');
const body = document.querySelector('body');

newSketch();

// Nested loop to make the 16x16 grid
function newSketch() {
    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
            const div = document.createElement('div');
            div.className = 'pixels';
            div.id = 'pixel' + (y + 1);
            container.appendChild(div);
        }
        const next = document.createElement('br');
        container.appendChild(next)
    }
}

// Create ul + li for buttons //
const ul = document.createElement('ul');
ul.className = 'buttons';
container.appendChild(ul);

const liOne = document.createElement('li');
const liTwo = document.createElement('li');
const liThree = document.createElement('li');


//  Default Hover Effect//

// Grabbing the pixels
const pixels = document.querySelectorAll('.pixels');

pixels.forEach(cell => cell.addEventListener('mouseover', (e) => {
    blackInk(cell);
}))

function blackInk(cell) {
    cell.style.backgroundColor = 'black';
}

// Clear Button //

const clrButton = document.createElement('button');
clrButton.id = 'clear-button';
clrButton.appendChild(document.createTextNode('Clear'));
liOne.appendChild(clrButton);
ul.appendChild(liOne);
body.appendChild(ul);

clrButton.addEventListener('click', clearSketch);

function clearSketch() {
    pixels.forEach(cell => cell.style.backgroundColor = 'white');
}

// Rainbow Mode //

const rgbButton = document.createElement('button');
rgbButton.id = 'color-button';
rgbButton.appendChild(document.createTextNode('Rainbow'));
liTwo.appendChild(rgbButton);
ul.appendChild(liTwo);
body.appendChild(ul);

rgbButton.addEventListener('click', colorIn);

function colorIn() {
    pixels.forEach(cell => cell.addEventListener('mouseover', (e) => {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }))
}

// Black Ink //

const blkButton = document.createElement('button');
blkButton.id = 'black-button';
blkButton.appendChild(document.createTextNode('Black'));
liThree.appendChild(blkButton);
ul.appendChild(liThree);
body.appendChild(ul);

blkButton.addEventListener('click', blackFill);

function blackFill() {
    pixels.forEach(cell => cell.addEventListener('mouseover', (e) => {
        cell.style.backgroundColor = `black`;
    }))
}





