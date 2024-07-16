
document.addEventListener('DOMContentLoaded', function() {
    const serviceImages = document.querySelectorAll('.service-image');
    const dots = document.querySelectorAll('.dot');
    const imageContainer = document.querySelector('.image-container');
    let currentIndex = 0;
    const totalImages = serviceImages.length;
    const slideInterval = 500; 

    function showImage(index) {
        const translateX = -index * 100;
        imageContainer.style.transform = `translateX(${translateX}%)`;

        
        dots.forEach(dot => dot.classList.remove('active'));

        
        dots[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    let sliderInterval = setInterval(nextImage, slideInterval);

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'), 10) - 1; 
            currentIndex = index;
            showImage(currentIndex);
            clearInterval(sliderInterval); 
            sliderInterval = setInterval(nextImage, slideInterval); 
        });
    });

    serviceImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            const index = parseInt(this.getAttribute('data-index'), 10) - 1; 
            currentIndex = index;
            showImage(currentIndex);
        });

        // Adding 'Read more' button to each image
        const readMoreButton = document.createElement('a');
        readMoreButton.textContent = 'Read more';
        readMoreButton.href = 'https://fylehq.com';
        readMoreButton.target = '_blank';
        readMoreButton.classList.add('read-more');
        image.appendChild(readMoreButton);
    });

    // Initial display
    showImage(currentIndex);
});


//for project section 

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.paragraph');
    const images = document.querySelectorAll('.project-image');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            const imageId = this.getAttribute('data-image');
            showImage(imageId);

            // Remove 'active' class from all paragraphs
            paragraphs.forEach(p => p.classList.remove('active'));

            // Add 'active' class to the clicked paragraph
            this.classList.add('active');
        });
    });

    function showImage(id) {
        images.forEach(image => {
            if (image.id === 'image-' + id) {
                image.style.display = 'block';
                image.style.opacity = '1';
            } else {
                image.style.display = 'none';
                image.style.opacity = '0';
            }
        });
    }
});

//contact
document.getElementById("contact-button").addEventListener("click", function() {
    window.location.href = "contact.html"; 
});