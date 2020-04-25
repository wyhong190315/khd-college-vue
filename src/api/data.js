import request from '@/utils/request'
const qs = require('qs')
// const portal = '/portal'
// import request from '@/utils/dataRequest'
// var qs = require('qs')
const portal = '/portal'
export function postAction (url, params) {
  return request({
    url: `${portal}${url}`,
    method: 'post',
    data: params
  })
}
export function postAction1 (url, params) {
  return request({
    url: `${portal}${url}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
// get
export function getAction (url, params) {
  // console.log(params)
  // const key = Object.keys(params)
  // const val = Object.values(params)
  // // console.log(key, val)
  // let res = ''
  // key.forEach((item, i) => {
  //   res = `${res}&${item}=${val[i]}`
  // })
  // console.log(res)
  return request({
    url: `${portal}${url}`,
    method: 'get',
    data: params
  })
}

// export function getAction (url, params) {
//   console.log()
//   return request({
//     url: `${portal}${url}`,
//     method: 'get',
//     data: params
//   })
// }
