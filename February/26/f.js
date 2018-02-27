(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1;
  var width = docEl.clientWidth;

  // adjust body font size
  function setBodyFontSize () {
    console.log(width)
    if (document.body) {
      if(width <= 640){
        document.body.style.fontSize = (12 * dpr) + 'px'
        console.log('a')
      } else {
        document.body.style.fontSize = '64px'
        console.log('b')
      }
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10;
    if(width <= 640){
      docEl.style.fontSize = rem + 'px'
    }
     else {
      docEl.style.fontSize = '64px'
     }
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))