$(document).ready(function() {
    //bootstrap
    var carousel = $('.carousel').carousel();

    //make it zoom and have a title
    $('.carousel-item img').on('click', function() {
        var src = $(this).attr('src');
        var title = $(this).attr('title');
        $.fancybox.open({
            src: src,
            type: 'image',
            title: title
        });
    });

    //change the title kung magpindot sa next ug prev
    $('.carousel').on('slid.bs.carousel', function (event) {
        var activeItem = $(event.relatedTarget);
        var title = activeItem.find('img').attr('title');
        $.fancybox.getInstance().setTitle(title);
    });
});