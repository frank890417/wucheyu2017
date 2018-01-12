<template lang="pug">
  .page-index
    .container
      .row
        .col-sm-12
          router-link(to="/") Back
      .row(v-if="work")
        .col-sm-12
          h1 {{work.title}} {{ $route.params.id }}
      .row
        .col-sm-12.col-content
          .cover
          p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni blanditiis laboriosam molestias facere qui quibusdam inventore eum? Autem ut nobis nesciunt quam expedita laudantium vel incidunt voluptas, earum in. Perferendis?
          h3 Project Information
          hr
          h3 Story
          p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil similique voluptatum veritatis consequuntur maxime, reprehenderit eius ipsum officia. Nisi doloremque vitae a vel ipsa, velit tempore? Aliquam, eaque tempora?Error magni, illo ex numquam praesentium natus quaerat architecto eum! Quod, temporibus perferendis, suscipit illum consectetur illo accusamus cum beatae inventore laborum sit velit vel doloribus. Mollitia quos optio exercitationem.Deleniti exercitationem consequuntur ea assumenda ducimus sit, voluptatibus libero tempora voluptate totam, facilis nostrum fugiat quidem unde perferendis aperiam! Fuga laudantium beatae odio ducimus id blanditiis nesciunt sit ullam nihil.
          img
          h3 Challenges
          p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero est deserunt, explicabo provident eveniet sapiente voluptas, quod ipsa consequatur, possimus accusamus doloremque in? Aspernatur vel libero officiis perspiciatis maiores eaque!Inventore beatae architecto vitae veritatis qui minima illum reiciendis itaque doloribus laudantium. Molestiae cumque amet ipsam fugit non et deserunt, illum nisi repellendus deleniti odio molestias voluptas. Minus, id praesentium.Quibusdam et perferendis dicta minus sapiente quisquam quidem mollitia ipsa rerum odio, architecto itaque magnam rem tempora quas iusto eveniet vel porro, fugiat nobis adipisci. Facere quidem ut dolores cum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde rem obcaecati veniam fugit quae quibusdam, amet ut nulla voluptatum, quaerat delectus, laudantium nam numquam hic. Maxime sapiente cum quo nisi.Exercitationem cumque earum hic ullam perferendis? Temporibus, tempore! Voluptatum sit sequi obcaecati a labore, incidunt nihil, soluta sapiente commodi porro saepe! Ab nisi fugit voluptate, quasi incidunt sunt ipsa. Enim?Sunt impedit nesciunt natus exercitationem eligendi, porro voluptatem sit soluta placeat quae perspiciatis sed commodi magnam amet voluptas assumenda quibusdam adipisci deserunt quod? Unde, vel ipsam. Deleniti harum vel recusandae.Quas vel consequatur mollitia dicta facilis ullam vero voluptates magni quia doloremque at facere labore, veniam illum animi, ducimus dignissimos libero. Aspernatur similique modi est nostrum molestiae totam soluta neque!Ex tempore animi vel qui, quo vitae, accusantium eveniet amet tenetur maxime eos ipsa numquam ut possimus accusamus necessitatibus nobis voluptate expedita modi dolore deserunt. Adipisci aspernatur labore velit natus?
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
      return this.works.find((w)=>w.id==this.$route.params.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1, h2 
  font-weight: normal
h1
  font-weight: 900

.cover
  height: 400px
  background-color: #eee
  margin-top: 30px
  margin-bottom: 50px
.col-content
  img
    margin-top: 30px
    margin-bottom: 30px
    width: 100%
    min-height: 300px
    background-color: #eee

</style>
