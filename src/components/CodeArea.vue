<template lang="pug">
  div.codeArea
    iframe(
      :key="key"
      height="400px"
      :srcdoc="`<html><head><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js'></script></head>${enableMotion?motionButtonStyle:''}<body>${enableMotion?motionButtonCode:''}${scriptHtml}<script>${embedCodes}; function windowResized() {resizeCanvas(windowWidth, windowHeight);}</script><style>html,body{margin: 0;overflow: hidden;}</style></body>`")
    div( v-if="!hidecode")
      button.btn.btn-light.btn-rerun(@click="restartCode")
        i.fas.fa-redo-alt
      codemirror(v-model="value", :hidecode="true")
    

</template>

<script>
// import p5 from 'p5'
//test motion
//https://codepen.io/frank890417/pen/LYpxyZK?editors=0010
export default {
  props: [
    "value", "hidecode", "enableMotion", "scriptFiles"
  ],
  data(){
    return {
      key: 0,
      motionButtonStyle: `
        <style>button.motionTrigger{position: absolute;width:100%;height: 100%;opacity: 0;border-radius: 0;-webkit-appearance: none;outline: none !important;}</style>
      `,
      motionButtonCode: `
        <button class='motionTrigger' onclick='requestT()'>開啟重力感測</button>
      `,
      motionEventCode: `
        function hideTriggerButton(){
          document.querySelector('button.motionTrigger').style.display="none"
        }
        if (!(typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function')){
          //document.querySelector('button.motionTrigger').style.display="none"
        }else{

        }
        function requestT () {
          hideTriggerButton()
          if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
                // alert('enter');
              DeviceMotionEvent.requestPermission()
              .then(response => {
                console.warn('resp'+ response);
                // if (response == 'granted') {
                //   window.addEventListener('devicemotion', (e) => {
                //     document.querySelector("pre#p1").innerHTML = e.accelerationIncludingGravity.x + ","+ e.accelerationIncludingGravity.y + "," +  e.accelerationIncludingGravity.z
                //   })
                // }

              })
              .catch(console.warn)
          }else {
              console.warn('DeviceMotionEvent is not defined');
          }
          if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
              // alert('enter');
              DeviceOrientationEvent.requestPermission()
              .then(response => {
                console.warn('resp'+ response);
                // if (response == 'granted') {
                //   window.addEventListener('deviceorientation', (e) => {
                //     document.querySelector("pre#p2").innerHTML =e.alpha+","+e.beta+","+e.gamma
                //   })
                // }
              })
              .catch(console.warn)
          }else {
              console.warn('DeviceMotionEvent is not defined');
          }
        }

      
      `
    }
  },
  // watch(){
  //   value: {
  //   }
  // },
  methods:{
    restartCode(){
      this.key++
    }
  },
  computed:{
    embedCodes(){
      return `${this.value};${this.enableMotion?this.motionEventCode:''}`
    },
    scriptHtml(){
      return (this.scriptFiles || []).map(file=> (`<script src='${file}'><\/script>` ) ).join("")
    }
  },
  mounted(){
    if (this.enableMotion){
      
    }

    let _this = this
    var timer
    window.addEventListener('resize',()=>{
      clearTimeout(timer)
      timer = setTimeout(()=>{
        _this.restartCode()
      },500)
    })
  }
}
</script>
<style lang="sass">
.codeArea
  iframe
    overflow: hidden
    border: none

    width: 100%
  .CodeMirror 
    border: 1px solid #eee
    height: auto

  .btn.btn-rerun
    font-size: 12px
  button.requestMotion
    position: absolute
    left: 50%
    top: 30%

    z-index: 50

</style>
