<template lang="pug">
  .page-edit.page-project-edit
    .container-fluid.pt-5
      .row
        .col-sm-3.col-list
          //ul.breadcrumb
            li.breadcrumb-item
              router-link(to="/", target="_blank") 管理
            li.breadcrumb-item 編輯專案
          el-button.pt-4.pb-4(@click="addItem" type="primary" style="width: 100%") + Add Item 
          ul.list-group.text-left
            li.list-group-item(v-for="(w,wid) in sortedWorks", @click="nowId=w.uid", :class="{active:nowId==w.uid}")
              .row
                .col-8
                  span {{wid+1}}. 
                  span {{w.title}}
                .col-2
                  .btn.btn-danger.btn-xs(@click="removeItem(wid)") -
                .col-2
                  el-input.input-order-number(type="number" v-model="w.order")
        .col-sm-3
          
        .col-sm-9(v-if="work", :key="nowId")
          .container-fluid.text-left
            .row
              .col-sm-12
                
                h2
                  .row
                    .col-9
                      el-input.input-title(v-model="work.title")
                    .col-3
                      router-link.btn.btn-secondary.float-right(:to="'/project/'+nowId", target="_blank") Open Project
                      button.btn.btn-primary.float-right.mr-2(@click="saveAll") Save
                hr
                
            .row.pt-3
              .col-sm-3
                el-form(label-width="60px")
                  //el-form-item(label="title")
                    el-input(v-model="work.title")
                  //- el-form-item(label="順序")
                    el-input(v-model="work.order")
                  el-form-item(label="連結")
                    el-input(v-model="work.link")
                  el-form-item(label="顏色")
                    el-color-picker(v-model="work.color")
                  el-form-item(label="客戶")
                    el-input(v-model="work.client")
                  el-form-item(label="類別")
                    el-input(v-model="work.type")
                  el-form-item(label="Tag")
                    el-select(v-model="work.cata"
                              multiple
                              filterable
                              allow-create
                              default-first-option
                              placeholder="請選擇Hashtag或建立")
                      el-option(
                        v-for="item in defaut_hashtags"
                        :key="item"
                        :label="item"
                        :value="item")
                  el-form-item(label="職責")
                    el-input(v-model="work.work")
                  el-form-item(label="封面")
                    el-input(v-model="work.cover")
                    .row
                      .col-sm-3
                        img(v-if="work.cover" :src="work.cover" class="avatar", width="100px")
                      .col-sm-9
                        el-upload(
                          action="string"
                          class="avatar-uploader"
                          :http-request="uploadImage"
                          :show-file-list="false"
                        )
                          i(class="el-icon-plus avatar-uploader-icon")
                  el-form-item(label="日期")
                    el-input(v-model="work.date")
              .col-sm-9
                el-form
                  el-form-item(label="")
                    VueEditor.ve(:id ="'content'", v-model="work.content" ,
                      :useCustomImageHandler="true",
                      @imageAdded="handleImageAdded" ,
                      style="height: 700px;margin-bottom: 50px")
                    //- el-input(v-model="work.content", type="textarea")
          
</template>

<script>
import { mapState } from 'vuex'
import { VueEditor } from 'vue2-editor'
export default {
  components: {VueEditor},
  data () {
    return {
      nowId: 0,
      
    }
  },
  computed:{
    ...mapState(['works','defaut_hashtags']),
    work(){
      if (this.nowId!=-1)
        return this.works[this.nowId]
      return null
    },
    sortedWorks(){
      let result= Object.entries(this.works)
                   .sort((a,b)=>a[1].order-b[1].order).map(p=>({uid: p[0],...p[1]}))
      result.forEach((w,wid)=>{
        w.order = wid
      }) 
      return result     
    }
  },
  mounted(){
    Object.entries(this.works).forEach((w,wid)=>{
      if (!w[1].order){
        this.$set(w[1],"order",wid+1)
        // w[1].order=wid
      }
    })
  },
  methods: {
    save(){
      var workRef = window.firebase.database().ref('works/' + this.nowId);
      // console.log(this.work)

      workRef.set(this.work)
    },
    addItem(){
      var workRef = window.firebase.database().ref('works');
      workRef.push({
        title: "新項目"
      })
      
    },
    removeItem(wid){
      this.$confirm('你確定要刪除專案嗎', '刪除', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var workRef = window.firebase.database().ref('works/'+wid);
        workRef.remove()
        this.$message({
          type: 'success',
          message: '已刪除!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });

      
    },
    saveAll(){

      var worksRef = window.firebase.database().ref('works');
      // console.log(this.work)
      worksRef.set(this.works)
      this.$message('儲存成功！');

    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    uploadImage(event){
      var storage = firebase.app().storage("gs://wucheyu-portfolio.appspot.com");
      var storageRef = storage.ref();
      // Child references can also take paths delimited by '/'
      var spaceRef = storageRef.child(`images/${this.work.title}/cover.jpg`);
      // console.log(event.file)
      let _this = this
      spaceRef.put(event.file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
        console.log(snapshot.downloadURL)
        _this.$message('封面上傳成功');
        _this.work.cover=snapshot.downloadURL
      });
      
    }, 
    handleImageAdded(file, Editor, cursorLocation) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      // console.log("get picture!")
      // var formData = new FormData();
      // formData.append('file', file)
      // console.log(file)


      var storage = firebase.app().storage("gs://wucheyu-portfolio.appspot.com");
      var storageRef = storage.ref();
      // Child references can also take paths delimited by '/'
      var randomFileName = Math.random().toString(36).substring(2)
      var spaceRef = storageRef.child(`images/${this.work.title}/img/${randomFileName}.jpg`);
      // console.log(event.file)
      let _this = this
      spaceRef.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
        console.log(snapshot.downloadURL)
        _this.$message('圖片上傳成功');
        Editor.insertEmbed(cursorLocation, 'image', snapshot.downloadURL);
        // _this.work.cover=snapshot.downloadURL
      });

     
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.page-project-edit
  overflow: hidden
  h1
    font-weight: 900
  .page-edit
    padding-top: 50px
  .cover
    height: 400px
    background-color: #eee
    margin-top: 30px
    margin-bottom: 50px
  // .col-list
    // position: fixed
  .col-content
    img
      margin-top: 30px
      margin-bottom: 30px
      width: 100%
      min-height: 300px
      background-color: #eee
  .list-group-item
    cursor: pointer
    font-size: 1rem
    font-weight: 600
  label.el-form-item__label
    font-weight: 900
    
  .el-input.input-title
    font-size: 2.4rem
    color: black
    height: auto
    input
      border: none
      font-weight: bold
      color: #333
    .el-input__inner
      border: none
      padding: 0

  .col-list
    position: fixed
    background-color: #333
    color: white
    height: 100vh
    left: 0
    top: 0
    z-index: 10
    padding: 0
    display: flex
    flex-direction: column-reverse
    justify-content: space-between
    padding-top: 5vh
    .el-button
      margin: 0
    .list-group
      overflow: scroll
    .list-group-item
      background-color: transparent
      border: none
      border-bottom: 1px solid rgba(white,0.3)
      &:hover
        background-color: rgba(#aaa,0.3)
      &.active
        background-color: rgba(#666,1)
    .list-group-item
      .btn.btn-danger
        opacity: 0
      &:hover
        .btn.btn-danger
          opacity: 1
  .input-order-number
    background-color: transparent
    padding: 0
    input
      background-color: transparent
      padding: 0
      border: solid 1px rgba(white,0.3)
      text-align: center
      color: white

</style>
