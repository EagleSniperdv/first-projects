    var myimage = ['gallery/me.JPG', 'gallery/me-removebg-preview (1).png', 'gallery/me-removebg-preview (2).png', 'gallery/me-removebg-preview.png'];
    var currentimage = 0;
    var imageElement = document.getElementById('myimage');
    var previousButton = document.getElementById('previous');
    var nextButton = document.getElementById('next');
    var container = document.getElementById('content')

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();

        currentimage++;
        if (currentimage > myimage.length - 1) {
            currentimage = 0;
        }

        var newslide = document.createElement('img');
        newslide.src = `gallery/${myimage[currentimage]}`;
        newslide.className = 'fadeinmyimage';
        container.appendChild(newslide);
    
    });


    previousButton.addEventListener('click', function() {
    currentimage = (currentimage - 1 + myimage.length) % myimage.length;
    imageElement.src = myimage[currentimage];
    });