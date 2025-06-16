function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke();
  print(mouseX, mouseY)
  let amt = map(mouseX, 0, width, 0, 1);
  let dayColor = color(0, 225, 255);
  let nightColor = color(34, 0, 94);
  let bgColor = lerpColor(dayColor, nightColor, amt);
  fill(255, 255, 255);
  for(let p = 0; p<500; p+=10){
    let size = random(3, 6)
    ellipse(random(800), random(800), size)
  }
  background(bgColor);
  fill('#F7BCBC');
  quad(50, 75, 50, 600, 750, 600, 750, 75);
  fill('#FDB3B3')
  strokeWeight(25);
  
  fill('#F5A5A5')
  for(let x = 50; x < 750; x += 50){
    for(let y = 600; y > 50; y -= 25){
      if(y%2==0){
        if(x<700){
          rect(x+25, y, 45, 20)
        }
      }
      else{rect(x, y, 45, 20);
      }
    }
  }
  for(let i = 600; i > 50; i -= 25){
    rect(50, i, 20, 20)
    rect(725, i, 20, 20)
  }
  fill('#FCFCFC');
  quad(50, 800, 50, 600, 750, 600, 750, 800 );
  fill('#F1CF61');
  rect(10, 600, 40, 200);
  rect(50, 700, 190, 100);
  rect(240, 600, 40, 200);
  rect(520, 600, 40, 200);
  rect(560, 700, 190, 100);
  rect(750, 600, 40, 200);
  fill('#F7E8B7');
  rect(5, 595, 50, 5);
  rect(235, 595, 50, 5);
  rect(515, 595, 50, 5);
  rect(745, 595, 50, 5);
  fill(0)
  strokeWeight(5);
  stroke(78)
  fill('#B0EFF8')
  rect(350, 450, 100);
  rect(350, 300, 100);
  rect(350, 150, 100);
  rect(125, 600, 75);
  rect(125, 450, 75);
  rect(125, 300, 75);
  rect(125, 150, 75);
  rect(600, 600, 75);
  rect(600, 450, 75);
  rect(600, 300, 75);
  rect(600, 150, 75);
  

  quad(340, 800, 280, 800, 280, 660, 340, 660);
}
