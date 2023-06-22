var myimage = ['gallery/me.JPG', 'gallery/me-removebg-preview (1).png', 'gallery/me-removebg-preview (2).png', 'gallery/me-removebg-preview.png'];
    var currentimage = 0;
    var imageElement = document.getElementById('myimage');
    var previousButton = document.getElementById('previous');
    var nextButton = document.getElementById('next');

    nextButton.addEventListener('click', function() {
    currentimage = (currentimage + 1) % myimage.length;
    imageElement.src = myimage[currentimage];
    });

    previousButton.addEventListener('click', function() {
    currentimage = (currentimage - 1 + myimage.length) % myimage.length;
    imageElement.src = myimage[currentimage];
    });