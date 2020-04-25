import axios from 'axios'
import Vue from 'vue'
import store from '../store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 50000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www.form-urlencoded'
  }
})

// request 拦截器
service.interceptors.request.use(config => {
  // const token = Vue.ls.get(ACCESS_TOKEN)
  config.headers['x-token'] = 'cross-1' // 让每个请求携带自定义token， 请根据实际情况自行修改
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // console.log(res)
    if (res.code !== '00000') {
      console.log(res.msg)
      if (res.code === '10000') {
        Vue.ls.remove(ACCESS_TOKEN)
        store.dispatch('Logout').then(() => {
          console.log(res)
          Vue.ls.remove(ACCESS_TOKEN)
        })
        location.href = '/user/login'
      }
      if (res.code === '100004') {
        return Promise.reject(res.msg)
      }
      if (res.code === '100001' || res.code === '99999') {
        return Promise.reject(res.msg)
      }
    } else {
      return response.data
    }
  },
  error => {
    console.log(error.message)
    return Promise.reject(error)
  }
)
export default service
