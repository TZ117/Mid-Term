// This program started out as modifications to the Distance 2D example,
// which I used the code from https://p5js.org/examples/math-distance-2d.html
// I have also incorporated the learning of map function,and loadSound.

var mySound;
let value = 0;
let max_distance;
var r =0; //red
var b = 255;//blue

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('portal.mp3');
}

function setup() {
    createCanvas(1000,1000);
  noStroke();
  max_distance = dist(0, 0, 200, 200);
 mySound.setVolume(0.5);
  mySound.play();
}

function draw() {
      fill (value,value,value,50);//delay fake
r=map (mouseX,0,600,0,255);//gradient
  b=map (mouseX,0,600,255,0);
   background(r,0,b,20); //opacity
  for (let i = 0; i <= width; i += 18) {//grid layout
    for (let j = 0; j <= height; j += 17) {
      let size = dist(i,j,mouseX, mouseY);
      size = (size / max_distance) * 44;
      ellipse(i, j, size, size);//grid shape
    }
  }
}
function mousePressed() {//change color
   
  if (value === 0) {
    value = 255;
     mySound.play();
  } else {
    value = 0;
       mySound.play();
    background(255, 255, 0);
    }
}
