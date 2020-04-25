import api from './index'
import { axios } from '@/utils/request'

/**
 * login func
 * parameter: {
 *   username: '',
 *   password: '',
 *   remember_me: true,
 *   captcha: '123456'
 * }
 * @param parameter
 * @returns {*}
 */
export  function login (parameter) {
  console.log(parameter)
  return axios({
    url: '/auth/login',
    method: 'post',
    data: parameter
  })
}

export function logout () {
  return axios({
    url: '/auth/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
