class Boundary {
 constructor(x1, y1, x2, y2) {
   this.a = createVector(x1, y1);
   this.b = createVector(x2, y2);
 }
  
  //Method for drawing the walls to the screen
   show() {
    stroke(255);
    strokeWeight(2);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
 
}