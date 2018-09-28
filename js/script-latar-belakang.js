$(window).ready(function () {
    $('#background-sampah-di-indonesia').click(function () {
        $('.background, #apa-itu-daurulangin').animate({
            'minHeight': '100vh',
            'display': 'table'
        }, function () {
            $('#apa-itu-daurulangin').animate({
                'height': '100vh'
            });
            $('.background:hover, #apa-itu-daurulangin').css({'cursor': 'default'});
            $('.background, #apa-itu-daurulangin').css({
                'backgroundAttachment': 'fixed',
                'backgroundPosition': 'center',
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover'
            }).unbind('click').removeClass('hover');
            $('.judul').fadeOut(function () {
                $('section').css({'lineHeight': 'normal'});
                $('.background > section').css({'display': 'table-row'});
                $('.isi').fadeIn();
            });
        });
    });

    $('#background-apa-itu-daurulangin').click(function () {
        $('.background, #apa-itu-daurulangin').animate({
            'minHeight': '100vh',
            'display': 'table'
        }, function () {
            $('#apa-itu-daurulangin').animate({
                'height': '100vh'
            });
            $('#background-sampah-di-indonesia, #apa-itu-daurulangin').css({'cursor': 'default'});
            $('.background, #apa-itu-daurulangin').css({
                'backgroundAttachment': 'fixed',
                'backgroundPosition': 'center',
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover'
            }).unbind('click').removeClass('hover');
            $('.judul').fadeOut(function () {
                $('section').css({'lineHeight': 'normal'});
                $('.background > section').css({'display': 'table-row'});
                $('.isi').fadeIn(function () {
                    var sectionTo = '#background-apa-itu-daurulangin';
                    $('html, body').stop(true, false).animate({
                        scrollTop: $(sectionTo).offset().top - 100
                    }, 1000);
                });
            });
        });
    });

});