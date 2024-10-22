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
// console.log(mouseX,mouseY) 
  
  fill(105, 130, 140)
  stroke(0, 255, 0);
  strokeWeight(3);
  
  ellipse(400, 250, 60, 80); 
  
  strokeWeight(2);
  line(390, 210, 370, 180);  
  line(410, 210, 430, 180); 

  fill(255, 0, 0);
  noStroke();
  circle(370, 180, 10);  
  circle(430, 180, 10); 

  noFill();
  stroke(0, 255, 0);
  strokeWeight(3);
  beginShape();
  curveVertex(370, 300);
  curveVertex(380, 320);
  curveVertex(420, 320);
  curveVertex(430, 300);
  endShape();
  
  line(370, 320, 350, 360); 
  line(430, 320, 450, 360); 
  
  line(390, 350, 380, 400); 
  line(410, 350, 420, 400); 
  

  
    
  
  
                 

  
  
  
  
  
  
  
  
  
  
  
}