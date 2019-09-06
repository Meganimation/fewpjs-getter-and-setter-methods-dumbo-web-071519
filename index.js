// Add your Circle class here


class Circle {
  
  constructor(radius) {
    this.radius = radius
  }
  
  set diameter(diameter) {
    this.diameter = diameter
  }
  set circumference(circumference) {
   this.circumference = circumference
  }
  set area(area) {
   this.area = area
  }
  
  get diameter() {
    return this.radius * 2
  }
  get circumference() {
    return (Math.pi * diameter)
  }
  get area()
    { return Math.pi * (this.radius * this.radius)
      
    }
 
  
}