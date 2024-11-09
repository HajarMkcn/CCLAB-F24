// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let particles = [];

let clicked = false;
let clickCount = 0;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(30, 30, 45);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    if (clicked == true) {
      p.fade();
    }
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 50;
    this.hueRed = random(255);
    this.hueBlue = random(255);
    this.hueGreen = random(255);
    this.speedX = random(-0.5, 0.5);
    this.speedY = random(-0.5, -0.8);
    this.xNoise = 0;
    this.xN = 0;
  }
  // methods (functions): particle's behaviors
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.xNoise += 0.01;
    this.xN = noise(this.xNoise) * 80;

  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    fill(this.hueRed, this.hueGreen, this.hueBlue, 100);
    noStroke();
    circle(this.xN, 0, this.dia, this.dia);
    arc(this.xN, 0, this.dia - 10, this.dia - 10, 0, 0.25 + PI / 2, OPEN);

    pop();

  }
  fade() {
    this.dia -= 0.6;
    if (this.dia < 0) this.dia = 0;
  }

}

function mouseClicked() {
  clickCount += 1;
  if (clickCount % 2 == 1) {
    clicked = true;
  } else {
    clicked = false;
  }
}
