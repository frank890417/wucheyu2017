<template lang="pug">
  .page.page-works
    .container-fluid

      //.row 
        .col-sm-12
          .catas
            .cata(@click="currentTag=''", :class="{active: !currentTag}") All
            .cata(v-for="tag in defaut_hashtags",
                  @click="currentTag = tag",
                 :class="{active: currentTag==tag}") {{tag}}
      
      .row.row-work.mb-3.text-left
        router-link.col-xs-12.col-sm-12.col-md-6.col-lg-6.col-xl-4.col-work.animated.fadeIn.p-0(
            v-for="(work,wid) in sortedWorks", 
            :to="`/project/${getProjectName(work.title)}`", 
            :key="work.uid",
            v-if="!currentTag || work.cata.indexOf(currentTag)!=-1",
          )
            
          .work(
            :style="cssbg(work.cover)")
            video(v-if="work.video" :src="work.video" muted autoplay loop)
            .fixed
              h3.mt-4 {{work.title}}
              h6.mt-3 {{work.client}}
          
          //.tags
            .tag(v-for="tag in work.cata") {{tag}}

</template>

<script>
import { mapState } from 'vuex'
import socialLinks from '@/components/socialLinks'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      currentTag: ""
    }
  },
  computed: {
    ...mapState(["works","defaut_hashtags"]),
    sortedWorks(){
      return Object.entries(this.works)
                   .sort((a,b)=>a[1].order-b[1].order).map(p=>({uid: p[0],...p[1]}))
                   .filter(w=>w.show)
    }
  },
  methods:{
    getProjectName(title){
      return title.replace(/[\ ]/g,'_').replace(/\//g,'_').replace(/\&/g,'_')
    },
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
  },
  components: {
    'social-links': socialLinks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.page-works

  .container
    max-width: 1400px

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

  h3
    font-size: 2.8rem
    font-weight: 600
    line-height: 1.2

  h5
    // color: white
    font-size: 20px
    opacity: 0.8
    border-left: solid 5px white
    // padding-left: 20px
    line-height: 1.4
    font-weight: 600
    width: 100%


    // &:first-letter
      // font-size: 30px
      // margin-right: 2px

  p
    color: white

  hr
    border-bottom: solid 3px #333
    width: 50px
    display: block


  h6
    opacity: 0.6
    // letter-spacing: 1px
    margin-top: 3px
    font-weight: 500
    line-height: 1.2

  .catas
    .cata
      display: inline-block
      background-color: #eee
      // border: 1px solid #eee
      font-size: 1rem
      margin: 5px
      border-radius: 50px
      padding: 3px 18px
      cursor: pointer
      transition: 0.5s
      font-weight: bold
      color: #666
      &:hover
        background-color: #eee
      &.active
        background-color: #ff8c11
        color: white

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
    padding: 10px 40px
    filter: saturate(100%)
    color: black

    &:hover
      text-decoration: none
      filter: saturate(100%)
    .work

      background-color: #eee
      height: 440px
      display: block
      color: white
      text-align: left
      // border-radius: 4px
      // background-image: url(http://www.monoame.com/projects/proj_selinko/main.jpg)
      background-size: cover
      background-position: center center
      display: flex
      padding: 1vw
      justify-content: center
      align-items: center
      position: relative
      box-shadow: 0px 10px 20px -10px rgba(black,0.25)
      // border: solid 5px #333
      transition-duration: 0.5s
      overflow: hidden
      border-botton: solid 10px black
      video
        position: absolute
        left: 50%
        top: 50%
        height: 100%
        transform: translate(-50%,-50%)
      .fixed
        text-align: left
        pointer-events: none
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        transition: 0.5s
        padding: 30px
        color: transparent
        // h3
          // -webkit-text-stroke: 1px white
        h3
          transition: 0.5s
        h6
          color: transparent
          transition: 0.5s
      &:hover
        // transform: translateY(-5px)
        box-shadow: 0px 30px 20px -20px rgba(black,0.2)
        background-size: cover
        color: white
        .fixed
          background-color: rgba(black,0.88)
          h3
            color: white
          h6
            color: white
      // &:before
      //   content: 'Explore'
      //   opacity: 0
      //   background-color: black
      //   position: absolute
      //   width: 100%
      //   height: 100%
      //   transition: 0.5s
      //   color: white
      //   display: flex
      //   justify-content: center
        // align-items: center

        
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
        font-size: 15px
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
