// Add your Circle class here


class Circle {
  
  constructor(radius) {
    this.radius = radius
  }
  
  set diameter() {
    this.radius = this.radius * 2
  }
  set circumference() {
    Math.pi * diameter
  }
  set area() {
    Math.pi
  }

  
  get diameter() {}
  get circumference() {}
  get area() {}
 
  
  
}