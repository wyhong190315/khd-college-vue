<template>
    <div id="user-login">
        <nav-menu />
        <a-layout>
            <a-layout>
                <div style="width: 100%;height: 500px;background-color: #fff000">
                    <div style="margin-left:60%;margin-top: 100px;width: 380px;background: #f4f4f4;height: 350px;padding-top: 5px;">
                        <a-form
                                id="formLogin"
                                class="user-layout-login"
                                ref="formLogin"
                                :form="form"
                                @submit="handleSubmit"
                        >
                            <a-tabs>
                                <a-tab-pane key="tab1" tab="账号密码登录">
                                    <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误" />
                                    <a-form-item>
                                        <a-input
                                                size="large"
                                                type="text"
                                                placeholder="账户/邮箱"
                                                v-decorator="[
                                            'account',
                                            {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
                                          ]"
                                        >
                                            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                        </a-input>
                                    </a-form-item>
                                    <a-form-item>
                                        <a-input
                                                size="large"
                                                type="password"
                                                autocomplete="false"
                                                placeholder="密码"
                                                v-decorator="[
                                                    'password',
                                                    {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
                                                  ]"
                                        >
                                            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                        </a-input>
                                    </a-form-item>
                                </a-tab-pane>
                                <a-tab-pane key="tab2" tab="手机号登录">
                                    <a-form-item>
                                        <a-input size="large" type="text" placeholder="手机号" v-decorator="['mobile', {rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]">
                                            <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                        </a-input>
                                    </a-form-item>
                                    <a-row :gutter="16">
                                        <a-col class="gutter-row" :span="16">
                                            <a-form-item>
                                                <a-input size="large" type="text" placeholder="验证码" v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
                                                    <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                                </a-input>
                                            </a-form-item>
                                        </a-col>
                                        <a-col class="gutter-row" :span="8">
                                            <a-button
                                                    class="getCaptcha"
                                                    tabindex="-1"
                                                    :disabled="state.smsSendBtn"
                                                    @click.stop.prevent="getCaptcha"
                                                    v-text="!state.smsSendBtn && '获取验证码' || (state.time+' s')"
                                            ></a-button>
                                        </a-col>
                                    </a-row>
                                </a-tab-pane>
                            </a-tabs>
                            <a-form-item>
                                <a-checkbox v-decorator="['rememberMe', { valuePropName: 'checked' }]" style="float: left;">自动登录</a-checkbox>
                                <router-link
                                        :to="{ name: 'recover', params: { user: 'aaa'} }"
                                        class="forge-password"
                                        style="float: right;"
                                >忘记密码</router-link>
                            </a-form-item>
                            <a-form-item style="margin-top:24px">
                                <a-button
                                        size="large"
                                        type="primary"
                                        htmlType="submit"
                                        class="login-button"
                                        :loading="state.loginBtn"
                                        :disabled="state.loginBtn"
                                        @click="handleSubmit"
                                >确定</a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </div>
            </a-layout>
            <a-layout-footer>
                <footer-menu />
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
import navMenu from '@/components/common/NavMenu'
import footerMenu from '@/components/common/FooterMenu'
import { postAction1 } from '@/api/data'
export default {
  name: 'UserLogin',
  components: {
    navMenu,
    footerMenu
  },
  data () {
    return {
      visible: false,
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(e)
      this.visible = false
    },
    submit (e) {

    },
    // handler
    handleUsernameOrEmail (rule, value, callback) {
      const { state } = this
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (regex.test(value)) {
        state.loginType = 0
      } else {
        state.loginType = 1
      }
      callback()
    },
    handleTabClick (key) {
      this.customActiveKey = key
    },
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        customActiveKey
      } = this
      state.loginBtn = true
      const validateFieldsKey = customActiveKey === 'tab1' ? ['account', 'password'] : ['mobile', 'captcha']
      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          const loginParams = { ...values }
          console.log('login form', values)
          loginParams[!state.loginType ? 'email' : 'account'] = values.account
          loginParams.password = values.password
          console.log('name is ', loginParams.account, loginParams.password)
            postAction1('/login', {
              account: loginParams.account,
              password: loginParams.password,
              userType: 1
            }).then(res => {
                state.loginBtn = false
                localStorage.setItem('token', res.datas.token)
            }).catch(err => {
                state.loginBtn = false
                console.log(err)
            })
        }
      })
      console.log()
    }
  }
}
</script>

<style lang="less" scoped>
    #user-login {

    }
    #user-login .ant-layout-header, .ant-layout-sider {
        background: #fff;
        color: #000;
    }
    #user-login .ant-layout-sider {
        background: #fff000;
        color: #000;
    }
    #user-login .ant-layout-content {
        background: #fff;
        height: 500px;
        color: #000;
    }
    .user-layout-login {
        width: 80%;
        margin: 20px auto;
        label {
            font-size: 14px;
        }
        .getCaptcha {
            display: block;
            width: 100%;
            height: 40px;
        }
        .forge-password {
            font-size: 14px;
        }
        button.login-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
        }
    }
</style>
