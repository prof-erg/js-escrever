function setup() {
    createCanvas(400, 400);
     background(255);
  }
  
  function draw() {
   fill("red")
    if(mouseIsPressed){circle(mouseX,mouseY,10)}
  }