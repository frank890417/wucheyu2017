<template lang="pug">
  .page-index
    .container
      .row
        .col-sm-12
          img.head.animated.fadeIn(src="https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/24899776_1817815354903746_2986163026829760069_n.jpg?_nc_fx=ftpe7-4&oh=9a6c36baa3cb5925404b709015ba0cd6&oe=5AED4164")
          h1 Che Yu Wu
          h2 Portfolio
          hr
          p "Designing is a way to discover the world for me."
      .row
        //.col-sm-12
          h4 Works included
          ul
            li Remy Martin &amp; Selinko's App Design
            li n3xtcon CIS &amp; Website Development
            li 
      .row
        router-link.col-sm-4.col-work(v-for="work in works", :to="`/project/${work.id}`")
          .work {{i}}
      .row
        .col-sm-12
          hr
          

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(["works"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1, h2 
  font-weight: normal
h1
  font-weight: 900
.head
  border-radius: 50%
  width: 200px
  margin-bottom: 40px
.col-work
  padding: 10px
  .work
    background-color: #eee
    height: 200px
    display: block
    background-image: url(http://www.monoame.com/projects/proj_selinko/main.jpg)
    background-size: cover
</style>
