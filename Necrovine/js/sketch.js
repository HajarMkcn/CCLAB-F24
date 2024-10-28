let angle=0;
let x = 0;
let y = 0;
let z=0;
let w=0;
let xOffset = 0;

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
console.log(mouseX,mouseY) 
  
let floatOffset = sin(angle) * 10; 
  angle += 0.05; 
  push(); 
  translate(0, floatOffset); 
  drawCreature(); 
  pop(); 
  
//   let x = noise(xOffset) * width; 
//   let y = noise(xOffset + 100) * height; // Using an offset to get a different y value

//   ellipse(x, y, 1, 1); // Draw an ellipse that moves smoothly
  
//   // Increment xOffset for new noise values
//   xOffset += 0.002;
  
  
  
}

function drawCreature() {
  
  stroke(0, 255, 0);
  strokeWeight(3);
  ellipse(400, 220, 50, 60); 
  
  strokeWeight(2);
  line(395, 190, 370, 150); 
  line(405, 190, 430, 150); 

  fill(255, 0, 0);
  noStroke();
  circle(370, 150, 10);  
  circle(430, 150, 10); 

  noFill();
  stroke(0, 255, 0);
  strokeWeight(3);
 push();
  translate(0, 25); 
  beginShape();
  curveVertex(370, 280);
  curveVertex(380, 320);  
  curveVertex(420, 320);  
  curveVertex(430, 280);
  endShape();
pop();
  
  beginShape();
  curveVertex(400, 250);  
  curveVertex(385, 250);  
  curveVertex(375, 295);  
  curveVertex(380, 345);  
  curveVertex(400, 345);  
endShape();

  push();
  translate(30, 0);
beginShape();
  curveVertex(370, 250);  
  curveVertex(385, 250); 
  curveVertex(395, 295); 
  curveVertex(390, 345); 
  curveVertex(370, 345);  
endShape();
  pop();
  
  push();
  translate(0, -50);
  line(378, 320, 350, 360); 
  line(422, 320, 450, 360); 
  pop();
  
  line(390, 350, 375, 420);
  line(410, 350, 425, 420);  
  
  
}

function mousePressed() {
  if (mouseY > 0 && mouseY < 200) {
    console.log("Mouse pressed in the specified range");
    circle(random(255), random(255), random(255)); 
  }}

