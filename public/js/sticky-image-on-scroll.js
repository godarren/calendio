// get all benefits
var benefits = document.querySelectorAll('.benefit');
// get all benefits images
var benefitImages = document.querySelectorAll('.benefit-image img');
// hide all benefit images
benefitImages.forEach(function (image) {
    image.style.opacity = 0;
    image.style.display = 'none';
});
// show first benefit image

// listen for scroll
window.addEventListener('scroll', function () {
    // get scroll position
    var scrollPosition = window.scrollY;
    // loop through benefits
    benefits.forEach(function (benefit, index) {
        // get benefit position
        var benefitPosition = benefit.offsetTop;
        // get benefit height
        var benefitHeight = benefit.clientHeight;
        // if scroll position is greater than benefit position
        if (scrollPosition > benefitPosition - benefitHeight) {
            // hide all benefit images
            benefitImages.forEach(function (image) {
                image.style.opacity = 0;
                image.style.display = 'none';
            });
            // show current benefit image
            benefitImages[index].style.opacity = 1;
            benefitImages[index].style.display = 'block';
        }
    });
});