// 判断是不是json   是返回true  不是返回false 布尔值
function isJson (str) {
  if (typeof str === 'string') {
    try {
      var obj=JSON.parse(str)
      if (typeof obj === 'object' && obj ){
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
export default isJson