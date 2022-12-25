$(document).ready(function() {
    $(".first-list-element").addClass("active");

    // Active Section - Top Menu
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    // Display and Hide Sidebar
    $("#toggler").click(function(event){
        $('#wrap').toggleClass('toggled');

        var right = $('.sidebar').css("right");
        if ( right == '0px' ){
            $('.sidebar').css({'right' : '-17rem'});
            $('.layer').fadeOut();
        }
        else{
            $('.sidebar').css({'right' : '0'});
            $('.layer').fadeIn();
        }
    });

    // Transparent Layer - Hide Sidebar
    $(".layer").click(function(){
        $('.sidebar').css({'right' : '-17rem'});
        $('.layer').fadeOut();
    });

    // Search bar and icon - of screen smaller than 1116px
    $(".search-icon").click(function(){
        $(".search-input").slideToggle("slow");
    });
});