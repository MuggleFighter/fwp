$(function () {
    var $window = $(window);
    var endZone = $('.about').offset().top - $window.height() - 500;
    var counter = 0;


    $window.on('scroll', function () {
        if ((endZone < $window.scrollTop()) && counter < 2) {
            $.ajax({
                type: 'POST',
                url: 'articles.html',
                timeout: 2000,
                beforeSend: function () {
                    $('.outer').show();
                },
                complete: function () {
                    // $('.outer').hide();
                    counter += 1;
                },
                success: function (data) {
                    $('.outer').hide();
                    var $article = $(data).find('article');
                    $article.each(function () {
                        $(this).appendTo($('.articles'))
                    })
                }
                // error: alert('123')
            })
        }
    })
});