// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) { return 'null'; }
  if (typeof obj === 'string') { return '"' + obj + '"'; }
  if (typeof obj === 'number') { return obj.toString(); }
  if (typeof obj === 'boolean') { return obj.toString(); }
  if (typeof obj === 'undefined') { return undefined; }
  if (typeof obj === 'function') { return undefined; }

  if (typeof obj === 'object' && Array.isArray(obj)) {
    return '[' + obj.map(e => stringifyJSON(e)) + ']';
  }

  if (typeof obj === 'object') {
    return '{' + mapObj(obj, (k, v) => stringifyJSON(k) + ':' + stringifyJSON(v)) + '}';
  }

  let a = [];
  var mapObj = function (o, f) {
    for (k in o) {
      if (typeof o[k] !== 'function' && typeof o[k] !== 'undefined') {
        a.push(f(k, o[k]));
      }
    }
    return a;
  };
};