/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new ShadowDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

class ShadowDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.color = '#2B0033';
    this.size = 50;
    this.angle = 0;
    this.pulse = 0;
    this.move = 0;
    this.trail = [];
  }

  update() {
    this.angle += 0.05;
    this.pulse += 0.1;
    this.size = 50 + sin(this.pulse) * 10;
    this.move += 0.05;
    this.x += sin(this.move) * 2;
    this.trail.push({ x: this.x, y: this.y, size: this.size });
    if (this.trail.length > 20) {
      this.trail.shift();
    }
  }

  display() {
    push();

    for (let i = 0; i < this.trail.length; i++) {
      let position = this.trail[i];
      fill(43, 0, 51, 150 - i * 7);
      noStroke();
      ellipse(position.x, position.y, position.size - i);
    }

    translate(this.x, this.y);
    rotate(this.angle);
    fill(this.color);

    ellipse(0, 0, this.size, this.size);

    fill('#400050');
    ellipse(0, -this.size / 1.5, this.size / 2, this.size / 2);

    fill('#2B0033AA');
    let shoulderOffset = sin(this.angle * 2) * 20;
    ellipse(-this.size / 1.5, shoulderOffset, this.size / 4, this.size / 2);
    ellipse(this.size / 1.5, -shoulderOffset, this.size / 4, this.size / 2);

    fill(255); 
    let eyeSize = this.size / 8; 
    ellipse(-this.size / 4, -this.size / 4, eyeSize, eyeSize); 
    ellipse(this.size / 4, -this.size / 4, eyeSize, eyeSize);
  
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/
