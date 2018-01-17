document.addEventListener("DOMContentLoaded", function(event) {
    var script = document.createElement("script");
    script.src = "https://unpkg.com/tippy.js@2.0.9/dist/tippy.all.min.js";
    script.onload = script.onreadystatechange = function() {
        $(function() {
          var selector = "#cityName";
          var el = $(selector);
          el.attr("title", "my tooltip");
          tippy(selector);
        });
    };
    document.body.appendChild(script);
});
