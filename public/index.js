$(document).ready(function() {

  // handlebars code:

    var placeholderData = { "name": "Pabst Blue Ribbon" };

    var productTemplateSource = $("#product-info-template").html();

    var productTemplate = Handlebars.compile(productTemplateSource);
    $(".product-info-container").append(productTemplate(placeholderData));

});
