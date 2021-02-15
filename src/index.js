
exports.min = function min(array) {
  if (array === undefined || array.length == 0) {
    return 0;
  } else {
    let arr = array
      .sort((a, b) => a - b)
      .shift()
    return arr
  }

}

exports.max = function max(array) {
  if (array === undefined || array.length == 0) {
    return 0;
  } else {
    let arr = array
      .sort((a, b) => a - b)
      .pop()
    return arr
  }

}

exports.avg = function avg(array) {
  if (array === undefined || array.length == 0) {
    return 0
  } else {
    let l = array.length
    let sum = array.reduce((total, num) => total + num, 0)
    let average = sum / l
    return average
  }
}

