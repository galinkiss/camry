tmpCount = 0
function styl(el) {
      elems = document.getElementsByTagName('h2')
      elems2 = document.getElementsByClassName('r')
      if (tmpCount == 0) {
      for (var i = 0; i<elems.length;i++) {
        elems[i].style.border = 'solid'
      }
      el.innerHTML = "h2BorderOut"
      tmpCount = 1
    } else {
      tmpCount = 0
      for (var i = 0; i<elems.length;i++) {
        elems[i].style.border = ''
      }
      el.innerHTML = "h2BorderOut"
    } 
    var text = prompt()
    for (var i = 0; i<elems2.length;i++) {
      elems2[i].innerHTML = text
    }
  }