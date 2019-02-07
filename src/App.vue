<template lang="pug">
  #app
    .container-fluid
      .row
        .col-sm-12
          nav(v-if="!$route.path.includes('manage') && !$route.path.includes('/project/')")
            //- router-link(to="/" :class="{active: $route.path=='/'}") Index
            //- router-link(to="/about" :class="{active: $route.path=='/about'}") About
            router-link(to="/" :class="{active: $route.path=='/'}") Works
            router-link(to="/experiment" :class="{active: $route.path=='/experiment'}") Experiments
            router-link(to="/research" :class="{active: $route.path=='/research'}") Research
            a(href="/static/Che-Yu Wu Resume.pdf" target="blank" :class="{active: $route.path=='/resume'}") Resume
    transition(name="page" , mode="out-in")
      pageLoading(v-if="loading")
    transition(name="page" , mode="out-in")
      router-view(:key="$route.path")
    .row.copyright
      .col-sm-12.mt-5.pt-5.pb-5
        h5 Copyright© Che-Yu Wu, 2019
        .text-center.mt-4
          social-links
</template>

<script>
import pageLoading from '@/components/pages/pageLoading'
import socialLinks from '@/components/socialLinks'
import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    pageLoading,
    'social-links': socialLinks
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="sass">

body
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  // color: #2c3e50
  background-color: #fff
  overflow-y: scroll
  // height: auto
  // height: 100vh
  // overflow: hidden
  // border: solid 15px white

h1,h2,h3,h4,h5,h6
  font-weight: bold

nav
  margin: 30px
  font-weight: bold
  a
    color: black
    margin-left: 20px
    margin-right: 20px
    transition: 0.5s

    &:hover,&.active
      border-bottom: solid 2px
      text-decoration: none
      color: black
    &.active
      color: #ff8c11
  
  // margin-top: 60px

.page-enter-active,.page-leave-active
  transition: 0.5s
  // &:before
  //   display: block
  //   content: ""
  //   width: 100vw
  //   height: 100vh
  //   background-color: #222
  //   position: fixed
  //   top: 100vh
  //   left: 0
  //   transition: 0.5s
  //   transition-timing-function: ease-in
  //   z-index: 100
.page-leave-active
  &:before
    transition-timing-function: ease-out
.page-enter
  opacity: 0
  &:before
    top: 0vh
.page-enter-to
  opacity: 1

  &:before
    top: 100vh

.page-leave
  opacity: 1
  // &:before
  //   top: -100vh
.page-leave-to
  opacity: 0
  // &:before
  //   top: 0






.social-links
  a
    color: black
    margin-left: 6px
    margin-right: 6px
    font-size: 1.2rem
    transition: 0.5s
    &:hover i
      transform: scale(1.2)
        
.copyright
  opacity: 0.6
  h5
    font-weight: normal


</style>
