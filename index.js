document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = [
        'resturant1.jpg',
        'resturant2.jpg',
        'resturant3.jpg',
        'kitchen.jpg',
        'interior.jpg',
        'people.jpg',
        'ramen1.jpg'
    ];
    var photos = {
        ALL: ['kitchen.jpg', 'outside.jpg','interior.jpg', 'people.jpg','ramen.png', 'resturant1.jpg'],
        Food: ['interior.jpg', 'logo.png'],
        Restaurant: ['ramen.png', 'resturant1.jpg']
    };
    var homeBefore = document.getElementById('images').style;

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

    setInterval(nextImage, 5000); 

    showImage(currentIndex);



function displayPhotos(category) {
    var gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = ''; 

    photos[category].forEach(function(photo) {
        var img = document.createElement('img');
        img.src = photo;
        gallery.appendChild(img);
    });
}

document.querySelectorAll('.category-link').forEach(function(link) {
    link.addEventListener('click', function() {
        var category = this.id;
        displayPhotos(category);
    });
});
displayPhotos('ALL');   
});


