let moon1
let star1
let bgImage
let moonImages = []
let isPlanted = false;
let isPressed = false;
let circleX, circleY, circleRadius;
let isDragging = false;
let targetX, targetY

function preload() {
  //assets/frame_00_delay-0.04s.png
  for (let i = 0; i < 24; i++) {
    let idx = str(i).padStart(2, '0')
    let path = "assets/frame_" + idx + "_delay-0.04s.png"
    console.log(path)
    let img = loadImage(path)
    moonImages.push(img)
  }
  bgImage = loadImage('assets/background.jpg');
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  moon1 = new Moon()
  circleX = width / 2;
  circleY = height / 2;
  circleRadius = 15;
}

function draw() {
  background(0)
  // console.log(mouseX,mouseY)
  moon1.display()
  moon1.update()
  if (isPlanted && star1) {
    star1.display();
    if (isDragging) {
      star1.growAndDrag(targetX, targetY);
    }
  }
}
class Moon {
  constructor() {
    this.angle = 0
    this.centerX = width / 2
    this.centerY = height / 2
    this.r = 100
  }

  update() {
    this.angle += 0.006
    if (this.angle > 0 && this.angle < 2 * PI) {
      this.x = this.centerX + this.r * cos(this.angle - PI / 2)
      this.y = this.centerY + this.r * sin(this.angle - PI / 2)
    }
    if (this.angle >= 2 * PI) {
      this.angle = 0;
    }
    if (this.angle > 0 && this.angle < PI / 2) {
      fill(255, 255, 200);
      textSize(18);
      text("New moons remind us that", 125, 350);
      text("every end cradles the seed of a beginning.", 70, 372)
    }
    if (this.angle > PI / 2 && this.angle < PI) {
      fill(255, 255, 200);
      textSize(18);
      text("Every small step plants the seeds of transformation.", 40, 380);
    }
    if (this.angle > PI && this.angle < 3 * PI / 2) {
      fill(255, 255, 200);
      textSize(18);
      text("The full moon crowns the journey,", 110, 362);
      text("a beacon of all we've achieved.", 120, 384)
    }
    if (this.angle > 3 * PI / 2 && this.angle < 2 * PI) {
      fill(255, 255, 200);
      textSize(18);
      text("Even as the light fades, the essence endures", 65, 362);
      text("redefining strength through quiet reflection.", 76, 384)
    }
  }

  display() {
    if (this.angle > 0 && this.angle < 2 * PI) {
      let moonAngle = degrees(this.angle)
      moonAngle = moonAngle % 360
      push()
      translate(this.x, this.y)
      let idx = floor(map(moonAngle, 0, 360, 0, 24))
      console.log(idx)
      image(moonImages[idx], -50, -50, 100, 100)
      pop()
    }
  }

}

class Star {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 5;
    this.growthRate = 0.5;
  }
  update() {

  }
  display() {
    push();
    noStroke();
    fill(255, 255, 0, 150);
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
  growAndDrag(tx, ty) {
    this.size += this.growthRate;
    this.x = lerp(this.x, tx, 0.1);
    this.y = lerp(this.y, ty, 0.1);
  }

}

function mousePressed() {
  let distance = dist(circleX, circleY, mouseX, mouseY);
  if (distance < 50) {
    star1 = new Star(mouseX, mouseY);
    isPlanted = true;
    isDragging = true

  }
}

function checkMouse() {
  let distance = dist(width / 2, height / 2, mouseX, mouseY);
  if (distance < 100) {
    if (isPlanted && star1) {
      star1.display();
      if (isDragging) {
        star1.growAndDrag(targetX, targetY);
      }
    }
  }
}
function mouseDragged() {
  if (isDragging) {
    targetX = mouseX;
    targetY = mouseY;
  }
}

function mouseReleased() {
  isDragging = false;
}


