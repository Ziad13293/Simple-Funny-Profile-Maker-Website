const feature =  [
    'mustache.png',
    'googly-eyes.png',
    'clown-nose.png',
    'monocle.ong',
    'pirate-patch.png',
    'sunglasses.png',
];

let currentFeatureIndex = 0;
const featureElement =  document.getElementById('funnyy-feature');
const profilePic = document.getElementById('profile-pic');
const uploudInput = document.getElementById('image-uploud');

updateFeature();

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex - 1 + features.length) % features.length;
    updateFeature();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex) + 1) % features.length;
    updateFeature();
});

uploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            profilePic.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById('downloud-btn').addEventListener('click',  () => {
    alert('In a real implementation, this would downloud the image. For now its just shows an alert.');
}
