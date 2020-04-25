<template>
    <div>
        <nav-menu />
        <br />
        <p>
            新闻列表展示，最新的新闻咨询和企业新闻动态，让学生能够快速的掌握企业的招聘信息，获得符合自己的实习岗位。
        </p>
        <div style="margin: 0 auto;width: 80%;min-height: 300px;text-align: left">
            <a-row>
                <a-col :span="12"  >
                    <a-list itemLayout="horizontal" :dataSource="dataList">
                        <a-list-item slot="renderItem" slot-scope="item" @click="getToken">
                            <a-list-item-meta
                                    :description=" item.newsTitle2 "
                            >
                                <router-link to="newsDetail" slot="title">{{ item.newsTitle1 }}</router-link>
                                <a-avatar
                                    slot="avatar"
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                />
                            </a-list-item-meta>
                        </a-list-item>
                    </a-list>
                </a-col>
            </a-row>
        </div>
        <a-pagination @change="onChange" :pageSize="size" :current="current" :total="total" />
        <footer-menu />
    </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
import FooterMenu from '@/components/common/FooterMenu'
import { postAction1 } from '@/api/data'
export default {
  components: { FooterMenu, NavMenu },
  data () {
    return {
      dataList: [],
      size: 10,
      current: 1,
      total: 0
    }
  },
  created () {
    this.getDataList()
  },
  methods: {
    onChange (val) {
        console.log(val)
        this.current = val
        this.getDataList()
    },
    getToken (val) {
        if (localStorage.getItem('token')) {
            console.log('存在')
        } else {
            console.log('不存在')
        }
    },
    getDataList () {
      postAction1('/school/school-news/page', { current: this.current, size: this.size }).then(res => {
        // console.log(res.datas.page)
        this.dataList = res.datas.page.records
        this.current = res.datas.page.current
        this.size = res.datas.page.size
        this.total = res.datas.page.total
        // console.log(this.total)
      })
    }
  }
}
</script>

<style scoped>
    .demo-loadmore-list {
        min-height: 350px;
    }

    .card-block {
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
    }

    .card-block:hover {
        background-color: #4e56dc;
        border-radius: 10px;
        cursor: pointer;
    }
</style>
