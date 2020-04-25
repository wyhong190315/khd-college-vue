<template>
    <div>
        <a-menu
            v-model="current"
            mode="horizontal"
        >
            <a-menu-item key="index">
                <router-link to="/"><a-icon type="mail"/>首页</router-link></a-menu-item>
            <a-menu-item key="mail0"><router-link to="listNews"><a-icon type="news"/>新闻中心</router-link></a-menu-item>
            <a-menu-item key="alipay1"><router-link to="jointRecruit"><a-icon type="sketch"/>联合招聘</router-link></a-menu-item>
            <a-menu-item key="job_fair"><router-link to="jobFair"> <a-icon type="appstore"/>招聘会</router-link></a-menu-item>
            <a-menu-item key="app"><router-link to="companyTrain"><a-icon type="appstore"/>企业培训</router-link></a-menu-item>
            <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper"><router-link to="practiseJob"><a-icon type="setting"/>暑期实习</router-link></span>
            </a-sub-menu>
            <a-menu-item key="alipay"><router-link to="spaceInfo"><a-icon type="solution"/>场地管理</router-link></a-menu-item>
            <a-menu-item key="career_quiz"><a-icon type="appstore"/>职业测评</a-menu-item>
            <a-menu-item key="alipay2">
                <div>
                   <router-link to="login">登录</router-link>
                    <a-divider type="vertical" />
                    <router-link to="register">注册</router-link>
                </div>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      current: ['mail']
    }
  }
}
</script>

<style scoped>

</style>
