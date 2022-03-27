//Particle class acts as a light source, casting rays outward from a central point
class Particle {
  
  constructor() {
   this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    //360 degrees in a circle, 'a += ' defines the amount of rays
    for (let a = 0; a < 360; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));  
    }
  }
  
  //Currently useless method for showing the exact point of intersection
  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 16);
    for (let ray of this.rays) {
      ray.show();
    }
  }
  
  //Method for drawing the ray from the particle to the boundary
  look(walls) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);   //get the intersection point of the ray and wall
        if (pt) {                    //if an intersectin point exists
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {          //check for the closest wall according to distance from the particle to the wall
            record = d
            closest = pt;
          }
        }
      }
      if (closest) {
        stroke(255, 100);
        strokeWeight(1);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }
    
  update(x, y) {
      this.pos.set(x,y);
  }
  
}