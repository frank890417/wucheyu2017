<template lang="pug">
.page.page-experiment.pt-5
  .container
    .row
      .col-sm-2.nav-exprs
        .expr_nav.text-left(v-for='(expr,exprid) in experiments',
          :class="{active: exprid==currentIndex}"
          @click="currentIndex = exprid").mb-3
          .cover_sm(:style="{'background-image': 'url('+expr.cover+')'}")
          
          h5.mt-2 {{expr.title}}
          //- pre {{expr.date}}
      .col-sm-10
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
          src: "https://codepen.io/frank890417/pen/PypZeZ?default-tab=result",
          cover: "https://screenshot.codepen.io/396078.PypZeZ.4456fe6c-85d0-4d8c-a120-ae4372a0f3e5.png"
        },
        {
          title: "Fern",
          date: "2019/4/1",
          src: "https://www.openprocessing.org/sketch/700092",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail700092@2x.jpg"
        },
        {
          title: "Drawing Machine",
          date: "2018/10/28",
          src: "https://www.openprocessing.org/sketch/616561",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail616561@2x.jpg"
        },
        {
          title: "FUI - DataPoints",
          date: "2018/9/29",
          src: "https://www.openprocessing.org/sketch/598254",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail598254@2x.jpg"
        },
        {
          title: "Universe",
          date: "2019/2/27",
          src: "https://www.openprocessing.org/sketch/676343",
          cover: "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail676343@2x.jpg"
        },
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
    max-width: 1550px
  iframe
    width: 100%
    height: 600px
  .nav-exprs
    height: 80vh
    overflow-Y: scroll
  .expr_nav
    padding: 10px
    // display: inline-block
    // margin-right: 10px
    width: 100%
    transition: 0.5s
    &:hover
      background-color: #eee
    &.active
      background-color: #ddd
  .cover_sm
    // width: 240px
    width: 100%
    padding: 50%
    background-size: cover
    cursor: pointer
    background-position: center center

</style>
