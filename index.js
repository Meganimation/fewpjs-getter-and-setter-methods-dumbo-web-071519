// Add your Circle class here


class Circle {
  
  constructor(radius) {
    this.radius = radius
  }
  
  set diameter() {
    this.radius = this.radius * 2
  }
  set circumference() {
   this.circumference = Math.pi * diameter
  }
  set area() {
   this.area = Math.pi * (radius * radius)
  }
  
  get diameter() {}
  get circumference() {}
  get area() {}
 
  
}