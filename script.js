// Dark Mode Toggle
const toggleModeBtn = document.getElementById('toggleMode');
toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleModeBtn.classList.toggle('dark-mode');
});

// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for Image Popups
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close')[0];

document.querySelectorAll('.modal-trigger').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex -= 2;
    showSlides();
});

document.querySelector('.next').addEventListener('click', showSlides);

// Event Popups
function showPopup(message, delay) {
    setTimeout(() => {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `<p>${message}</p><span class="close-popup">&times;</span>`;
        document.body.appendChild(popup);

        // Close button functionality
        document.querySelector('.close-popup').addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Auto-hide popup after 10 seconds
        setTimeout(() => {
            popup.style.display = 'none';
        }, 10000);
    }, delay);
}

// Trigger popup messages
showPopup("Welcome Freshers!", 2000); // 2-second delay
showPopup("Grafest is Coming!", 7000); // 7-second delay
showPopup("Fresher Party is Coming!", 12000); // 12-second delay
