var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
};

function throttle(func, wait) {
  var time = 0;
 
  return function () {
    let context = this;
    let args = arguments;
    if(Date.now() - time > wait) {
      func.apply(context, args)
      time = Date.now()
    }
  }
}


container.onclick=  throttle(getUserAction, 1000);



