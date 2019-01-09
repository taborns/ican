$(document).ready(function(e) {
    backgroundChanged = false;
    
    function changeBackUn() {
        backgroundChanged =!backgroundChanged;
        $('.main-nav-outer').css('background-color', 'transparent');
        $('.main-nav-outer .top-bar').css('color', '#222');
        $('#resources .resource-dropdown').css('background-color','transparent');
        $('.main-nav li a').css('color','white');
        $('.main-nav-outer .top-bar .social-icons span').css('color', '#222');
        
    }

    function changeBackPre() {
        backgroundChanged =!backgroundChanged;
        $('.main-nav-outer').css('background-color', 'white');
        $('#resources .resource-dropdown').css('background-color', 'white');
        $('.main-nav > li > a').css('color','#222');
        $('.main-nav li.selected-menu a').css('color','white');
        
    }

    $('#test').scrollToFixed({
        preUnfixed: function() { changeBackUn() },
        preFixed: function() { changeBackPre() },
        offsetTop : 10,
        
        
    });
    

    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });

$('.Portfolio-box').magnificPopup({
delegate: 'a',
type: 'image'
});

});