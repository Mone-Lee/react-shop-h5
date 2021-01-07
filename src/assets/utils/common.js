/*
 * 存储数据
 */
export function getItem (value) {
  return localStorage.getItem(value);
}

/*
* 读取数据
*/
export function setItem(key,value){
  return localStorage.setItem(key,value);
}

/*
* 删除指定数据
*/
export function removeItem(key){
  return localStorage.removeItem(key);
}

/*
 * 删除所有保存的数据
 */
export function clear(){
  return localStorage.clear();
}

 /*
* 时间格式化，例：formatDate(date, "yyyy-MM-dd hh:mm")
*/
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
     'M+': date.getMonth() + 1,
     'd+': date.getDate(),
     'h+': date.getHours(),
     'm+': date.getMinutes(),
     's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
    }
  }
  return fmt;
};