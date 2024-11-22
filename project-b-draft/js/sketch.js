let moon1

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  moon1 = new Moon()

}

function draw() {
  background(13, 13, 60);
  // console.log(mouseX,mouseY)
  moon1.display()
  moon1.update()
}

class Moon {
  constructor() {
    this.angle = -PI / 2
    this.centerX = width / 2
    this.centerY = height / 2
    this.r = 100
  }

  update() {
    if (this.angle < 0) {
      this.angle += 0.006
      this.x = this.centerX + this.r * cos(this.angle)
      this.y = this.centerY + this.r * sin(this.angle)
      fill(255, 255, 200);
      textSize(18);
      text("New moons remind us that", 125, 350);
      text("every end cradles the seed of a beginning.", 70, 372)
    }
  }

  display() {
    push()
    translate(this.x, this.y)
    //croissant
    fill("#D3D3D3");
    noStroke();
    circle(3, 0, 60)
    //ombre lune
    fill("#0D0D0D");
    noStroke();
    circle(0, 0, 59);

    pop()
  }
}