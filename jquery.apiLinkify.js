;(function ($) {
  $.fn.apiLinkify = function () {
    var jQueryMethods = /^(\$|jQuery)?\.\w+/,
        jQueryApiSite = "http://api.jquery.com/";
    
    this.each(function (idx, val) {
      var match = val.innerHTML.match(jQueryMethods), url;
      
      if (match) {
        url = match[0]
          .replace(/^\./,'')
          .replace(/^\$/,'jQuery');
        $(val).wrapInner('<a href="' + jQueryApiSite + url + '"></a>');
      }
    });
  };
})(jQuery);
