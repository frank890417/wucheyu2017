<template lang="pug">
.page.page-experiment.pt-5
  .container-fluid
    .row(v-for='expr in experiments').mb-5
      .col-sm-4.text-center
        h4 {{expr.title}}
        pre {{expr.date}}
      .col-sm-8
        iframe(:src="expr.src" )
        
</template>

<script>
export default {
  data(){
    return {
      experiments: [
        
        {
          title: "Genrative Music String",
          date: "2018/10/21",
          src: "https://www.openprocessing.org/sketch/611472"
        },
        {
          title: "Genrative Music Matrix",
          date: "2018/10/9",
          src: "https://codepen.io/frank890417/pen/PypZeZ"
        },
        {
          title: "Drawing Machine",
          date: "2018/10/28",
          src: "https://www.openprocessing.org/sketch/616561"
        },
        {
          title: "FUI - DataPoints",
          date: "2018/9/29",
          src: "https://www.openprocessing.org/sketch/598254"
        },
      ]

    }
  }
}
</script>

<style lang="sass">
.page-experiment
  iframe
    width: 100%
    height: 600px
</style>
