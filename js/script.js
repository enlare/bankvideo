function resizeVideoWrapper()
{
    $(".resizedVideo").each(function() {
        var height = $(this).height();
        $(this).closest('.videoWrapper').height(height);
    });
}

$(window).load(function() {
    resizeVideoWrapper();
});
$(window).resize(function() {
    resizeVideoWrapper();
});