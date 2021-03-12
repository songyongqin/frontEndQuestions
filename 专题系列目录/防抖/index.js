var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
};

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    if (timeout) clearTimeout(timeout);

      if(immediate) {
        if(!timeout) {
          func.apply(this,arguments)
        }
        timeout = setTimeout(()=>{
          timeout = null
        }, wait);

      } else {
        timeout = setTimeout(()=>{
          func.apply(this,arguments)
        }, wait);
      }
  }
}

// function debounce(func, wait, immediate) {

//   var timeout;

//   return function () {
//       var context = this;
//       var args = arguments;

//       if (timeout) clearTimeout(timeout);
//       if (immediate) {
//           // 如果已经执行过，不再执行
//           var callNow = !timeout;
//           timeout = setTimeout(function(){
//               timeout = null;
//           }, wait)
//           if (callNow) func.apply(context, args)
//       }
//       else {
//           timeout = setTimeout(function(){
//               func.apply(context, args)
//           }, wait);
//       }
//   }
// }
// container.onmousemove = getUserAction;
// container.onmousemove = debounce(getUserAction, 1000, true);
container.onclick=  debounce(getUserAction, 1000, true);



