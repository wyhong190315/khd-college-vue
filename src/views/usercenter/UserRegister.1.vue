<template>
    <div id="user_register">
        <nav-menu />
        <a-layout>
            <a-layout>
                <div style="margin: 30px auto;width: 50%;height: 500px;">
                    <a-form
                        id="formLogin"
                        class="user-layout-register"
                        ref="formRegister"
                        :form="form"
                    >
                        <a-tabs
                            :activeKey="customActiveKey"
                            :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
                        >
                            <a-tab-pane key="tab1" tab="学生注册">
                                <a-form-item>
                                    <a-divider></a-divider>
                                    <a-row>
                                        <a-col :span="10">
                                            <a-input
                                                 size="large"
                                                 type="text"
                                                 placeholder="请输入学校名称"
                                                 v-decorator="[
                                                 'username',
                                                    {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                 size="large"
                                                 type="text"
                                                 placeholder="请输入学院名称"
                                                 v-decorator="[
                                                 'username',
                                                    {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                    </a-row>
                                    <br />
                                    <a-row>
                                        <a-col :span="10">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入所学专业"
                                                    v-decorator="[
                                                 'username',
                                                    {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入年级"
                                                    v-decorator="[
                                                 'username',
                                                    {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                    </a-row>
                                    <br />
                                    <a-row>
                                        <a-col :span="10">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入班级"
                                                    v-decorator="[
                                                 'username',
                                                    {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入学号"
                                                    v-decorator="[
                                                 'username',
                                                    {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                    </a-row>

                                </a-form-item>
                            </a-tab-pane>
                            <a-tab-pane key="tab2" tab="教师注册">
                                <a-form-item>
                                    <a-divider></a-divider>
                                </a-form-item>
                            </a-tab-pane>
                            <a-tab-pane key="tab3" tab="企业注册">
                                <a-form-item>
                                    <a-divider></a-divider>
                                </a-form-item>
                            </a-tab-pane>
                        </a-tabs>
                    </a-form>
                </div>
            </a-layout>
            <a-layout-footer>
                <footer-menu />
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
import NavMenu from '../../components/common/NavMenu'
import FooterMenu from '../../components/common/FooterMenu'
export default {
  name: 'UserRegister',
  components: { FooterMenu, NavMenu },
  data () {
    return {
      customActiveKey: 'tab1',
      registerBtn: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        registerBtn: false,
        registerType: 0,
        smsSendBtn: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
    #user_register {
        label {
            font-size: 14px;
        }
        .getCaptcha {
            display: block;
            width: 100%;
            height: 40px;
        }
        button.register-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
        }
    }
</style>
