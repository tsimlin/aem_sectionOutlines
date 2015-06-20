/*
 * aem-authoring-extension-header-outlines
 */
 (function(window, document, Granite, $) {
    "use strict";

    var OUTLINES_BUTTON = ".cq-outlines-action";
    
    $(document).on("click", OUTLINES_BUTTON, function() {
        var $button = $(this);
        $("body iframe").contents().find("html").toggleClass("showBorders");
        $button.toggleClass("is-selected");
    });

})(window, document, Granite, Granite.$);
