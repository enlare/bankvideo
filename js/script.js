function resizeVideoWrapper()
{
    $(".resizedVideo").each(function() {
        var height = $(this).height();
        $(this).closest('.videoWrapper').height(height);
    });
}

$(window).on('load', function() {
    resizeVideoWrapper();

    $('.selectpicker').selectpicker();
});
//$(window).resize(function() {
//    resizeVideoWrapper();
//});