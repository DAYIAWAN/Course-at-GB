document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = 'G6ZtCfoIGnC7TMzZUebAdbEJJtLUVk37vOMa_yLV_0I';
    const URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}`;
    let likeCount = 0;

    const photoElem = document.getElementById('photo');
    const photographerNameElem = document.getElementById('photographer-name');
    const photographerLinkElem = document.getElementById('photographer-link');
    const likeButton = document.getElementById('like-button');
    const likeCountElem = document.getElementById('like-count');

    // Получение случайного изображения
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            photoElem.src = data.urls.regular;
            photographerNameElem.textContent = data.user.name;
            photographerLinkElem.href = data.user.links.html;

            // Загрузка данных из локального хранилища
            const storedData = JSON.parse(localStorage.getItem(data.id));
            if (storedData) {
                likeCount = storedData.likes;
                likeCountElem.textContent = likeCount;
            }
        })
        .catch(error => console.error('Ошибка при получении изображения:', error));

    // Обработчик нажатия на кнопку "лайк"
    likeButton.addEventListener('click', () => {
        likeCount++;
        likeCountElem.textContent = likeCount;

        // Сохранение данных в локальное хранилище
        localStorage.setItem(photoElem.src, JSON.stringify({
            id: photoElem.src,
            likes: likeCount
        }));
    });
});
