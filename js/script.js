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
$(document).ready(function() {
    $('.filterRange').slider({});
});
//$(window).resize(function() {
//    resizeVideoWrapper();
//});