(function($) {
    $(function() {
        $("[data-jcarousel]").each(function() {
            var el = $(this);
            el.jcarousel(el.data());
        });

        $("[data-jcarousel-control]").each(function() {
            var el = $(this);
            el.jcarouselControl(el.data());
        });

        $("[data-jcarousel]").jcarouselAutoscroll({
            target: "+=1",
            interval: 1200
        });
    });
})(jQuery);