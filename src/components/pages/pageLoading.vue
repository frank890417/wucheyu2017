<template lang="pug">
.page-loading
  img.animated.fadeIn(src="/static/img/cover.png")
  
</template>

<script>
export default {

}
</script>

<style lang="sass">
.page-loading
  position: fixed
  left: 0
  top: 0
  width: 100vw
  height: 100vh
  background-color: #191817
  z-index: 4
  display: flex
  justify-content: center
  align-items: center
  img
    width: 100%
    max-width: 800px
</style>
