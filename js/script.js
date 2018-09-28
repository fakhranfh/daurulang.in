$(window).ready(function () {

    var modal = document.getElementById('modal-masuk');
    var btn = document.getElementById("btn-masuk");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    $(window).resize(function () {
        var width = $(window).width();
        if($("nav")[0].className === " responsive" && width > 992){
            $("nav")[0].className = "";
            $('nav a:first-of-type').remove();
        }
    });

    $('#menu-icon').click(function (e) {
        e.preventDefault();
        var x = $("nav")[0];
        if (x.className === "") {
            x.className += " responsive";
            $('nav').prepend('<a href="index.html">Home</a>')
        } else {
            x.className = "";
            $('nav a:first-of-type').remove();
        }
    });

    $('#btn-dft-pemberi-sampah').click(function () {
        $('#daftar-pengrajin').fadeOut(function () {
            $('#daftar-pemberi-sampah').fadeIn();
        });
    });

    $('#btn-dft-pengrajin').click(function () {
        $('#daftar-pemberi-sampah').fadeOut(function () {
            $('#daftar-pengrajin').fadeIn();
        });
    });

    $('nav a').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top - 100
        }, 1000);
    });

    $('body').append('<button id="toTop" class="btn-daftar"><i class="fa fa-angle-up"></i></button>');

    var btnToTop = function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }
    btnToTop();
    $(window).scroll(function () {
        btnToTop();
    });

    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});