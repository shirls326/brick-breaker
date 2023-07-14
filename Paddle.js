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
  