var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  container.innerHTML = count++;
};


function debounce(func,delay,immediate) {
  var time
  return function() {
    if(time) {
      clearTimeout(time)
    }


    if(immediate) {
      let callNow = !time
      time = setTimeout(() => {
        time = null
      }, delay);

      if(callNow) {
        func.apply(this, arguments)
      }

    } else {
      time = setTimeout(()=>{
        func.apply(this, arguments)
      },delay)
    }
  }
}

// container.onmousemove = getUserAction;
// container.onmousemove = debounce(getUserAction,1000);


function throttle(func, wait) {
  // var context, args;
  var previous = 0;

  return function() {
      var now = +new Date();
      // context = this;
      // args = arguments;
      if (now - previous > wait) {
          func.apply(this, arguments);
          previous = now;
      }
  }
}

container.onmousemove = throttle(getUserAction, 1000);
