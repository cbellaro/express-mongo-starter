(() => {
    const bg = $("body");

    function resizeBackground() {
        bg.height($(window).height());
    }

    $(window).resize(resizeBackground);
    resizeBackground();
})
