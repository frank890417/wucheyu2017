<template lang="pug">
  .page.page-thesis.stop-scrolling 
    .container-fluid
      .row
        .col-sm-3.text-left.pt-5
          h5 IDM Thesis | Che-Yu Wu
          h2 Intuitive music expression
          p A web-based tool that allowed people to work together, edit and change melody in an intuitive way.
          p Find the way to express and made music in more intuitive and understandable, playful way.
          br
          a.btn.btn-secondary(href="https://www.youtube.com/watch?v=V32BcSGfJUk" target="_blank") Midterm Presentation
          br
          br
          a.btn.btn-secondary(href="https://docs.google.com/document/d/1aBBxB2LtJBwy-D9WFnjrVTo9xy54mTxnAAT7VV6M5KM/edit?usp=sharing", target='_blank') Latest Thesis Draft
          br
          br
          a.btn.btn-secondary(href="https://cheyuwu.wordpress.com" target="_blank") Update Logs
          
        .col-sm-9
          p5-vue-mirror( :scriptFiles="scriptFiles",
                   @scroll.stop="()=>{}" , :hidecode="true")
                    //:hidecode="true"
  
</template>

<script>

export default {
  data(){
    return {
      scriptFiles: ['https://cdnjs.cloudflare.com/ajax/libs/tone/14.5.40/Tone.js',
                    '/static/thesis/module.js','/static/thesis/units.js','/static/thesis/main.js']
    }
  }
}
</script>
<style lang="sass">
.page-thesis
  min-height: calc(100vh - 200px)
  overflow: hidden
  iframe
    height: calc(100vh - 100px)


</style>