let moon1
let star1
let moonImages = []
let isPlanted = false;
let circleX, circleY, circleRadius;
let targetX, targetY
let xStar = 250
let yStar = 200
let bigR = 80
let smallR = 10
let starVisible = false;
let starFollowsMouse = false;
let isGrowing = false
let growSpeed = 0.5
let drawIt = false
let confettis = [];
let numConfetti = 1;
let confettiTrigger = false
let maxConfetti = 100
let confettiCount = 0;


function preload() {
  for (let i = 0; i < 24; i++) {
    let idx = str(i).padStart(2, '0')
    let path = "assets/frame_" + idx + "_delay-0.04s.png"
    console.log(path)
    let img = loadImage(path)
    moonImages.push(img)
  }
}

function setup() {
  let canvas = createCanvas(1200, 600);
  canvas.parent("p5-canvas-container");
  moon1 = new Moon()
  circleX = width / 2;
  circleY = height / 2;
  circleRadius = 15;
  for (let i = 0; i < numConfetti; i++) {
    confettis.push(new Confetti(width / 2, height / 2))
  }
}

function draw() {
  background(0)
  moon1.display()
  moon1.update()
  if (isPlanted && star1) {
    star1.display();
  }
  let cx = width / 2;
  let cy = height / 2;
  let cr = 120;
  let distance = dist(mouseX, mouseY, cx, cy);
  if (distance <= 150) {
    if (starVisible) {
      if (starFollowsMouse) {
        xStar = mouseX;
        yStar = mouseY;
      }
      if (drawIt) {
        realStar(xStar, yStar, bigR, smallR);
      }
    }
  }
  if (isGrowing) {
    bigR += growSpeed;
    smallR += growSpeed;
    if (bigR >= cr) {
      isGrowing = false;
      drawIt = false;
      confettiTrigger = true;
    }
  }
  // CONFETTIIIIIIS
  if (confettiTrigger && confettiCount < maxConfetti) {
    for (let i = 0; i < 10; i++) {
      if (confettiCount < maxConfetti) {
        confettis.push(new Confetti(mouseX, mouseY));
        confettiCount++;
      }
    }
    if (confettiCount >= maxConfetti) {
      confettiTrigger = false;
    }
  }

  for (let i = 0; i < confettis.length; i++) {
    confettis[i].update();
    confettis[i].display();
  }

  for (let i = confettis.length - 1; i >= 0; i--) {
    if (!confettis[i].onCanvas) {
      confettis.splice(i, 1);
    }
  }
}


class Moon {
  constructor() {
    this.angle = 0;
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.r = 200;
  }

  update() {
    this.angle += 0.0025;
    if (this.angle > 0 && this.angle < 2 * PI) {
      this.x = this.centerX + this.r * cos(this.angle - PI / 2);
      this.y = this.centerY + this.r * sin(this.angle - PI / 2);
    }
    if (this.angle >= 2 * PI) {
      this.angle = 0;
    }

    if (this.angle > 0 && this.angle < PI / 2) {
      fill(255, 255, 200);
      textSize(24);
      text("New moons remind us that every end cradles the seed of a beginning.", 222, 580);
    }
    if (this.angle > PI / 2 && this.angle < PI) {
      fill(255, 255, 200);
      textSize(24);
      text("Every small step plants the seeds of transformation.", 318, 580);
    }
    if (this.angle > PI && this.angle < 3 * PI / 2) {
      fill(255, 255, 200);
      textSize(24);
      text("The full moon crowns the journey, a beacon of all we've achieved.", 252, 580);
    }
    if (this.angle > 3 * PI / 2 && this.angle < 2 * PI) {
      fill(255, 255, 200);
      textSize(24);
      text("Even as the light fades, the essence endures redefining strength through quiet reflection.", 120, 580);
    }
  }

  display() {
    if (this.angle > 0 && this.angle < 2 * PI) {
      let moonAngle = degrees(this.angle);
      moonAngle = moonAngle % 360;
      push();
      translate(this.x, this.y);
      let idx = floor(map(moonAngle, 0, 360, 0, 24));
      console.log(idx);
      image(moonImages[idx], -75, -75, 125, 125);
      pop();
    }
  }
}


class Star {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
  }
  update() {

  }
  display() {
    push();
    noStroke();
    fill(255, 223, 128);
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }

}

function realStar(xStar, yStar, bigR, smallR) {
  for (let i = 0; i < 30; i++) {
    drawRStar(xStar, yStar, bigR, smallR, 1 - i * 0.03);
  }
}
function drawRStar(xStar, yStar, bigR, smallR, s) {

  fill(255, 204, 0, 10);
  noStroke();
  push()
  translate(xStar, yStar)
  scale(s * 0.5)
  beginShape()
  for (let i = 0; i < 4; i++) {
    let angle1 = 360 / 4 * i
    let x1 = cos(radians(angle1)) * bigR
    let y1 = sin(radians(angle1)) * bigR
    vertex(x1, y1)
    let angle2 = 360 / 4 * i + 50
    let x2 = cos(radians(angle2)) * smallR
    let y2 = sin(radians(angle2)) * smallR
    vertex(x2, y2)
  }
  endShape()
  circle(0, 0, smallR * 4.8)
  pop()

}

function keyPressed() {
  if (key === 'a') {
    star1 = new Star(mouseX, mouseY);
    isPlanted = true;
    drawIt = true
  }
  if (key === 'z') {
    isGrowing = true
  }
}

function mouseClicked() {
  isPlanted = false;
  starVisible = true;
  starFollowsMouse = true;
}

class Confetti {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);

    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);
    this.onCanvas = true;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += 0.1;
    this.speedX *= 0.99;
    if (this.y > height) {
      this.onCanvas = false;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    fill(random(200, 255));
    noStroke();
    circle(0, 0, this.size);

    pop();
  }
}
