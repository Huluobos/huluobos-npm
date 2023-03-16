
/**
 * @desc 判断是不是json
 * @param {str} string 
 * @return {Boolean}
 */
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

module.exports = isJson;