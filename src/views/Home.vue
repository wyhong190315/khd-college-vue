<template>
  <div class="home">
      <navMenu />
      <imageCarousel />
      <a-layout>
          <list-job />
          <home-train />
          <footerMenu />
      </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import navMenu from '@/components/common/NavMenu.vue'
import imageCarousel from '@/components/common/ImageCarousel'
import listJob from '@/views/internship/ListJob'
import footerMenu from '@/components/common/FooterMenu'
import { postAction } from '@/api/data'
import HomeTrain from '@/views/trainCenter/homeTrain'
// import { constants } from 'zlib'
export default {
  name: 'Home',
  data () {
    return {
      data: []
    }
  },
  components: {
    HomeTrain,
    navMenu,
    imageCarousel,
    listJob,
    footerMenu
  },
  created () {
    this.getDataList()
  },
  methods: {
    getDataList () {
      postAction('/school/school-news/page', { current: 1, size: 10 }).then(res => {
        console.log(res.datas.page.records)
        this.data = res.datas.page.records
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
    .ant-layout {
        display: flex;
        flex: auto;
        flex-direction: column;
        min-height: 0;
        background-image: url(../assets/img/bg1.png), url(../assets/img/bg2.png), url(../assets/img/bg3.png);
        background-repeat: no-repeat;
        background-size: 482px 806px, 301px 960px, 100% auto;
        background-position: left 26%, right 36%, bottom center;
    }
}
</style>
