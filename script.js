document.getElementById('load-images').addEventListener('click', function() {
    const container = document.getElementById('image-container');
    // Example: Adding a placeholder image
    const newImg = document.createElement('img');
    newImg.src = 'path/to/your/image.jpg';
    newImg.alt = 'Coming Soon';
    container.appendChild(newImg);
});
