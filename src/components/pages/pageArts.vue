<template lang="pug">
  .page-art
    .container-fluid
      .row.mt-5
        .col-12
          h1 Generative Arts
          p Keep exploring the world with curious mind and imaginations.
      .row.mt-5
        a.col-sm-6.col-md-4.col-lg-3(v-for="item in sketches", :href="`https://www.openprocessing.org/sketch/${item.visualID}`",
                target="_blank")
          img(:src="`https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail${item.visualID}@2x.jpg`")
          h5.mb-4 {{item.title}}
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  data(){
    return {
      userData: {}
    }
  },
  computed:{
    sketches(){
      if (this.userData.user){
        let results= this.userData.user.visuals.filter(p=>p.pinnedOn)
        results.sort((a,b)=>a.createdOn>b.createdOn?-1:1)
        return results
      }
      return []
    }
  },
  mounted(){
    $.getJSON("/static/sketchs.json",(data)=>{
      this.$set(this,"userData",data)
      console.log(data)
    })
  }
}
</script>
<style lang="sass">
.page-art
  a h5
    // background-color: black
    // color: white
    color: black
    margin-top: 10px
    font-weight: 500

  img
    width: 100%
    height: auto
    
  
  
</style>