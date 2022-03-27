//
let walls = [];
let leftScreen;
let rightScreen;
let topScreen;
let bottomScreen;
let ray;
let particle;
let xOffset = 0;
let yOffset = 1;

function setup() {
  createCanvas(600, 600);
  //Create random walls across the canvas
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  //Create a border around the canvas
  leftScreen = new Boundary(0, 0, 0, height);
  rightScreen = new Boundary(width, 0, width, height);
  topScreen = new Boundary(0, 0, width, 0);
  bottomScreen = new Boundary(0, height, width, height);
  
  walls.push(leftScreen);
  walls.push(rightScreen);
  walls.push(topScreen);
  walls.push(bottomScreen);
  
  particle = new Particle();
}

function draw() {
  background(0);
  //Show the walls on screen
  for (let wall of walls) {
    wall.show();
  }
  
  leftScreen.show();
  rightScreen.show();
  topScreen.show();
  bottomScreen.show();
  
  //Have the particle interact with all the walls on screen
  particle.look(walls);
  
  
  //Control the particle by using the mouse
  //Comment out and un-comment the particle.update(noise); to change to random movement
  //particle.update(mouseX, mouseY);
  
  //Control the particle by noise to move randomly around the screen
  //Comment out and un-comment particle.update(mousex, mouseY); to change to mouse
  particle.update(noise(xOffset)*width, noise(yOffset)*height);
  xOffset += 0.005
  yOffset += 0.005
}