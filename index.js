// Add your Circle class here


class Circle {
  
  constructor(radius) {
    this.radius = radius
  }
  
    set radius(radius) {
    this.radius = radius
  }
  
  
  get radius(radius) {
    return this.radius
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
    return (Math.PI * diameter)
  }
  get area()
    { return Math.PI * (this.radius * this.radius)
      
    }
 
  
}