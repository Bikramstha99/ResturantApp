document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = [
        'resturant1.jpg',
        'kitchen.jpg',
        'interior.jpg',
        'outside.jpg',
        'people.jpg'
    ];
    var homeBefore = document.getElementById('home').style;

    function showImage(index) {
        homeBefore.background = 'url(' + images[index] + ') no-repeat center/cover';
    }
    

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.getElementById('slider-left').addEventListener('click', function() {
        prevImage();
    });

    document.getElementById('slider-right').addEventListener('click', function() {
        nextImage();
    });

    setInterval(nextImage, 5000); // Change image every 2 seconds

    // Initial image display
    showImage(currentIndex);
});
