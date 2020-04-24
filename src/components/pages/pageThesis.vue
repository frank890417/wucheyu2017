<template lang="pug">
  .page.page-thesis.stop-scrolling 
    .container-fluid
      .row
        .col-sm-3.text-left.pt-5
          h5 IDM Thesis | Che-Yu Wu
          h2 Intuitive music expression
          p A web-based tool that allowed people to work together, edit and change melody in an intuitive way.
          p Find the way to express and made music in more intuitive and understandable, playful way.
          a.btn.btn-secondary(href="https://www.youtube.com/watch?v=V32BcSGfJUk" target="_blank") Midterm Presentation
          br
          br
          a.btn.btn-secondary(href="https://cheyuwu.wordpress.com" target="_blank") Update Plans
          
        .col-sm-9
          CodeArea( :scriptFiles="scriptFiles",
                :hidecode="true", @scroll.stop="()=>{}")
  
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