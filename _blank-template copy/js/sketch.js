let moonImages = []

function preload() {
  //assets/frame_00_delay-0.04s.png
  for (let i = 0; i < 25; i++) {
    let idx = str(i).padStart(2, '0')
    let path = "assets/frame_" + idx + "_delay-0.04s.png"
    // console.log(path)
    let img = loadImage(path)
    moonImages.push(img)


  }
}


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");

}

function draw() {
  background(220);
  drawMoon(width / 2, height / 2, 100, degrees())
}


function drawMoon(x, y, size, moonAngle) {
  moonAngle = moonAngle % 360
  push()
  translate(x, y)
  let idx = int(map(moonAngle, 0, 360, 0, 24))
  image(moonImages[idx], -size / 2, -size / 2, size, size)
  pop()
}