<template lang="pug">
  .page.page-index
    .container-fluid

      .row.row-info
        .col-sm-12.col-info.text-center
          img.head.animated.fadeIn(src="/static/img/head.jpg")
          h1 Che Yu Wu
          h5.mt-1.mb-1 Interaction Designer, Creative Engineer, Graphic Designer
          pre MS in Integrated Digital Media @ New York University
          //- h2 Portfolio
          //- p "Designing is a way to discover the world for me."
          p Devoted to full-stack development, generative arts, immersive user experience design and tutoring.<br><br>
            //p In this portfolio are works of CIS visual identity, interactive web pages, 3D animation, and physical devices. Design is a means through which I explore the world. I thus intend to create unique works by exploiting innovation and all kinds of possibilities and draw inspiration from different professional fields. More work examples can be accessed on Monoame: http://wucheyu.monoame.com/

          .social-links
            a(href="https://www.linkedin.com/in/cheyuwu/?locale=en_US" target="_blank" title="Linkedin") 
              i.fab.fa-linkedin-in
            a(href="mailto:cyw345@nyu.edu" target="_blank" title="Envelope") 
              i.far.fa-envelope
            a(href="https://codepen.io/frank890417" target="_blank" title="Codepen") 
              i.fab.fa-codepen
            a(href="https://github.com/frank890417" target="_blank" title="Github") 
              i.fab.fa-github
            a(href="http://issuu.com/wucheyu/docs/2017_portfolio" target="_blank" title="Portfolio on ISSUU") 
              i.fas.fa-book

            

        .col-sm-12
          .row.row-work.mt-4.mb-5
            .container
              .row
                router-link.col-xs-12.col-sm-12.col-md-12.col-lg-6.col-work.animated.fadeIn.mb-5.mt-3(
                    v-for="(work,wid) in works", 
                    :to="`/project/${wid}`", 
                    :key="wid"
                    
                  )
                  .work(
                    :style="cssbg(work.cover)")
                  .tags
                    .tag(v-for="tag in work.cata") {{tag}}
                    h6 {{ work.date }}
                    
                  h5 {{work.title}}
                  
     
          

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    ...mapState(["works"])
  },
  methods:{
    cssbg(url) {
      let use_url = (url && url != '') ? url : '/img/default.jpg'
      let result = {
        'background-image': `url("${use_url} ")`
      }
      // console.log(result)
      return result
    }, 
    // colorShadow(color){
    //   return {
    //     'box-shadow': "0px 10px 50px -20px "+color
    //   }
    // },
    objCombine(a,b){
      return {
        ...a,...b
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.page-index
  .container
    max-width: 1320px
  a
    color: #333
  h1, h2 
    font-weight: normal

  h2
    background-image: linear-gradient(transparent 0% ,transparent 50%, #ffd428 50%)
    display: inline-block
  h1
    font-weight: 900
    
  h4
    font-size: 20px
    margin-top: 20px

  h5
    // color: white
    font-size: 22px
    opacity: 0.8
    border-left: solid 5px white
    // padding-left: 20px
    line-height: 1.5
    font-weight: 600
    width: 100%
    color: #333
    // &:first-letter
      // font-size: 30px
      // margin-right: 2px
  hr
    border-bottom: solid 4px #333
    width: 50px
    display: block


  h6
    // color: white
    opacity: 0.5
    letter-spacing: 1px
    margin-top: 10px



  .social-links
    a
      color: black
      margin-right: 10px
      font-size: 1.2rem
      transition: 0.5s
      &:hover
        transform: scale(1.05)
        
    
  //.col-info
    position: fixed
    left: 30px
    top: 50px
    padding: 20px
    // padding-right: 20px
    border-right: solid 1px rgba(black,0.08)
    // background-color: #333
    @media screen and (max-width: 700px)
      position: relative
      padding: 0
      left: 0
      top: 0
      border: none

    
  .row-info
    padding: 20px 50px
    display: flex
    justify-content: center
    // align-items: center
  .row-work
    padding: 20px
    text-align: left
    

  .page-index
    // background-color: black
    // color: white
    hr
      border-color: rgba(white,0.2)
    
  .head
    border-radius: 50%
    width: 150px
    margin-bottom: 40px
    margin-top: 20px
  .col-work
    padding: 0px 20px
    color: black

    &:hover
      text-decoration: none
    .work
      background-color: #eee
      height: 380px
      display: block
      border-radius: 2px
      // background-image: url(http://www.monoame.com/projects/proj_selinko/main.jpg)
      background-size: cover
      background-position: center center
      display: flex
      padding: 20px
      justify-content: center
      align-items: center
      position: relative
      box-shadow: 0px 10px 20px -5px rgba(black,0.2)
      transition-duration: 0.5s
      &:hover
        transform: translateY(-5px)
        box-shadow: 0px 20px 20px -5px rgba(black,0.2)
      
      &:before
        content: 'Explore'
        opacity: 0
        background-color: black
        position: absolute
        width: 100%
        height: 100%
        transition: 0.5s
        color: white
        display: flex
        justify-content: center
        align-items: center

        
      &:hover
        &:before
          opacity: 1
          background-color: rgba(black,0.7)
          letter-spacing: 1px
      h4
        text-decoration: none !important
        color: white
        opacity: 0
        transition: 0.5s
        position: relative
        z-index: 3
      &:hover
        h4
          opacity: 1
    .tags
      display: flex
      position: relative
      .tag
        padding: 2.5px 18px
        background-color: #eee
        color: #777
        // border: solid 1px #e6e6e6
        margin: 5px
        font-weight: 500
        border-radius: 50px
        margin-top: 25px
        font-size: 16px
      h6
        position: absolute
        // right: 0
        // float: right
        right: 0px
        top: 20px
        // bottom: -55px
        opacity: 0.4
        font-size: 14px
</style>
