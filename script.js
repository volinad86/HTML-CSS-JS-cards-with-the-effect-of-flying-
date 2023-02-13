let count = 0;
//if the user clicked on the "Add to cart" button
$(".cart-btn").on("click", function () {
    let cart = $(".cart-nav");
// find the image of the card the user clicks on
let imgtodrag = $(this)
.parent(".buttons")
.parent(".content")
.parent(".card")
.find("img")
.eq(0);


});