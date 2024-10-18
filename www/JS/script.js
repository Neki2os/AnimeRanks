document.addEventListener('DOMContentLoaded', function () {
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach(image => {
image.addEventListener('click', function () {
image.style.borderColor = image.style.borderColor === 'white' ? '#b22222' : 'white';
});
});
});