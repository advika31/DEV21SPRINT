/* THIS JS FILE IS MADE BY ADVIKA */

document.addEventListener('DOMContentLoaded', function() {
    const photoUpload = document.getElementById('photo-upload');
    const capturePhoto = document.getElementById('capture-photo');
    const photoPreviewImg = document.getElementById('photo-preview-img');
    const sharePhoto = document.getElementById('share-photo');
    const galleryPhotos = document.getElementById('gallery-photos');
  
    let currentPhoto = '';
  
    // Handle photo upload
    photoUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                currentPhoto = e.target.result;
                photoPreviewImg.src = currentPhoto;
            };
            reader.readAsDataURL(file);
        }
    });
  
    // Handle photo capture (assuming webcam functionality)
    capturePhoto.addEventListener('click', function() {
        // Implement webcam capture functionality
    });

  
    // Share photo
    sharePhoto.addEventListener('click', function() {
        if (currentPhoto) {
            // Implement moderation and upload functionality
            // For demonstration, directly add to gallery
            const img = document.createElement('img');
            img.src = currentPhoto;
            img.classList.add('gallery-photo');
            galleryPhotos.appendChild(img);
        }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const photoUpload = document.getElementById('photo-upload');
    const capturePhoto = document.getElementById('capture-photo');
    const photoPreviewImg = document.getElementById('photo-preview-img');
    const sharePhoto = document.getElementById('share-photo');
    const galleryPhotos = document.getElementById('gallery-photos');
  
    let currentPhoto = '';
  
    // Handle photo upload
    photoUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                currentPhoto = e.target.result;
                photoPreviewImg.src = currentPhoto;
            };
            reader.readAsDataURL(file);
        }
    });
  
    // Handle photo capture (assuming webcam functionality)
    capturePhoto.addEventListener('click', function() {
        // Implement webcam capture functionality
    });

  
    // Share photo
    sharePhoto.addEventListener('click', function() {
        if (currentPhoto) {
            // Implement moderation and upload functionality
            // For demonstration, directly add to gallery
            const img = document.createElement('img');
            img.src = currentPhoto;
            img.classList.add('gallery-photo');
            galleryPhotos.appendChild(img);
        }
    });
  });
    