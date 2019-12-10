// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // integer, booleans, strings, functions, undefined
  if (obj === null) { return 'null'; }
  if (typeof obj === 'number') { return obj.toString(); }
  if (typeof obj === 'boolean') { return obj.toString(); }
  if (typeof obj === 'string') { return '"' + obj + '"'; }

  if (typeof obj === 'object' && Array.isArray(obj)) {
    var returnArray = obj.map(function(element) {
      return stringifyJSON(element);
    });
    return '[' + returnArray.join(',') + ']';
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    if (!Object.keys(obj).length) { return '{}'; }
    var tempString = '{';
    Object.keys(obj).forEach(function(key) {
      var stringifiedKey = stringifyJSON(key);
      // for objects: undefined, Functions are omitted in objects
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        tempString = tempString.concat(stringifiedKey + ':' + stringifyJSON(obj[key]) + ',');
      }
    });
    if (tempString === '{') { return '{}'; }
    return tempString.slice(0, tempString.length - 1) + '}';
  }

  if (typeof obj === 'function') { return null; }
  if (typeof obj === 'undefined') { return null; }
};
