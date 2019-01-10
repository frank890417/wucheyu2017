<template lang="pug">
  .page.page-about
    .container-fluid.pt-5.content
      .row
        .col-sm-12
          //- h3 吳哲宇 (Che-Yu Wu)
          
          ul.yearlist

            li
              .year 2018-
              h4 紐約大學
              h5 Integrated Digital Media研究助理 
              p 
                ul 
                  li Creative Coding TA
                  
            li
              .year 2018 
              h4 清大科技藝術研究中心
              h5 系統開發工程師
              p 
                ul 開發印象清華網站與作品即時互動系統(socket.io)
                  li 蘑菇總動員
                  li 英文8-2
                
            li
              .year 2016 - 2018
              h4 Hahow 好學校
              p
                ul
                  li 「動態互動網頁程式入門」(2016) 
                  li 「動態互動網頁特效入門」(2018) 課程
                  li 累積超過6900位學生
            li
              .year 2015 - 2018
              h4 墨雨設計
              p 創辦人 / 設計師 / 全端工程師
                ul
                  li 2018 n3xtcon 品牌設計與網頁開發
                  li 2017 - 2018 Dschool 台大創新設計學院官網 設計/開發
                  li 2017 工研院綠能所  -  家庭用電家計簿 網頁設計 / 開發
                  li 2017 質。感  台中紀事展覽網頁開發
                  li 2017 鴻海集團 睿軒檢驗 / 睿田生技 官網開發
                  li 2017 北市捷運局 台北聲音地景計畫 互動網頁設計/開發
                  li 2017 - 2018 雜學校網頁 設計/開發
                  li 2017 交大創業日論壇活動 CIS / 海報設計
                  li 2016 花旗聯合勸募官網 網頁設計/開發
                  li 2016 複雜生活節 網頁設計/開發
                  li 2015 Selinko + Remy Mertin 中國活動 APP UI 設計
                  li 2014 - 2016 國際美容化妝品展 網頁設計/開發
                  li 2015 世界健康大會 網頁設計
                  li 2014 長庚石墨烯醫療技術發表 3D動畫製作
            li
              .year 2013 - 2015
              h4 翔虹資訊顧問有限公司
              h5 製圖、自動化開發
              p
                ul
                  li 面板製造自動化製圖程式開發
                  li 工廠設備彩現圖製作
                  li 電梯3D目錄用彩現圖製作

            li
              .year 2013 - 2014
              h4 三采文化 書籍介紹影片剪輯
            li
              .year 2014
              h4 交大學聯會 行銷部長
              p
                ul
                  li 交大文宣改造計畫
                  li 交大聖誕樹
                  a(href="https://www.ettoday.net/news/20141222/442072.htm") 新聞

            li
              .year 2013 - 2017
              h4 國立交通大學電機工程學系
              p Focus on Software Development and communication
            li
              .year 2008 - 2012
              h4 宏碁數位創作獎
              p 
                ul
                  li 第五屆 國中組 首獎
                  li 第六屆 國中組 首獎
                  li 第七屆 高中普通組 首獎+評審團大獎
                  li 第八屆 高中普通組 優勝
                  li 第九屆 高中專業組 首獎+評審團大獎
</template>

<script>
import p5 from 'p5'
export default {
  mounted(){
    var cnv 
    var points = []

    var notes = []
    function setup(){
      cnv = createCanvas(windowWidth,windowHeight)
      cnv.canvas.classList.add("background")
      // cnv.rect(0,0,100,100)
      frameRate(60)
      
      notes = [{
        id: 1,
        y: 50,
        note: 50
      }]
    }

    function bars(){
      noFill()
      stroke(0,0,0,60)
      textSize(8)
      
      for(var i=0;i<10;i++){
        let value = noise(i + frameCount/20)*200
        rect(i*20, -20,3,-value)
        text( parseInt(value),i*20,0)
        
      }
    }
    function blockCirs(){
      stroke(0,0,0,50)
      let span =30
      for(var i=0;i<3;i++){
        for(var o=0;o<3;o++){
          ellipse(-i*span,-o*span,5,5)
          // line(-i*span,-o*span,-()i*span,-o*span)
        }
      }
    }

    function draw(){
      
      
      var pointCount = 3 + parseInt(window.scrollY/500)
      
      fill(255,255,255,50)
      rect(0,0,windowWidth,windowHeight)
      // fill(0)
      // rect(0,0,100,100)
      
    
      
      
      
      
      
      push()
      
        translate(windowWidth*0.7,windowHeight/2)
      
        //draw polygon
        strokeWeight(1)
        stroke(0)
        noStroke()
      
        
        
        let hue = 0  + parseInt(window.scrollY/10)
        let c = color("hsl("+hue+",90%,50%)")
        fill(c)
        // rect(0,0,100,100)
    
        let deltaSpan = 0
        beginShape()
        for(var i=0;i<=pointCount;i++){
          let r = 400-window.scrollY/20
          let delta = (360/pointCount)
          let angle1 = i*delta + frameCount/3
          vertex(r*cos( radians(angle1) ),r*sin(radians(angle1)))
        }
        endShape(CLOSE)
        // stroke()
      
        noFill()
        stroke(0,0,0)
      beginShape()
        for(var i=0;i<=pointCount;i++){
          let r = 400-window.scrollY/20
          let delta = (360/pointCount)
          let pan = delta+ noise(frameCount/100)*30
          let angle1 = i*delta + frameCount/5+pan
          vertex(r*cos( radians(angle1) ),r*sin(radians(angle1)))
          ellipse(r*cos( radians(angle1) ),r*sin(radians(angle1)),10,10)
        }
        endShape(CLOSE)
      
        //frame
        stroke(0,0,0,50)
        rectMode(CENTER)
        rect(0,0,windowHeight-40,windowHeight-40)
        stroke(0,0,0,20)
      rect(0,0,windowHeight-60,windowHeight-60)
      
        fill(0)
        text("Δ "+ parseFloat(noise(frameCount/100) ,3),-100,0)
        
        text("EXPERIEMENT",-windowHeight/2,-windowHeight/2)
      
    //     //draw notes
    //     notes.forEach( n=>{
    //       line(0,n.y,500,n.y)
    //     })
      
      pop()
      
      
      //fui
      stroke(0,0,0,30)
      strokeWeight(1)
      rect(10,10,windowWidth-20,windowHeight-20)
      
      push()
        translate(windowWidth-300,windowHeight-30)
        bars()
      pop()
      
      push()
        translate(windowWidth-450,windowHeight-30)
        blockCirs()
      pop()
      
      push()
        textSize(500)
        text(pointCount,50,500)
      pop()
      
    }

    function windowResized(){
      resizeCanvas(windowWidth, windowHeight)
    }
  }
}
</script>

<style lang="sass">
.page-about
  line-height: 2rem
  .background
    position: fixed
    left: 0
    top: 0
  .content
    position: relative
    z-index: 1
    padding-left: 20px
  ul
    padding: 0
    margin: 0
    list-style: none
  p
    opacity: 0.7
    
  .year
    color: #333
    font-size: 2rem
    font-weight: bold

    background-color: #fff
    display: inline-block
    padding: 10px
    
  h1,h3
    font-weight: bold

  .yearlist
    list-style: none
    padding: 20px 0px
    &>li
      margin-bottom: 50px
      padding: 20px 20px
      // border-left: solid 2px 
      
      
    h4
      margin: 0
      margin-top: 30px
      margin-bottom: 20px
      font-weight: bold
    h5
      margin-top: 15px
      
      

</style>
