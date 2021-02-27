//将数组分为若干份
function GroupArray(array, subGroupLength) {
  //获取个数
  var newArray = []
  const len = array.length
  const time = Math.ceil(len / subGroupLength)

  var first = 0
  var last = (first + subGroupLength) >= len ? len : (first + subGroupLength)

  for (let index = 0; index < time; index++) {
      const element = array.slice(first,last);
      newArray.push(element)
      first+=subGroupLength
      last = (first + subGroupLength) >= len ? len : (first + subGroupLength)
  }

  return newArray
}


export {
    GroupArray
}