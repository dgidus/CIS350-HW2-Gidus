class Ray {
  //Rays have a starting position and an angle from which they eminate
 constructor(pos, angle) {
  this.pos = pos; 
  this.dir = p5.Vector.fromAngle(angle);
 }
  
  //Currently Useless method
  lookAt(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }
  
  //Currently useless method for drawing a ray
  show() {
    stroke(255);
    strokeWeight(1);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x, this.dir.y)
    pop();
  }
  
  //Method utilizing the line-segment/line-segment intersection formula. Takes in 4 points from 2 lines, returns the point of         intersection if there is one. Returns null for no intersection
  cast(wall) {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;
    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;
    
    let t;
    let u;
    const tuDenominator = ((x1-x2)*(y3-y4)) - ((y1-y2)*(x3-x4));
    if (tuDenominator == 0) {
      return;
    }
    const tNumerator = ((x1 - x3)*(y3-y4)) - ((y1-y3)*(x3-x4));
    const uNumerator = ((x1-x3)*(y1-y2)) - ((y1-y3)*(x1-x2));
    t = tNumerator/tuDenominator;
    u = uNumerator/tuDenominator;
    if ( ((0 < t) && (t < 1)) && (0 < u) ) {
      const pt = createVector();
      pt.x = x1 + (t*(x2-x1));
      pt.y = y1 + (t*(y2-y1));
      return pt;
    } else {
      return;
    }
  }
  
}