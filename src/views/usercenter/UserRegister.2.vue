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
                                                 placeholder="请输入用户姓名"
                                                 v-decorator="[
                                                 'userName',
                                                    {rules: [{ required: true, message: '请输入用户姓名' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                 size="large"
                                                 type="text"
                                                 placeholder="请输入用户昵称"
                                                 v-decorator="[
                                                 'nickName',
                                                    {rules: [{ required: true, message: '请输入用户昵称' }, { validator: [] }], validateTrigger: 'change'}
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
                                                    placeholder="请输入用户账号"
                                                    v-decorator="[
                                                 'account',
                                                    {rules: [{ required: true, message: '请输入用户账号' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入密码"
                                                    v-decorator="[
                                                 'password',
                                                    {rules: [{ required: true, message: '请输入密码' }, { validator: [] }], validateTrigger: 'change'}
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
                                                    placeholder="请输入手机号码"
                                                    v-decorator="[
                                                 'userPhone',
                                                    {rules: [{ required: true, message: '请输入手机号码' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入用户微信"
                                                    v-decorator="[
                                                 'userWx',
                                                    {rules: [{ required: true, message: '请输入用户微信' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入用户性别"
                                                    v-decorator="[
                                                 'userSex',
                                                    {rules: [{ required: true, message: '请输入用户性别' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                         <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入用户邮箱"
                                                    v-decorator="[
                                                 'userEmail',
                                                    {rules: [{ required: true, message: '请输入用户邮箱' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入学校名称"
                                                    v-decorator="[
                                                 'universityName',
                                                    {rules: [{ required: true, message: '请输入学校名称' }, { validator: [] }], validateTrigger: 'change'}
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
                                                 'collegeName',
                                                    {rules: [{ required: true, message: '请输入学院名称' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入专业名称"
                                                    v-decorator="[
                                                 'majorName',
                                                    {rules: [{ required: true, message: '请输入专业名称' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入班级名称"
                                                    v-decorator="[
                                                 'userClass',
                                                    {rules: [{ required: true, message: '请输入班级名称' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入学生学号"
                                                    v-decorator="[
                                                 'userNumber',
                                                    {rules: [{ required: true, message: '请输入学生学号' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="10" :push="2">
                                            <a-input
                                                    size="large"
                                                    type="text"
                                                    placeholder="请输入验证码"
                                                    v-decorator="[
                                                 'verifyCode',
                                                    {rules: [{ required: true, message: '请输入验证码' }, { validator: [] }], validateTrigger: 'change'}
                                                 ]"
                                            >
                                                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                            </a-input>
                                        </a-col>
                                        <a-col :span="12" :push="2" style="margin-top:20px">
                                            <a-button
                                                    size="large"
                                                    type="primary"
                                                    htmlType="submit"
                                                    class="login-button"
                                                    :loading="state.loginBtn"
                                                    :disabled="state.loginBtn"
                                                    @click="handleSubmit"
                                            >确定</a-button>
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
  },
  methods: {
    handleSubmit () {
        this.form.validateFields({ force: true }, (err, values) => {
        if (!err) {
          console.log(values)
        }
      })
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
