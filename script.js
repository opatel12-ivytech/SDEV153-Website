const now = new Date();

const options = {
  timeZone: 'America/New_York', // This handles EST/EDT automatically
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
};

const estTime = new Intl.DateTimeFormat('en-US', options).format(now);

console.log(estTime); 
// Example Output: April 29, 2026, 02:44:36 PM


document.getElementById('load-images').addEventListener('click', function() {
    const container = document.getElementById('image-container');
    // Example: Adding a placeholder image
    const newImg = document.createElement('img');
    newImg.src = 'path/to/your/image.jpg';
    newImg.alt = 'Coming Soon';
    container.appendChild(newImg);
});
