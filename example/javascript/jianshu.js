$(function () {
    var $window = $(window);
    var endZone = $('.about').offset().top - $window.height();
    var counter = 0;

    $window.on('scroll', function () {
        if ((endZone < $window.scrollTop()) && counter < 2) {
            $.ajax({
                type: 'GET',
                url: 'https://mugglefighter.github.io/fwp/example/articles.html',
                timeout: 2000,
                beforeSend: function () {
                    $('.outer').show();
                },
                complete: function () {
                    // $('.outer').hide();
                    counter += 1;
                },
                success: function (data) {
                    function sleep() {
                        $('.outer').hide();
                        var $article = $(data).find('article');
                        $article.each(function () {
                            $(this).appendTo($('.articles'))
                        })
                    }

                    setTimeout(sleep, 2000);

                }
                // error: alert('123')
            })
        }
    })
});