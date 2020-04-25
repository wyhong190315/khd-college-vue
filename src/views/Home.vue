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
// import { constants } from 'zlib'
export default {
  name: 'Home',
  data () {
    return {
      data: []
    }
  },
  components: {
    firstNews,
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
  background-color: #fdfdfd
}
</style>
