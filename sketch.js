// import Ball from "./Ball.js";

let b;
let p
let bricks = []
let c1,c2;

function setup(){
    createCanvas(1000,1000);
    b = new Ball();
    p = new Paddle();

    for (let index = 0; index < 10; index++) {
      bricks.push(new Brick(100,30));
    }
    
    


}

function draw(){ // runs at 60gps

    gameBackground();



    b.update(); 
    b.display();

    p.update();
    p.display();
    
    for (let index = 0; index < bricks.length; index++) {
      bricks[index].display();
      
    }


}



function gameBackground(){
  const topColor = color(28, 82, 232);
  const bottomColor = color(173, 3, 145);

  for (let i = 0; i < height; i++) {
    
    const lineColor = lerpColor(topColor,bottomColor, i/height)
    stroke(lineColor)
    line(0,i,width,i);
    
  }


}











