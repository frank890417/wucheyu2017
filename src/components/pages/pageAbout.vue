<template lang="pug">
  .page.page-about#page_about
    .container.pt-5.content
      .row
        .col-sm-12
      .row.row-info.mt-5
        .col-sm-12.col-info.text-left
          //- img.head.animated.fadeIn(src="/static/img/head2.jpg")
          h1 Che-Yu Wu
          h5.mt-1 Interaction Designer, Creative Technologist
          pre MS in Integrated Digital Media @ New York University
          br
          p Devoted to generative arts, immersive user experience design, full-stack development, sound synthesis, and tutoring.<br><br>
         
          //- social-links

</template>

<script>
import socialLinks from '@/components/socialLinks'

import p5 from 'p5'
function bg(sketch){
  sketch.setup=function(){
    var canvas = sketch.createCanvas(sketch.windowWidth,sketch.windowHeight)
    sketch.colorMode(sketch.HSB)
    canvas.parent('#page_about')
    // sketch.background(0)
  }
  sketch.windowResized=function(){
    sketch.resizeCanvas(sketch.windowWidth,sketch.windowHeight)
  }
  sketch.draw = function(){
    sketch.background(255)

    
    for(var i=0;i<sketch.width;i+=10){
      if (i% 50==0){
        sketch.stroke(0,0,10,0.2)
      }else{
        sketch.stroke(0,0,10,0.05)
      }
      sketch.line(i,0,i,sketch.height)
      
    }
    for(var i=0;i<sketch.height;i+=10){
      if (i% 50==0){
        sketch.stroke(0,0,10,0.2)
      }else{
        sketch.stroke(0,0,10,0.05)
      }
      sketch.line(0,i,sketch.width,i)
    }


    sketch.translate(sketch.width/2,sketch.height/2)
    sketch.stroke(255)
    sketch.noStroke()
    let yy = window.scrollY
    for(var o=0;o<25;o++){
      sketch.push()
      sketch.rotate(sketch.PI/10*2*o)
      for(var i=0;i<90;i++){
        let r = 180/sketch.pow(i,0.8)
        let deg = o  + sketch.sin(yy/100+ i/50 + sketch.cos(sketch.frameCount/20  )/30+ sketch.frameCount/50)/5+ sketch.noise(sketch.frameCount/50,i*10,o*10) + sketch.cos(sketch.frameCount/200)
        sketch.rotate(deg )
        sketch.stroke(yy/50+ i,50,100-o-i/10)
        sketch.line(0,0,r,0)
        sketch.noStroke()
        sketch.fill(i*3,70,100-o-i/10)
        sketch.ellipse(0,0,sketch.log(i)*1,1*sketch.log(i))
        sketch.translate(r,0)
      }
      sketch.pop()
      
    }
    
  }
  }

export default {
  mounted(){
      var cnv 
      var points = []

      var notes = []
      this.bgsketch = new p5(bg,"test")

    
  },
  data(){
    return {
      bgsketch: null
    }
  },
  components: {
    socialLinks
  },
  beforeDestroy(){
    this.bgsketch.remove()
  }
}
</script>

<style lang="sass">
.page-about
  line-height: 2rem
  min-height: 100vh
  // position: relative
  .container.content
    position: static

  .row-info
    position: absolute
    bottom: 50px
    left: 50px
    padding: 20px
    display: flex
    justify-content: center
    min-height: 60vh
    align-items: flex-end
    img
      // border-radius: 50%
      width: 150px
      margin-bottom: 50px
    // align-items: center
  .background
    position: fixed
    left: 0
    top: 0
  .content
    position: relative
    z-index: 1
    padding-left: 20px
  ul
    padding: 0
    margin: 0
    list-style: none
  p
    opacity: 0.7
    
  .year
    color: #333
    font-size: 2rem
    font-weight: bold

    background-color: #fff
    display: inline-block
    padding: 10px
    
  h1,h3
    font-weight: bold

  .yearlist
    list-style: none
    padding: 20px 0px
    &>li
      margin-bottom: 50px
      padding: 20px 20px
      // border-left: solid 2px 
      
      
    h4
      margin: 0
      margin-top: 30px
      margin-bottom: 20px
      font-weight: bold
    h5
      margin-top: 15px
      
      

</style>
