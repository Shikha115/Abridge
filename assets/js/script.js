$(document).ready(function() {
    // gallary
    $('.portfolio-menu ol li').click(function() {
        $('.portfolio-menu ol li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });
    $(document).ready(function() {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // navbar
    $(function() {
        $(document).scroll(function() {
            var ad_after = 100;
            var $nav = $(".custom");
            var $slides = $(".slides");
            $nav.toggleClass('onscroll', $(this).scrollTop() > ad_after);
            $slides.toggleClass('opacity', $(this).scrollTop() > 200);
        });
    });



    // video

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    });


    $(()=>{
    var windowSize = $(window).width(); 
    
       $(".dropdown").toggleClass("dropleft",windowSize < 992);
       $(".dropleft .dropdown-menu").css({
           "top":"-115px"
       },windowSize < 992);

    //    $(".navbar").css({
    //     "backgroundColor":"#18191B",
    //     "padding":"10px"
    // },windowSize < 992);
    });

        $(".list").hover(()=>{
            $(".dropdown-menu").slideDown();
        });
        $(".dropdown-menu").mouseleave(function () { 
            $(".dropdown-menu").slideUp();
        });

});

