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

let defaultData= `
[{"p":{"x":80,"y":106,"z":0},"type":"Melody","nextNodes":[4],"notes":["C4","C4","G4","G4","A4","A4","G4","","F4","F4","E4","E4","D4","D4","C4",""],"noteSpanSize":17,"index":-1,"started":false,"id":0,"isTriggering":true,"lastTriggerTime":8318,"currentNote":"E4"},{"p":{"x":80,"y":270,"z":0},"type":"Transporter","nextNodes":[39],"panValue":12,"keyCount":5,"span":20,"id":1},{"p":{"x":222,"y":267,"z":0},"type":"Transporter","nextNodes":[8,3],"panValue":-12,"keyCount":5,"span":20,"id":2},{"p":{"x":255,"y":357,"z":0},"type":"Transporter","nextNodes":[11],"panValue":-12,"keyCount":5,"span":20,"id":3},{"p":{"x":189,"y":178,"z":0},"type":"Emotioner","nextNodes":[1,2],"id":4},{"p":{"x":314,"y":547,"z":0},"type":"Randomizer","nextNodes":[20],"panScale":10,"id":5},{"p":{"x":398,"y":322,"z":0},"type":"Delayer","nextNodes":[16],"duration":181,"lastTriggerTime":0,"id":6},{"p":{"x":62,"y":394,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":2378,"isTriggering":false,"volume":-5,"id":7},{"p":{"x":150,"y":350,"z":0},"type":"Synth","nextNodes":[],"symbol":"🍴","lastTriggerTime":2377,"isTriggering":false,"volume":-8,"id":8},{"p":{"x":169,"y":493,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎸","lastTriggerTime":2377,"isTriggering":false,"volume":-8,"id":9},{"p":{"x":378,"y":35,"z":0},"type":"Metro","nextNodes":[12,22,0],"swing":42,"triggerCount":0,"span":12,"lastTriggerTime":0,"isTriggering":false,"id":10},{"p":{"x":245,"y":421,"z":0},"type":"Moduler","nextNodes":[9,19],"modulo":4,"triggerCount":81,"span":8,"lastTriggerTime":0,"isTriggering":false,"id":11},{"p":{"x":425,"y":114,"z":0},"type":"Melody","nextNodes":[13],"notes":["E4","G4","E5"],"noteSpanSize":17,"index":-1,"started":false,"isTriggering":true,"lastTriggerTime":8318,"currentNote":"G4","id":12},{"p":{"x":396,"y":188,"z":0},"type":"Emotioner","nextNodes":[14],"id":13},{"p":{"x":403,"y":270,"z":0},"type":"Transporter","nextNodes":[15,6],"keyCount":5,"span":20,"panValue":12,"id":14},{"p":{"x":496,"y":319,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-15,"id":15},{"p":{"x":418,"y":394,"z":0},"type":"Transporter","nextNodes":[17],"keyCount":5,"span":20,"panValue":12,"id":16},{"p":{"x":413,"y":452,"z":0},"type":"Moduler","nextNodes":[18],"modulo":4,"triggerCount":0,"span":8,"lastTriggerTime":0,"isTriggering":false,"id":17},{"p":{"x":422,"y":527,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-18,"id":18},{"p":{"x":288,"y":459,"z":0},"type":"Delayer","nextNodes":[5],"duration":100,"lastTriggerTime":2377,"id":19},{"p":{"x":279,"y":618,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":2381,"isTriggering":false,"volume":-10,"id":20},{"p":{"x":592,"y":249,"z":0},"type":"Melody","nextNodes":[25,29],"notes":["G4","C5","D5","E5","G5","C5",null],"noteSpanSize":17,"index":-1,"started":false,"isTriggering":true,"lastTriggerTime":8290,"id":21,"currentNote":"G4"},{"p":{"x":555,"y":113,"z":0},"type":"Moduler","nextNodes":[26],"modulo":4,"triggerCount":0,"span":8,"lastTriggerTime":0,"isTriggering":false,"id":22},{"p":{"x":586,"y":460,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":2384,"isTriggering":false,"volume":-20,"id":23},{"p":{"x":692,"y":129,"z":0},"type":"Keyboard","nextNodes":[25,4,32,33],"keyW":12,"keyH":50,"keyCount":15,"isTriggering":false,"id":24},{"p":{"x":621,"y":317,"z":0},"type":"Transporter","nextNodes":[27],"keyCount":5,"span":20,"panValue":0,"id":25},{"p":{"x":544,"y":172,"z":0},"type":"Emotioner","nextNodes":[21],"id":26},{"p":{"x":578,"y":362,"z":0},"type":"Delayer","nextNodes":[23],"duration":193,"lastTriggerTime":2377,"id":27},{"p":{"x":755,"y":413,"z":0},"type":"Harmonizer","nextNodes":[30],"harmony":3,"lastTriggerTime":2377,"id":28},{"p":{"x":758,"y":323,"z":0},"type":"Moduler","nextNodes":[31],"modulo":4,"triggerCount":21,"span":8,"lastTriggerTime":0,"isTriggering":false,"id":29},{"p":{"x":731,"y":500,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":2377,"isTriggering":false,"volume":-12,"id":30},{"p":{"x":778,"y":368,"z":0},"type":"Transporter","nextNodes":[28],"keyCount":5,"span":20,"panValue":-12,"id":31},{"p":{"x":758,"y":235,"z":0},"type":"Moduler","nextNodes":[29],"modulo":4,"triggerCount":81,"span":8,"lastTriggerTime":0,"isTriggering":false,"id":32},{"p":{"x":669,"y":391,"z":0},"type":"Randomizer","nextNodes":[34],"panScale":10,"id":33},{"p":{"x":670,"y":474,"z":0},"type":"Delayer","nextNodes":[36,38],"duration":60,"lastTriggerTime":2377,"id":34},{"p":{"x":658,"y":666,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":2389,"isTriggering":false,"volume":-23,"id":35},{"p":{"x":606,"y":539,"z":0},"type":"Transporter","nextNodes":[37],"keyCount":5,"span":20,"panValue":-12,"id":36},{"p":{"x":569,"y":572,"z":0},"type":"Delayer","nextNodes":[38],"duration":60,"lastTriggerTime":2380,"id":37},{"p":{"x":680,"y":588,"z":0},"type":"SoundSofter","nextNodes":[35],"duration":149,"lastTriggerTime":2383,"id":38},{"p":{"x":65,"y":325,"z":0},"type":"SoundSofter","nextNodes":[7],"duration":3,"lastTriggerTime":2377,"id":39}]`
let examples= {
  "Little Star Machine": defaultData,
  "Keyboard Demo":`[{"p":{"x":400,"y":96,"z":0},"type":"Keyboard","nextNodes":[14],"keyW":12,"keyH":50,"keyCount":15,"isTriggering":false,"id":0},{"p":{"x":457,"y":558,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-28,"id":1},{"p":{"x":318,"y":445,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-10,"id":2},{"p":{"x":449,"y":462,"z":0},"type":"SoundSofter","nextNodes":[1],"duration":53,"lastTriggerTime":0,"id":3},{"p":{"x":567,"y":291,"z":0},"type":"Delayer","nextNodes":[6],"duration":52,"lastTriggerTime":0,"id":4},{"p":{"x":612,"y":480,"z":0},"type":"SoundSofter","nextNodes":[7],"duration":240,"lastTriggerTime":0,"id":5},{"p":{"x":610,"y":381,"z":0},"type":"Transporter","nextNodes":[5,18],"keyCount":5,"span":20,"panValue":12,"id":6},{"p":{"x":612,"y":564,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-8,"id":7},{"p":{"x":218,"y":383,"z":0},"type":"Moduler","nextNodes":[9],"modulo":4,"triggerCount":0,"span":8,"lastTriggerTime":0,"isTriggering":false,"id":8},{"p":{"x":170,"y":452,"z":0},"type":"Transporter","nextNodes":[10],"keyCount":5,"span":20,"panValue":-12,"id":9},{"p":{"x":156,"y":491,"z":0},"type":"Transporter","nextNodes":[11,12],"keyCount":5,"span":20,"panValue":-12,"id":10},{"p":{"x":174,"y":540,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-5,"id":11},{"p":{"x":247,"y":535,"z":0},"type":"Transporter","nextNodes":[13],"keyCount":5,"span":20,"panValue":-12,"id":12},{"p":{"x":255,"y":577,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-2,"id":13},{"p":{"x":399,"y":205,"z":0},"type":"Emotioner","nextNodes":[8,2,4,20],"id":14},{"p":{"x":722,"y":650,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":0,"isTriggering":false,"volume":-23,"id":15},{"p":{"x":716,"y":549,"z":0},"type":"SoundSofter","nextNodes":[15],"duration":50,"lastTriggerTime":0,"id":16},{"p":{"x":719,"y":501,"z":0},"type":"Transporter","nextNodes":[16],"keyCount":5,"span":20,"panValue":12,"id":17},{"p":{"x":723,"y":425,"z":0},"type":"Delayer","nextNodes":[17],"duration":266,"lastTriggerTime":0,"id":18},{"p":{"x":444,"y":412,"z":0},"type":"Transporter","nextNodes":[3],"keyCount":5,"span":20,"panValue":4,"id":19},{"p":{"x":430,"y":334,"z":0},"type":"Delayer","nextNodes":[19],"duration":8,"lastTriggerTime":0,"id":20}]`,
  "KB with Chord": `[{"p":{"x":239,"y":43,"z":0},"type":"Keyboard","nextNodes":[11],"keyW":12,"keyH":50,"keyCount":15,"isTriggering":true,"id":0},{"p":{"x":455,"y":87,"z":0},"type":"Melody","nextNodes":[7],"notes":["C4","G4","E4","G4"],"noteSpanSize":17,"index":0,"started":false,"isTriggering":true,"lastTriggerTime":21385,"currentNote":"C4","id":1},{"p":{"x":480,"y":19,"z":0},"type":"Metro","nextNodes":[1],"swing":0,"triggerCount":961,"span":18,"lastTriggerTime":21385,"isTriggering":true,"id":2},{"p":{"x":548,"y":389,"z":0},"type":"SoundSofter","nextNodes":[4],"duration":10,"lastTriggerTime":21385,"id":3},{"p":{"x":511,"y":477,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":21387,"isTriggering":false,"volume":-21,"id":4},{"p":{"x":266,"y":460,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":21243,"isTriggering":false,"volume":-19,"id":5},{"p":{"x":409,"y":516,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":21251,"isTriggering":false,"volume":-11,"id":6},{"p":{"x":419,"y":157,"z":0},"type":"Emotioner","nextNodes":[16],"id":7},{"p":{"x":404,"y":402,"z":0},"type":"SoundSofter","nextNodes":[6],"duration":50,"lastTriggerTime":21247,"id":8},{"p":{"x":389,"y":323,"z":0},"type":"Delayer","nextNodes":[8],"duration":50,"lastTriggerTime":21243,"id":9},{"p":{"x":267,"y":302,"z":0},"type":"Transporter","nextNodes":[9,5,12],"keyCount":5,"span":20,"panValue":0,"id":10},{"p":{"x":293,"y":154,"z":0},"type":"Emotioner","nextNodes":[17],"id":11},{"p":{"x":158,"y":347,"z":0},"type":"Transporter","nextNodes":[13,15],"keyCount":5,"span":20,"panValue":-12,"id":12},{"p":{"x":69,"y":413,"z":0},"type":"Transporter","nextNodes":[14],"keyCount":5,"span":20,"panValue":-12,"id":13},{"p":{"x":102,"y":475,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":21243,"isTriggering":false,"volume":-8,"id":14},{"p":{"x":193,"y":475,"z":0},"type":"Synth","nextNodes":[],"symbol":"🎺","lastTriggerTime":21243,"isTriggering":false,"volume":-8,"id":15},{"p":{"x":413,"y":235,"z":0},"type":"Transporter","nextNodes":[3],"keyCount":5,"span":20,"panValue":-5,"id":16},{"p":{"x":292,"y":236,"z":0},"type":"Transporter","nextNodes":[10,3],"keyCount":5,"span":20,"panValue":-5,"id":17}]`

}

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
  c: SoundSofter
}
let capture;
let toolTips

var _cls_ = {}; // serves as a cache, speed up later lookups
function getClass(name){
  if (!_cls_[name]) {
    // cache is not ready, fill it up
    if (name.match(/^[a-zA-Z0-9_]+$/)) {
      // proceed only if the name is a single word string
      _cls_[name] = eval(name);
    } else {
      // arbitrary code is detected 
      throw new Error("Who let the dogs out?");
    }
  }
  return _cls_[name];
}

function getAllData(){
  modules.forEach((m,mid)=>m.id=mid)
  let formattedData = modules.map(m=>{
    let attrs = {}
    Object.entries(m).forEach((pair)=>{
      let key = pair[0]
      let content=pair[1]
      if (('p,id,notes'.split(",").indexOf(key)!=-1 || typeof(content)!='object') && 
          'isPressing'.split(",").indexOf(key)==-1 ){
        attrs[key]=content
        if (typeof content=="object"){
          content.p5=undefined
        }
      }
      if (key=="nextNodes"){
        attrs.nextNodes = content.map(node=>node.id)
      }
    })
    return attrs
  })
  return formattedData
}
function readAllData(d){
  modules.forEach(m=>m.nextNodes=[])
  modules = []
  let items = d
  items.forEach(item=>{
    // console.log(item.type)
    let _CLASS =  getClass(item.type)
    let module = new _CLASS(item)
    modules.push(module)
  })
  modules.forEach((module)=>{
    module.nextNodes = module.nextNodes.map(mid=>modules.find(m=>m.id==mid))
  })
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  textAlign(CENTER)
  rectMode(CORNER)
  // initDefault()
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  if (navigator.requestMIDIAccess) {
      console.log('This browser supports WebMIDI!');
  } else {
      console.log('WebMIDI is not supported in this browser.');
  }
  navigator.requestMIDIAccess()
    .then(onMIDISuccess, ()=>{});
    toolTips = Object.entries(toolBox).map(o=>o[0]+": "+ ( o[1].name ) ).join("\n") 


  let btnSave = createButton("Save")
  btnSave.position(width-80,height-100)
  btnSave.mousePressed(()=>{
    let d = JSON.stringify(getAllData())
    console.log(d)
    storeItem('musicdata' ,d   )
  })

  let btnLoad = createButton("Restore")
  btnLoad.position(width-80,height-50)
  btnLoad.mousePressed(()=>{
    readAllData(JSON.parse(getItem("musicdata")))
  })

  readAllData(JSON.parse(defaultData))
  createSpan("Examples:").position(width-150,50).style("color","white")
  Object.entries(examples).forEach((e,eId)=>{
    let b = createButton(e[0])
    b.position(width-150,eId*30+100)
    b.mousePressed(()=>{
      readAllData(JSON.parse(e[1]))
    })
  })
}

function onMIDISuccess(midiAccess) {
  for (var input of midiAccess.inputs.values()){
      input.onmidimessage = getMIDIMessage
  }
}

function getMIDIMessage(midiMessage) {
  console.log(midiMessage.data);
  let k = modules.find(m=>m.type=="Keyboard")
  if (k && midiMessage.data[2]){
    k.mousePressedModule(midiMessage.data[1])
  }
}

function draw() {
  background(0, 200)
  image(capture, width-320, 0, 320, 240);
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
          "\nDouble Click - Trigger\nWheel / Alt+Wheel - Change value\nAlt + Click - remove Link\nEsc - Clear All", 20, height - 20)
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
  if (key == "Escape") {
    modules.forEach(m=>m.nextNodes=[])
    modules=[]
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}







function initDefault(){

  let transporter = new Transporter({
    p: createVector(200, 250),
    panValue: 2
  })
  let scaler = new Emotioner({
    p: createVector(50, 170)
  })
  let scaler2 = new Emotioner({
    p: createVector(180, 170)
  })
  let transporter2 = new Transporter({
    p: createVector(300, 310),
    panValue: -12
  })
  let transporter3 = new Transporter({
    p: createVector(350, 410),
    panValue: -12
  })
  let metro = new Metro({
    p: createVector(200, 50)
  })
  let metro2 = new Metro({
    p: createVector(350, 50)
  })
  let melody1 = new Melody({
    notes: melodyNotes1,
    p: createVector(100, 100),
  })
  let melody2 = new Melody({
    notes: melodyNotes2,
    p: createVector(500, 100),
  })
  let delayer1 = new Delayer({

    p: createVector(600, 600),
  })
  let randomizer1 = new Randomizer({
    p: createVector(550, 500),
  })
  let harmonizer = new Harmonizer({
    p: createVector(250, 500),
  })
  // var freeverb = new Tone.Freeverb().toDestination();
  // freeverb.dampening.value = 2000;
  // var freeverb2 = new Tone.Freeverb().toDestination();
  // freeverb2.dampening.value =5000;
  let synthM = new Synth({
    p: createVector(100, 250),
    synth: new Tone.Synth({
      oscillator: {
        type: 'triangle8',
        detune: 0.2
      },
      envelope: {
        attack: 0.08,
        decay: 0.8,
        sustain: 0.2,
        release: 0.4
      }
    }).toDestination()
  })
  let synthM2 = new Synth({
    p: createVector(150, 350),
    "symbol": "🍴",
    synth: new Tone.MetalSynth({
      "harmonicity": 12,
      "resonance": 800,
      "modulationIndex": 20,
      "envelope": {
        "decay": 0.4,
      },
      "volume": -20
    }).toDestination()
  })
  let synthM3 = new Synth({
    p: createVector(350, 500),
    "symbol": "🎸",
    synth: new Tone.MembraneSynth({
      "pitchDecay": 0.008,
      "octaves": 2,
      "envelope": {
        "attack": 0.0006,
        "decay": 0.5,
        "sustain": 0
      }
    }).toDestination()
  })
  let moduler = new Moduler({
    p: createVector(450, 450),
  })
  modules.push(melody1)
  // modules.push(melody2)
  modules.push(transporter)
  modules.push(transporter2)
  modules.push(transporter3)
  modules.push(scaler)
  modules.push(randomizer1)
  modules.push(delayer1)
  modules.push(harmonizer)

  modules.push(synthM)
  modules.push(synthM2)
  modules.push(synthM3)
  metro.connectTo(melody1)

  melody1.connectTo(scaler)
  scaler.connectTo(transporter)

  melody1.connectTo(scaler2)
  scaler2.connectTo(transporter2)
  transporter.connectTo(synthM)
  transporter2.connectTo(synthM2)
  transporter2.connectTo(transporter3)
  transporter3.connectTo(moduler)
  moduler.connectTo(synthM3)

  modules.push(metro)
  modules.push(metro2)
  modules.push(scaler2)
  modules.push(moduler)
}