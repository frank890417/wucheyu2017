<template lang="pug">
.page.page-experiment.pt-3
  .container
    .row
      .col-sm-2.col-lg-3.nav-exprs
        .expr_nav.text-left(v-for='(expr,exprid) in experiments',
          :class="{active: exprid==currentIndex}"
          @click="currentIndex = exprid").mb-2
          .cover_sm(:style="{'background-image': 'url('+expr.cover+')'}") 
            span {{expr.title}}
          //- pre {{expr.date}}
      .col-sm-10.col-lg-9
        iframe(:src="experiment.src", style="height: 80vh" )
        
</template>

<script>
export default {
  data(){
    return {
      currentIndex: 0,
      experiments: [
        
        {
          title: "Genrative Music String",
          date: "2018/10/21",
          src: "https://www.openprocessing.org/sketch/611472",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail611472@2x.jpg"
        },
        {
          title: "Genrative Music Matrix",
          date: "2018/10/9",
          src: "https://codepen.io/frank890417/embed/PypZeZ?default-tab=result",
          cover: "https://screenshot.codepen.io/396078.PypZeZ.4456fe6c-85d0-4d8c-a120-ae4372a0f3e5.png"
        },
        {
          title: "Fern",
          date: "2019/4/1",
          src: "https://www.openprocessing.org/sketch/700092",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail700092@2x.jpg"
        },
        {
          title: "FUI - DataPoints",
          date: "2018/9/29",
          src: "https://www.openprocessing.org/sketch/598254",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail598254@2x.jpg"
        },
        {
          title: "Network Attack",
          date: "2019/5/8",
          src: "https://www.openprocessing.org/sketch/708757",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail708757@2x.jpg"
        },
        {
          title: "Universe",
          date: "2019/2/27",
          src: "https://www.openprocessing.org/sketch/676343",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail676343@2x.jpg"
        },
        {
          title: "Pendulum Generative Audio",
          date: "2019/3/7",
          src: "https://codepen.io/frank890417/embed/rJXgOx?default-tab=result",
          cover: "https://screenshot.codepen.io/396078.rJXgOx.small.99759908-d7e0-47c8-94a0-4ef32dd143ca.png"
        },
        {
          title: "Drawing Machine",
          date: "2018/10/28",
          src: "https://www.openprocessing.org/sketch/616561",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail616561@2x.jpg"
        },
        {
          title: "Project 12 Space Invader",
          date: "2018/2/10",
          src: "https://codepen.io/frank890417/embed/rKKGBY?default-tab=result",
          cover: "https://screenshot.codepen.io/396078.rKKGBY.small.3c9e082e-1046-48b4-87d6-5ed1a4bb547d.png"
        },
        {
          title: "Music String",
          date: "2018/3/10",
          src: "https://codepen.io/frank890417/embed/wXgrer?default-tab=result",
          cover: "https://screenshot.codepen.io/396078.wXgrer.small.d291e86a-5bb4-4248-82bc-8ebf8fb28505.png"
        },

        {
          title: "The North Wind and the Sun",
          date: "2018/12/7",
          src: "https://www.openprocessing.org/sketch/641437",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail641437@2x.jpg"
        },
        { 
          title: "Drunk",
          date: "2019/10/28",
          src: "https://www.openprocessing.org/sketch/779854",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail779854@2x.jpg"
        },
        // {
        //   title: "Please detect Me",
        //   date: "2019/2/10",
        //   src: "https://www.openprocessing.org/sketch/667447",
        //   cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail667447@2x.jpg"
        // }


      ]

    }
  },
  computed: {
    experiment(){
      return this.experiments[this.currentIndex]
    }
  },
  methods:{

  }
}
</script>

<style lang="sass">
.page-experiment
  .container
    max-width: 1600px
  iframe
    width: 100%
    height: 600px
  .nav-exprs
    height: 80vh
    overflow-Y: auto
    overflow-x: hidden
  .expr_nav
    // padding: 5px
    // display: inline-block
    // margin-right: 10px
    width: 100%
    transition: 0.5s
    &:hover
      background-color: #eee
    &.active
      background-color: #ddd
      .cover_sm
        filter: brightness(1)
        span
          background-color: white
          color: black
  .cover_sm
    // width: 240px
    width: 100%
    // padding-top: 50%
    color: rgba(white,0.2)
    padding: 35px 10px
    padding-bottom: 5px
    background-size: 100% auto
    cursor: pointer
    background-position: center center
    transition: 0.5s
    font-weight: 800
    
    &:hover
      background-size: 120%
      filter: brightness(1)
      color: white
    span
      padding: 0px 5px
      font-weight: 500
      // transition: 0.5s

</style>
