class Ball{

    constructor() {
      this.radius = 
      this.position = new createVector(random(100), random(100));
      this.velocity = new createVector(random(-1,10), random(-1,10));
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
      fill(175);
      ellipse(this.position.x, this.position.y, 48, 48);
  }
  
  
  }