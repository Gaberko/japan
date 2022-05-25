new WOW().init();


$('.btn').click(function () {
    $('.brdr').css({ 'border-color': '#09c' });
    $('.brdrr').css({ 'border-color': 'white' });
    $('.brdrrr').css({ 'border-color': 'white' });
    $('.brdrrrr').css({ 'border-color': 'white' });
    $('.brdrrrrr').css({ 'border-color': 'white' });
    

})



$('.btnn').click(function () {
    $('.brdr').css({ 'border-color': 'white' });
    $('.brdrr').css({ 'border-color': 'white' });
    $('.brdrrr').css({ 'border-color': 'white' });
    $('.brdrrrr').css({ 'border-color': 'white' });
    $('.brdrrrrr').css({ 'border-color': '#09c' });
    $('.timeline ul li before').css({ 'background-color': 'red' });


})

$('.btnnn').click(function () {
    $('.brdr').css({ 'border-color': 'white' });
    $('.brdrr').css({ 'border-color': 'white' });
    $('.brdrrr').css({ 'border-color': '#09c' });
    $('.brdrrrr').css({ 'border-color': 'white' });
    $('.brdrrrrr').css({ 'border-color': 'white' });

})

$('.btnnnn').click(function () {
    $('.brdr').css({ 'border-color': 'white' });
    $('.brdrr').css({ 'border-color': 'white' });
    $('.brdrrr').css({ 'border-color': 'white' });
    $('.brdrrrr').css({ 'border-color': '#09c' });
    $('.brdrrrrr').css({ 'border-color': 'white' });

})

$('.btnnnnn').click(function () {
    $('.brdr').css({ 'border-color': 'white' });
    $('.brdrr').css({ 'border-color': '#09c' });
    $('.brdrrr').css({ 'border-color': 'white' });
    $('.brdrrrr').css({ 'border-color': 'white' });
    $('.brdrrrrr').css({ 'border-color': 'white' });

})

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

