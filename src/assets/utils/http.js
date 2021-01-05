const baseUrl = 'http://127.0.0.1:3000/api/'

export default {
  post: (url, data={}) => {
    return new Promise((resolve, reject) => {
      let requestUrl = baseUrl + url
      fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        let result = {
          errcode: 0,
          errmsg: '',
          token: '',
          data: response.body
        }
        resolve(result);
      })
      .catch(err => {
        let result = {
          errcode: err.errcode,
          errmsg: err.errmsg,
          token: '',
          data: null
        }
        reject(result);
      })
    })
  }
}
