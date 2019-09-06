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
  
  get diameter() {
    return this.radius * 2
  }
  get circumference() {
    return Math.pi * this.diameter
  }
  get area()
    { return Math.pi * (this.radius * this.radius)
      
    }
 
  
}