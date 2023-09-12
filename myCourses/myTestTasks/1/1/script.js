const popupButton = document.getElementById('popup-button');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');

popupButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});