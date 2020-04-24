class Module {
  constructor(args) {
    let def = {
      size: createVector(50, 50),
      p: createVector(30, 30),
      isPressing: false,
      type: "Module",
      nextNodes: []
    }
    Object.assign(def, args)
    Object.assign(this, def)
  }
  drawReact() {
    push()
    translate(this.p.x, this.p.y)
    stroke(255, 100)
    if (linkSource && this.isMouseInModule()) {
      stroke(50, 50, 255, 400)
      strokeWeight(5)
    }
    if (selectedModule===this) {
      stroke(50, 50, 255, 400)
      strokeWeight(5)
    }
    // fill(255)
    noFill()
    if (this.isPressing) {
      stroke('red')
    }
    rect(0, 0, this.size.x, this.size.y)
    pop()
  }
  draw() {
    push()
    fill(255)
    textAlign(LEFT, BOTTOM)
    noStroke()
    text(this.type, this.p.x, this.p.y)
    pop()
    push()
    fill(255)
    ellipse(this.p.x, this.p.y, 5, 5)
    ellipse(this.p.x, this.p.y + this.size.y, 5, 5)
    pop()
    this.drawReact()
    this.nextNodes.forEach(node => {
      push()
        stroke(255)
        noFill()
        line(this.p.x, this.p.y + this.size.y, node.p.x, node.p.y)
      pop()
    })
    this.drawModule && this.drawModule()
  }
  update() {
    if (this.isPressing) {
      let span = 10
      this.p.add(createVector(mouseX - pmouseX, mouseY - pmouseY))
      // this.p=createVector(Math.round(this.p.x/span)*span,Math.round(this.p.y/span)*span)
    }
    this.updateModule && this.updateModule()
  }
  trigger() {

  }
  mouseWheel() {}
  isMouseInModule() {
    return (mouseX > this.p.x && mouseX < this.p.x + this.size.x &&
      mouseY > this.p.y && mouseY < this.p.y + this.size.y)
  }
  isClickedOnOutputPoint() {
    let d = createVector(mouseX, mouseY).dist(this.p.copy().add(createVector(0, this.size.y)))
    // console.log(d)
    return d < 10
  }
  
  isClickedOnInputPoint() {
    let d = createVector(mouseX, mouseY).dist(this.p)
    // console.log(d)
    return d < 10
  }
  mousePressed() {
    if (this.isMouseInModule()) {
      this.isPressing = true
    } else {
      this.isPressing = false
    }
    return this.isPressing
  }
  mouseReleased() {
    this.isPressing = false
    return this.isMouseInModule()
  }
  connectTo(node) {
    this.nextNodes.push(node)
    return this
  }
  input(args) {
    console.log(args)
  }
  outputToNextNodes(data) {
    this.nextNodes.forEach(node => {
      node.input(data)
    })
  }
}