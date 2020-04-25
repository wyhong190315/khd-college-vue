<template>
    <div id="khd-college-footer">
        <a-divider></a-divider>
        <a-layout-footer>
            <a-row>
                <a-col :xs="{ span: 3 }" :lg="{ span: 3, push: 4 }">
                    <a-list :dataSource="dataNav">
                        <a-list-item slot="renderItem" slot-scope="item"><a href="#">{{ item.title }}</a></a-list-item>
                        <div slot="header" style="text-align: left;color: #fff;">快速导航</div>
                    </a-list>
                </a-col>
                <a-col :xs="{ span: 3 }" :lg="{ span: 3, push: 6 }">
                    <a-list :dataSource="dataFriend">
                        <a-list-item slot="renderItem" slot-scope="item"><a href="#"> {{ item.title }}</a></a-list-item>
                        <div slot="header" style="text-align: left;color: #fff;">友情连接</div>
                    </a-list>
                </a-col>
                <a-col :xs="{ span: 3 }" :lg="{ span: 4, push: 10 }">
                    <a-list :dataSource="dataContact">
                        <a-list-item slot="renderItem" slot-scope="item"><span>{{ item.title }}</span><label><a href="#">{{ item.content }}</a></label></a-list-item>
                        <div slot="header" style="text-align: left;color: #fff;">联系我们</div>
                    </a-list>
                </a-col>
            </a-row>
            <a href="#"> Copyright©2000-2020</a>&nbsp;&nbsp;<span>兰白人才链：rencailian.com</span>
        </a-layout-footer>
    </div>
</template>

<script>
const dataNav = [
  {
    title: '首页'
  },
  {
    title: '企业培训'
  },
  {
    title: '暑期实习'
  },
  {
    title: '招聘信息'
  }
]
const dataFriend = [
  {
    title: '西北人才网'
  },
  {
    title: '兰州理工大学人才网'
  }
]
const dataContact = [
  {
    title: '联系电话：',
    content: '0931-4578629'
  },
  {
    title: '手机号码：',
    content: '15293684726'
  },
  {
    title: '电子邮箱：',
    content: '276986284@qq.com'
  }
]
export default {
  name: 'FooterMenu',
  data () {
    return {
      dataNav,
      dataFriend,
      dataContact
    }
  }
}
</script>

<style lang="less" scoped>
    #khd-college-footer .ant-layout-footer {
        background: #585858;
        color: #fff;
    }
    #khd-college-footer .ant-list-split .ant-list-item{
        border-bottom: 0px solid #e8e8e8;
    }
    #khd-college-footer .ant-list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
    }
</style>
