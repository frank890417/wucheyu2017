<template lang="pug">
  .page-edit
    .container-fluid
      .row
        .col-sm-3.col-list
          ul.list-group.text-left(style="height: 600px; overflow: scroll")
            li.list-group-item(v-for="(w,wid) in works", @click="nowId=wid", :class="{active:nowId==wid}")
              .row
                .col-10 {{w.title}}
                .col-2
                  .btn.btn-danger.btn-xs(@click="removeItem(wid)") -
            li.list-group-item(@click="addItem") + Add Item 
          button.btn.btn-primary.form-control(@click="saveAll") Save all!
        .col-sm-9.offset-3(v-if="work", :key="nowId")
          .container.text-left
            .row
              .col-sm-12
                h2 {{work.title}}
                  router-link.btn.btn-secondary.float-right(:href="'/project/'+nowId", target="_blank") Open Project
                hr
                
            .row
              .col-sm-4
                el-form(label-width="100px")
                  el-form-item(label="title")
                    el-input(v-model="work.title")
                  el-form-item(label="date")
                    el-input(v-model="work.date")
                  el-form-item(label="link")
                    el-input(v-model="work.link")
                  el-form-item(label="client")
                    el-input(v-model="work.client")
                  el-form-item(label="Catagory")
                    el-input(v-model="work.type")
                  el-form-item(label="類別")
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
                  el-form-item(label="work")
                    el-input(v-model="work.work")
                  el-form-item(label="cover")
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
              .col-sm-8
                el-form
                  el-form-item(label="")
                    VueEditor.ve(:id ="'content'", v-model="work.content" ,
                      :useCustomImageHandler="true",
                      @imageAdded="handleImageAdded" ,
                      style="height: 600px;margin-bottom: 50px")
                    //- el-input(v-model="work.content", type="textarea")
              .col-sm-12
          
</template>

<script>
import { mapState } from 'vuex'
import { VueEditor } from 'vue2-editor'
export default {
  components: {VueEditor},
  data () {
    return {
      nowId: 0,
      defaut_hashtags: [
        "UI","UX","CIS","Graphics","Website","Installation Art","3D","Animation","Project","Hackthon"
      ]
    }
  },
  computed:{
    ...mapState(['works']),
    work(){
      if (this.nowId!=-1)
        return this.works[this.nowId]
      return null
    }
  },
  methods: {
    save(){
      var workRef = window.firebase.database().ref('works/' + this.nowId);
      console.log(this.work)

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
<style scoped lang="sass">

h1
  font-weight: 900
.page-edit
  padding-top: 50px
.cover
  height: 400px
  background-color: #eee
  margin-top: 30px
  margin-bottom: 50px
.col-list
  position: fixed
.col-content
  img
    margin-top: 30px
    margin-bottom: 30px
    width: 100%
    min-height: 300px
    background-color: #eee
.list-group-item
  cursor: pointer
</style>
