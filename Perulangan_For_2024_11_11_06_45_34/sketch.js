
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,0,255);
let jumlahEmote = 10;
let x = 100;
let y = height / 2;
textSize(40);
  for (let i = 0; i < jumlahEmote; i++) {
    text('✨', x , y);
    x += 40
  }
}