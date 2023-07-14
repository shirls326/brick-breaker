
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