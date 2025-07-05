// List of funny features (you'll need to create these images)
const features = [
    'mustache.png',
    'googly-eyes.png',
    'clown-nose.png',
    'monocle.png',
    'pirate-patch.png',
    'sunglasses.png'
];

let currentFeatureIndex = 0;
const featureElement = document.getElementById('funny-feature');
const profilePic = document.getElementById('profile-pic');
const uploadInput = document.getElementById('image-upload');

// Initialize with first feature
updateFeature();

// Left arrow click
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex - 1 + features.length) % features.length;
    updateFeature();
});

// Right arrow click
document.querySelector('.right-arrow').addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
    updateFeature();
});

// Upload image
uploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            profilePic.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Download button
document.getElementById('download-btn').addEventListener('click', () => {
    alert('In a real implementation, this would download the image. For now it just shows an alert.');
    // In a real app, you would use a library like html2canvas to capture and download the image
});

function updateFeature() {
    if (features.length > 0) {
        featureElement.style.display = 'block';
        featureElement.src = `features/${features[currentFeatureIndex]}`;
    } else {
        featureElement.style.display = 'none';
    }
}