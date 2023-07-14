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

function draw(){

    gameBackground();



    

    // //background
    // let gradient = drawingContext.createLinearGradient(
    //   width, height, width/2 + 200, height/2 + 200
    // );

    // gradient.addColorStop(0,color(31, 56, 222,100))
    // gradient.addColorStop(0,color(222, 31, 190,100))

    // drawingContext.fillStyle = gradient;
    // rect(0,0,width,height)
    




    




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


class Game{



}









class Paddle{

  constructor(){
    this.position = new createVector(movedX, width - 100);
    this.velocity = new createVector(2, 0);

  }

  update() {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }


  display() {
    // Display circle at x position
    noStroke();
    fill(255);
    rect(this.position.x, this.position.y, 200, 30);
  }



}

class Brick{
  

  constructor(w, h){
    this.position = new createVector(random(0,width), random(0,height - 200));
    this._w = w;
    this._h = h;

  }



  get w(){
    return this.w;
  }

  get h(){
    return this.h;
  }

  set w(value) {
    this._w = value;
  }

  set h(value){
    this._h = value;
  }

  display(){
    noStroke();
    fill(94, 126, 255,100);
    rect(this.position.x,this.position.y, this._w, this._h);
  }
 


}