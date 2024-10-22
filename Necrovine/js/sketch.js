let x = 0;
let y = 0;

function setup() {
    let cnv=createCanvas(800,500);
    cnv.parent("p5-canvas-container")
  
  background(28, 28, 28);

  let rectWidth = 40;  
  let rectHeight = 40;
  
  for (let y = 0; y < height / 3; y += rectHeight) { 
    for (let x = 0; x < width; x += rectWidth) {
      fill(43, 58, 66);
      rect(x, y, rectWidth, rectHeight);  
      fill(152, 255, 152);
      rect(x + 5, y + 5, rectWidth - 10, rectHeight - 10); 
      fill(139, 0, 0);
      rect(x + 10, y + 10, rectWidth - 20, rectHeight - 20); 

      let randomNumber = random(0, 100);
      if (randomNumber < 65) {
        fill(138, 43, 226);
        circle(x + rectWidth / 2, y + rectHeight / 2, 8); 
      }
    }
  }
  noFill();
  stroke(75, 78, 84);
  strokeWeight(3);

  beginShape();
  vertex(100,100);
  bezierVertex(260, 220, 540, 220, 780, 60);
  endShape();

  beginShape();
  vertex(260, 60);
  bezierVertex(360, 300, 580, 250, 740, 140);
  endShape();

  beginShape();
  vertex(20, 180);
  bezierVertex(160, 250, 240, 275, 380, 20);
  endShape();
  
  beginShape();
  vertex(260, 140); 
  bezierVertex(310, 230, 500, 220, 540, 100);
  endShape();

  stroke(0, 100, 0);
  strokeWeight(5);
  fill(180, 150, 120, 80);

  for (let i = 0; i < 4; i++) {
    let y = 120 + i * 100; 
    ellipse(400, y, 250, 80);
  }

  for (let i = 0; i < 2; i++) {
    let x = [275, 525]; 
    line(x[i], 120, x[i], 420);
  }

  for (let i = 0; i < 4; i++) {
    let y1 = [80, 120, 430, 390]; 
    let y2 = [200, 240, 370, 330];
    line(0, y1[i], 275, y2[i]);
  }

  for (let i = 0; i < 4; i++) {
    let y1 = [80, 120, 430, 390]; 
    let y2 = [200, 240, 370, 330];
    line(800, y1[i], 525, y2[i]); 
  }

  fill(180, 150, 120, 100); 

  let xCoords = [275, 525, 525, 275]; 
  let yCoords = [120, 120, 420, 420]; 

  beginShape();
  strokeWeight(0)
  for (let i = 0; i < 4; i++) {
    vertex(xCoords[i], yCoords[i]);
  }
  endShape();
}

function draw() {

  
  fill(105, 130, 140)
 strokeWeight(0)
  triangle(364, 160, 436, 160, 400, 200)
 arc(400,143, 80, 80, 150, PI + QUARTER_PI,OPEN)
  
  strokeWeight(1)
 noFill()
  stroke(255)
   beginShape(); 
   vertex(370, 125); 
   bezierVertex(350, 50, 300, 150, 320, 180); 
   endShape(); 
  
   beginShape(); 
   vertex(430, 125); 
   bezierVertex(450, 50, 500, 150, 478, 180); 
   endShape();
  
  noStroke()
   fill(105, 130, 140)
  triangle(400,200,360,260,440,260)
  rect(360,260,80,80,4,4,4,4)
  // arc(435,222, 75,75, 670, PI + QUARTER_PI, OPEN)
  // arc(368,225, 75, 75, 670, PI + QUARTER_PI, OPEN)
  
}