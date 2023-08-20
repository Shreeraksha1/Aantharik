(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

function savecontact(){
    var myHeaders = new Headers();
myHeaders.append("authority", "gmail.us21.list-manage.com");
myHeaders.append("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("cache-control", "max-age=0");
myHeaders.append("content-type", "application/x-www-form-urlencoded");
myHeaders.append("cookie", "ak_bmsc=AD0E2E50D177A6753A89284567F45D37~000000000000000000000000000000~YAAQrHEsMawRzP6JAQAAuq8nCRSy727hWs6GPoWDJBTb8bIXNrpc+10ZdqKjEpYkS34FWHMNiagEuGzmTY6jsY65FRUGKtoXa4CiOOi6/3fDqvRk8RsR8USSZq8Ya+bUVi4vi2R5Pwqo4hfcYka7GloHmCGvzoRBbnmfuUU0P8PaerE0Y3A2ZnnDUJVBQWGLdD3Z4gXJ/Vg1J/OlI8KPpjka4Sc+dEjDYDZpDqf/y84yZB0figVCEmil38/Ix7a4X/LYcQQ9quWi0DHH0erK9nKLaQg4iHGy+G6Kl7OHzJAdamuULZeJ9LZmX3fiO2qSmZQz4Z9XZ5yrb9WtuB/GY387fOvL0RUxI7aw1tpipmb5xFMM5iPz0rgYOLZaSe3pIxv5TByCUImxzwkR2M8mX0r7SQ==; bm_sz=56BF5588F44907B34989F258585203FE~YAAQrHEsMa0RzP6JAQAAuq8nCRTrveytm7Bb1Rw3cdU/FhPTQyhZxjhbCRIb42U8ShPz2T1ZiW6xPYdsvk4ln4Zh/Vzt7Op6Zmr6tP7F4QBc++kCd2lPNoA/07p6YB8aRhxQP2k7/BEUdby0xQwnf6ITh00xOi0RAbcTshN0bJ5eV9ufCMtlHDud9PaVLiCX2QppGQV7nEzZBt61MUEurM/tpfJ58qWTfZ0kE5NYmIYKVaS/0l2ZJx9X+P/t6McOR/E65O8TJdb81DqWZlIxZ3MJklF0JAKfJn071dsZK2MkV7tgK32qeQ==~3491121~3359794; _abck=9922FA5B16D101C1070BE062A1FFA69E~0~YAAQrHEsMRs3zP6JAQAAiVo5CQoRjSDFLD+9JRAHi8C54dhmSpEfnDCV+bxE7qI6jiK1vJbpIKEyiUDyXb3ZXM3mbtfFrhEm9D7a2wbWhGrG5EgPfgi5DJKNhGoWfwlvVbYXOW7AKHGP8JyrXzGnfb+3cpQ8zHe866LwFGeJK7hCtqfcNcq5zIb4xveUCrRbFVaavxcsal+oByIvDHZ1F2D6N81qvgRHfhMsCX6gtL0T0lFV4HT9zZFP/helQmIefbGAQ8C0o7ZzmMTCNLKbNAapG/rwng7Hg9EUvye9UQSQ9rcap7xbITFDSes4zMNuE9saKJDXtucGlfC68++GtVc4yJWXh0na8q14oGetCBJoO9GaX7AgGhus+krDUCMlpRNpuJ7RHopuxgHeBIozKA9oNExaWI3map2yPFU=~-1~||-1||~-1; bm_sv=73EF620B22E93710E53D672416DE78D7~YAAQrHEsMUI4zP6JAQAASy87CRSkVTM138kWiZs5wdPjTLDLW8ixA02xs8yO2WdHdE/zQ8UVAIOMDYqJBE73RjmwIQ2bF7jjUo0qsKgjG4KLXZe25xbMurijlQZCR6N1H2lkPKctWtBEiwaYM98pWlx1p1XnZrhahHc8SuY/3AvcT9qptvYzuCRujnFzD3ItPXRMNOg+vnwIGEhDCdFrGmr0MqbYmCIyVZlqcjsugrpUZ5pXcm1n49yJnZ//OomhVcjLAYELPrA9Yg==~1");
myHeaders.append("dnt", "1");
myHeaders.append("origin", "null");
myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "document");
myHeaders.append("sec-fetch-mode", "navigate");
myHeaders.append("sec-fetch-site", "cross-site");
myHeaders.append("sec-fetch-user", "?1");
myHeaders.append("upgrade-insecure-requests", "1");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");
myHeaders.append("Referer", "");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");
myHeaders.append("DNT", "1");
myHeaders.append("x-client-data", "CJS2yQEIpLbJAQipncoBCJL9ygEIkqHLAQic/swBCIWgzQEIwsjNAQi5ys0BCNDLzQEIlMzNARj0yc0B");
myHeaders.append("if-modified-since", "Tue, 04 Apr 2023 17:52:30 GMT");
myHeaders.append("Origin", "https://gmail.us21.list-manage.com");

var urlencoded = new URLSearchParams();
urlencoded.append("FNAME", "dfhb");
urlencoded.append("PHONE", "9834628466");
urlencoded.append("EMAIL", "vgffvdfhbhb@gmail.com");
urlencoded.append("MMERGE6", "jhf+hfj+h+h+");
urlencoded.append("subscribe", "Send+Message");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://gmail.us21.list-manage.com/subscribe/post?u=a6f01c9e68b68f8a1142442be&id=2919bcdcd3&f_id=009966e1f0", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}



