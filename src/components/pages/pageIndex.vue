<template lang="pug">
  .page-index
    .container-fluid
      .row.row-info
        .col-sm-3.col-info.text-left
          img.head.animated.fadeIn(src="https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/24899776_1817815354903746_2986163026829760069_n.jpg?_nc_fx=ftpe7-4&oh=9a6c36baa3cb5925404b709015ba0cd6&oe=5AED4164")
          h1 Che Yu Wu
          h2 Portfolio
          hr
          p "Designing is a way to discover the world for me."
          p I am a visual designer and web page engineer of frontend and backend from Taiwan.
            |<br>Programming is a hobby and a career to me. In addition to the undergraduate training in electrical and computer engineering, I have had three years of experience in visual design. <br><br>
            | My professional ambition led me to establish Monoame, a design studio, at which I am responsible for planning, design, and development of dynamic web pages. Examples include music, photography, 3D animation, and games, which are worth all the brainstorming and time. To share my passion and knowledge in design and engineering, I opened online classes to introduce interested learners to the industry. 
          //p In this portfolio are works of CIS visual identity, interactive web pages, 3D animation, and physical devices. Design is a means through which I explore the world. I thus intend to create unique works by exploiting innovation and all kinds of possibilities and draw inspiration from different professional fields. More work examples can be accessed on Monoame: http://wucheyu.monoame.com/
          a(href="http://issuu.com/wucheyu/docs/2017_portfolio" target="_blank") (ISSUU)
          

        .col-sm-9.offset-sm-3.offset-xs-0
          .row.row-work
            .container
              .row
                router-link.col-xs-12.col-sm-6.col-md-6.col-work.animated.fadeIn(
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1, h2 
  font-weight: normal
h1
  font-weight: 900
  
h4
  font-size: 20px
  margin-top: 20px

h5
  // color: white
  margin-top: 15px
  font-size: 22px
  margin-bottom: 30px
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

h6
  // color: white
  opacity: 0.5
  letter-spacing: 1px
  float: right
  margin-top: 10px


.col-info
  position: fixed
  left: 50px
  top: 50px
  padding: 20px
  border-right: solid 1px rgba(black,0.08)
  // background-color: #333

  
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
  width: 180px
  margin-bottom: 40px
  margin-top: 50px
.col-work
  padding: 18px
  color: black

  &:hover
    text-decoration: none
  .work
    background-color: #eee
    height: 320px
    display: block
    border-radius: 3px
    // background-image: url(http://www.monoame.com/projects/proj_selinko/main.jpg)
    background-size: cover
    background-position: center center
    display: flex
    padding: 30px
    justify-content: center
    align-items: center
    position: relative
    box-shadow: 0px 15px 20px -5px rgba(black,0.2)
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
      padding: 4px 20px
      background-color: #eee
      // border: solid 1px #e6e6e6
      margin: 5px
      border-radius: 50px
      margin-top: 20px
    h6
      position: absolute
      // right: 0
      // float: right
      right: 0px
      top: 20px
      // bottom: -55px
      opacity: 0.5
</style>
