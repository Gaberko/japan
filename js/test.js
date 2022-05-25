
new WOW().init();
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var height = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (height >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        height++;
        elem.style.height = height + "%";
      }
    }
  }
}




let advOffset = $('#adv').offset().top;
let sndOffset = $('#ads').offset().top;
console.log(sndOffset)
console.log(advOffset)

$(window).scroll(function () {
    let topOffset = $(window).scrollTop();
    if (topOffset > advOffset) {
        $('.moving').css({ 'position': 'fixed', })
    }
    
    else {
        $('.moving').css('position', 'absolute')
    }
})


$(window).scroll(function () {
    let botOffset = $(window).scrollTop();
    if (botOffset >= sndOffset) {
        $('.moving').css({ 'display': 'none', })
    }
    
    else {
        $('.moving').css('display', '')
    }
   
})
