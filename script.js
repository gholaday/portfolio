// Modal functionality
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');

function openModal(imgSrc, imgAlt) {
    console.log("Opening modal for image:", imgSrc);
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    console.log("Closing modal");
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Add event listeners to all project images
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, setting up image click handlers");
    
    const images = document.querySelectorAll('.project-image');
    console.log("Found", images.length, "project images");
    
    images.forEach(function(img) {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Image clicked:", this.src);
            openModal(this.src, this.alt);
        });
    });
});