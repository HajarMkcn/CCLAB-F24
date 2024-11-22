let obstacle1;
let myObstacles = []
let fly1

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");

  obstacle1 = new Obstacle()
  for (let i = 0; i < 10; i++) {
    myObstacles.push(new Obstacle())
  }
  fly1 = new Fly()
}

function draw() {
  background(220);
  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].update()
    myObstacles[i].display()
    fly1.update()
    fly1.display()
  }
}

class Obstacle {
  constructor() {
    this.x = random(width, 2 * width)
    this.y = random(0, height)
    this.speedX = -1
    this.size = random(20, 60)
  }

  update() {
    this.x += this.speedX
    if (this.x < -this.size) {
      this.x = width
      this.y = random(0, height)
    }
  }
  display() {
    push()
    translate(this.x, this.y)
    fill(0)
    rect(0, 0, this.size, this.size)
    pop()
  }
  checkCollision(otherX,otherY)
  if(otherX>this.x && otherX<this.x+6 && otherY>this.y && otherY<this.y+6)
}

class Fly {
  constructor() {
    this.x = width / 3
    this.y = height / 2
    this.speedY = 0
  }

  update() {
    this.speedY += 0.001
    this.y += this.speedY
    if (this.y >= height - 6) {
      this.y = height - 6
    }
    if (keyIsPressed==true&&key=="z"){
      this.speedY-=0.0025
    }
    if(this.y>=height-6){
      this.y=heigh
    }
  }

  display() {
    push()
    translate(this.x, this.y)
    circle(0, 0, 10)
    pop()
  }
}