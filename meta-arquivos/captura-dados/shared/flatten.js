const flatten = arr => {
    let stack = [];
    let item;
    
    while (item = arr.shift()) {
      if (Array.isArray(item)) {
        arr = item.concat(arr);
      } else {
        stack.push(item);
      }
    }
    
    return stack;
  }

  function flattenOneLevel(arr) {
    return Array.prototype.concat(...arr);
}

  module.exports = { flatten, flattenOneLevel };