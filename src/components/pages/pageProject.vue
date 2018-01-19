<template lang="pug">
  .page-project
    .container-fluid
      .row
        .col-sm-12
          .cover(:style="cssbg(work.cover)")
            router-link.btn-back(to="/") Back
      .container.content-area
        .row(v-if="work")
          .col-sm-12
            h1 {{work.title}}
        .row
          .col-sm-12.col-content
            ul.text-left
              li 
                label Client
                span {{work.client}}
              li 
                label Date
                span {{work.date}}
              li 
                label Category
                span {{work.type}}
              li 
                label Responsibilities
                span {{work.work}}
            p.text-left(v-html="processHTML(work.content)")
          //- h3 Project Information
      .row
        .col-sm-6
          router-link(:to="`/project/${projnav.pre.id}`", v-if=" projnav.pre.id") Previous Work
          router-link(:to="`/project/${projnav.nxt.id}`", v-if=" projnav.nxt.id") Next Work
          
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState(['works']),
    work(){  
      return this.works[this.$route.params.id]
    },
    projnav(){
      let current =  Object.keys(this.works).find((o,id)=>o==this.$route.params.id)
      let pre =  Object.keys(this.works)[current-1]
      let nxt =  Object.keys(this.works)[current+1]
      return {
        pre: {
          id: pre,
          work: this.works[pre]
        },
        nxt:  {
          id: nxt,
          work: this.works[nxt]
        }
      }
    }
  },
  methods: {
    processHTML(text){
      return text.replace(/\n/g,'<br>')
    },
    cssbg(url) {
      let use_url = (url && url != '') ? url : '/img/default.jpg'
      let result = {
        'background-image': `url("${use_url} ")`
      }
      // console.log(result)
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.page-project
  padding-bottom: 20vh
    
  .content-area
    padding-top: 50px
  .btn-back
    position: fixed
    left: 0
    top: 0
    background-color: black
    color: white
    padding: 10px
  h1, h2 
    font-weight: normal
  h1
    font-weight: 900
    margin-bottom: 30px

  .cover
    height: 60vh
    min-height: 60vh
    background-color: #eee
    background-position: center center
    background-attachment: fixed
    // margin-top: 30px
    margin-bottom: 50px
    background-size: cover
    margin-left: -30px
    margin-right: -30px
    margin-bottom: 30px
    margin-top: -30px

  .content-area
    img
      // margin-top: 30px
      // margin-bottom: 30px
      width: 100%
      // min-height: 300px
      background-color: #eee

  label
    width: 150px
    font-weight: 600
    &:after
      content: ":"
</style>
