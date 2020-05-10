<template lang="pug">
  .page-art
    .container-fluid
      .row.mt-4
        .col-12
          h1 Generative Arts
          p Keep exploring the world with curious mind and imaginations.
      .row.mt-4
        a.col-sm-6.col-md-4.col-lg-3.animated.fadeIn(v-for="item in sketches", :href="`https://www.openprocessing.org/sketch/${item.visualID}`",
                target="_blank")
          img(:src="`https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail${item.visualID}@2x.jpg`")
          h5.mb-4 \#{{item.title}}
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  data(){
    return {
      // userData: {}
    }
  },
  computed:{
    ...mapState(['userData']),
    sketches(){
      if (this.userData.user){
        let results= this.userData.user.visuals.filter(p=>p.pinnedOn)
        results.sort((a,b)=>a.createdOn>b.createdOn?-1:1)
        return results
      }
      return []
    }
  },
  created(){
    
  }
}
</script>
<style lang="sass">
.page-art
  a
    // padding: 15px
  a h5
    // background-color: black
    // color: white
    color: black
    margin-top: 10px
    font-weight: 500
    font-size: 1.1rem
    text-align: left
  img
    width: 100%
    height: auto
    box-shadow: 0px 40px 30px -20px rgba(black,0.1)
    
  
  
</style>