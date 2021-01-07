import axios from 'axios';
const baseUrl = 'http://127.0.0.1:3000/api/';

export default {
  post: (url, data={}) => {
    return new Promise((resolve, reject) => {
      let requestUrl = baseUrl + url;
      axios.post(requestUrl, data).then((res) => {

        //没登陆时操作需登陆的接口，跳至登陆页
        if(res.data.code === -2) {
          window.location.href = '/login.html';
        }

        resolve(res.data)
      }).catch((err) => {
        let result = {
          errcode: err.response.status,
          errmsg: err.response.data.error,
          token: '',
          data: null
        }
        reject(result)
      })
    })
  }
}
