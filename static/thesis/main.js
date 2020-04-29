// NYU IDM Che-YU Thesis v1
let melodyNotes1 =
  // [Tone.Frequency(60, "midi").toNote()]
  ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', '', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4', '']
// "E4,E4,F4,G4,G4,F4,E4,D4,C4,C4,D4,E4,E4,D4,D4,E4,E4,F4,G4,G4,F4,E4,D4,C4,C4,D4,E4,D4,C4,C4".split(",")

// "C4,,C4,D4,E4,,E4,,D4,C4,D4,E4,C4,,,,E4,,E4,F4,G4,,G4,,F4,E4,F4,G4,E4,".split(",")
// "G5,,G5,E5,D5,C5,D5,C5,D5,C5,D5,,D5,C5,D5,C5,D5,C5,E5,,A4,C5".split(",")let melody =
// [Tone.Frequency(60, "midi").toNote()]
// ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', '', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4', '']
// "E4,E4,F4,G4,G4,F4,E4,D4,C4,C4,D4,E4,E4,D4,D4,E4,E4,F4,G4,G4,F4,E4,D4,C4,C4,D4,E4,D4,C4,C4".split(",")

// "C4,,C4,D4,E4,,E4,,D4,C4,D4,E4,C4,,,,E4,,E4,F4,G4,,G4,,F4,E4,F4,G4,E4,".split(",")
let melodyNotes2 = "E4,E4,F4,G4,G4,F4,E4,D4,C4,C4,D4,E4,E4,D4,D4,,E4,E4,F4,G4,G4,F4,E4,D4,C4,C4,D4,E4,D4,C4,C4,".split(",")

let modules = []
let toolBox = {
  m: Melody,
  t: Transporter,
  r: Randomizer,
  e: Emotioner,
  l: Metro,
  s: Synth,
  '/': Moduler,
  d: Delayer,
  h: Harmonizer,
  k: Keyboard,
}

let toolTips

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  textAlign(CENTER)
  rectMode(CORNER)
  initDefault()
  let kb = new Keyboard({
    p: createVector(500,300)
  })
  modules.push(kb)
  let sft = new SoundSofter({
    p: createVector(800,300)
  })
  modules.push(sft)

  if (navigator.requestMIDIAccess) {
      console.log('This browser supports WebMIDI!');
  } else {
      console.log('WebMIDI is not supported in this browser.');
  }
  navigator.requestMIDIAccess()
    .then(onMIDISuccess, ()=>{});
    toolTips = Object.entries(toolBox).map(o=>o[0]+": "+ ( o[1].name ) ).join("\n") 
}

function onMIDISuccess(midiAccess) {
  for (var input of midiAccess.inputs.values()){
      input.onmidimessage = getMIDIMessage
  }
}

function getMIDIMessage(midiMessage) {
  console.log(midiMessage.data);
}

function draw() {
  background(0, 200)
  cursor()
  stroke(255, 15)
  for (var i = 0; i < width; i += 10) {
    line(i, 0, i, height)
  }
  for (var i = 0; i < height; i += 10) {
    line(0, i, width, i)
  }
  modules.forEach(module => {
    if (module.isMouseInModule()) {
      cursor('pointer')
    }
    module.update()
    module.draw()
  })
  if (linkSource) {
    push()
    stroke(255)
    line(mouseX, mouseY, linkSource.p.x, linkSource.p.y + linkSource.size.y)
    pop()
  }

  push()
  fill(255)
  noStroke()
  textAlign(LEFT, BOTTOM)
  text(toolTips+ 
          "\nDouble Click - Trigger\nWheel / Alt+Wheel - Change value\nAlt + Click - remove Link", 20, height - 20)
  textAlign(LEFT, TOP)
  text(mouseX+","+mouseY,width-80,30)
  textSize(20)
  text("Intuitive", 20, 20)
  pop()

  let toolBoxP = createVector(width-100,100)

  push()
    translate(toolBoxP)
    for(var i=0;i<toolBox.length;i++){
      text(toolBox[i],0,i*10)
    }
  pop()
  

}

let linkSource = null
let selectedModule = null

function mousePressed() {

  Tone.start()
  Tone.Transport.start()

  let flag = false
  modules.forEach(module => {
    flag = module.mousePressed() && flag
    if (module.isMouseInModule()) {
      selectedModule = module
    }
    if (module.isClickedOnOutputPoint()) {
      if (keyIsPressed && key == "Alt") {
        module.nextNodes = []
      } else {
        console.log("startLink")
        linkSource = module
      }
    }

    if (module.isClickedOnInputPoint()) {
      if (keyIsPressed && key == "Alt") {
        // module.nextNodes = []
        modules.forEach(m => {
          m.nextNodes = m.nextNodes.filter(n => n !== module)
        })
        // } else {
        // console.log("startLink")
        // linkSource = module
      }
    }
  })
  if (!flag) {
    // console.log("no module")
  }

}

function mouseReleased() {
  modules.forEach(module => {
    let res = module.mouseReleased()
    if (res) {
      if (linkSource && linkSource != module) {
        linkSource.connectTo(module)
        linkSource = null
      }
    }
  })

  linkSource = null
  selectedModule = null
}

function mouseWheel(event) {
  modules.forEach(module => {
    let res = module.mouseWheel(event.delta)

  })
}

function doubleClicked() {
  modules.forEach(module => {
    if (module.isMouseInModule()) {
      module.trigger()
    }
  })
}

function keyPressed() {
  console.log(key)
  let targetModule =toolBox[key]
  if (targetModule) {
    let obj = new targetModule({
      p: createVector(mouseX, mouseY),
    })
    modules.push(obj)

  }

  if (key == "Backspace") {
    modules.forEach(m => m.nextNodes = m.nextNodes.filter(n => n != selectedModule))
    modules = modules.filter(m => m !== selectedModule)
    selectedModule = null
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}







function initDefault(){

  // let transporter = new Transporter({
  //   p: createVector(200, 250),
  //   panValue: 2
  // })
  // let scaler = new Emotioner({
  //   p: createVector(50, 170)
  // })
  // let scaler2 = new Emotioner({
  //   p: createVector(180, 170)
  // })
  // let transporter2 = new Transporter({
  //   p: createVector(300, 310),
  //   panValue: -12
  // })
  // let transporter3 = new Transporter({
  //   p: createVector(350, 410),
  //   panValue: -12
  // })
  // let metro = new Metro({
  //   p: createVector(200, 50)
  // })
  // let metro2 = new Metro({
  //   p: createVector(350, 50)
  // })
  let melody1 = new Melody({
    notes: melodyNotes1,
    p: createVector(100, 100),
  })
  let melody2 = new Melody({
    notes: melodyNotes2,
    p: createVector(500, 100),
  })
  // let delayer1 = new Delayer({

  //   p: createVector(600, 600),
  // })
  // let randomizer1 = new Randomizer({
  //   p: createVector(550, 500),
  // })
  // let harmonizer = new Harmonizer({
  //   p: createVector(250, 500),
  // })
  // var freeverb = new Tone.Freeverb().toDestination();
  // freeverb.dampening.value = 2000;
  // var freeverb2 = new Tone.Freeverb().toMaster();
  // freeverb2.dampening.value =5000;
  // let synthM = new Synth({
  //   p: createVector(100, 250),
  //   synth: new Tone.Synth({
  //     oscillator: {
  //       type: 'triangle8',
  //       detune: 0.2
  //     },
  //     envelope: {
  //       attack: 0.08,
  //       decay: 0.8,
  //       sustain: 0.2,
  //       release: 0.4
  //     }
  //   }).toDestination()
  // })
  // let synthM2 = new Synth({
  //   p: createVector(150, 350),
  //   "symbol": "🍴",
  //   synth: new Tone.MetalSynth({
  //     "harmonicity": 12,
  //     "resonance": 800,
  //     "modulationIndex": 20,
  //     "envelope": {
  //       "decay": 0.4,
  //     },
  //     "volume": -20
  //   }).toDestination()
  // })
  // let synthM3 = new Synth({
  //   p: createVector(350, 500),
  //   "symbol": "🎸",
  //   synth: new Tone.MembraneSynth({
  //     "pitchDecay": 0.008,
  //     "octaves": 2,
  //     "envelope": {
  //       "attack": 0.0006,
  //       "decay": 0.5,
  //       "sustain": 0
  //     }
  //   }).toDestination()
  // })
  // let moduler = new Moduler({
  //   p: createVector(450, 450),
  // })
  modules.push(melody1)
  modules.push(melody2)
  // modules.push(transporter)
  // modules.push(transporter2)
  // modules.push(transporter3)
  // modules.push(scaler)
  // modules.push(randomizer1)
  // modules.push(delayer1)
  // modules.push(harmonizer)

  // modules.push(synthM)
  // modules.push(synthM2)
  // modules.push(synthM3)
  // metro.connectTo(melody1)

  // melody1.connectTo(scaler)
  // scaler.connectTo(transporter)

  // melody1.connectTo(scaler2)
  // scaler2.connectTo(transporter2)
  // transporter.connectTo(synthM)
  // transporter2.connectTo(synthM2)
  // transporter2.connectTo(transporter3)
  // transporter3.connectTo(moduler)
  // moduler.connectTo(synthM3)

  // modules.push(metro)
  // modules.push(metro2)
  // modules.push(scaler2)
  // modules.push(moduler)
}