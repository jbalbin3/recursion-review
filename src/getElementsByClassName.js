// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let a = [];

  checkElement(document.body);

  var checkElement = function(element) {
    if (element.classList !== undefined) {
      if (element.classList.contains(className)) {
        a.push(element);
      }
      if (element.hasChildNodes()) {
        element.childNodes.forEach(e => {
          checkElement(e);
        });
      }
    }
  };
  return a;
};