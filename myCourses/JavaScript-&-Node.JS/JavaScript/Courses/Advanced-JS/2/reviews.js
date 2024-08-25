document.getElementById('submit-review').addEventListener('click', function() {
    const reviewText = document.getElementById('review-text').value.trim();
    try {
        addReview(reviewText);
        displayReviews();
    } catch (error) {
        alert(error.message);
    }
});

const reviews = [];

function addReview(text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error('Review must be between 50 and 500 characters.');
    }
    const newReview = {
        id: Date.now().toString(),
        text
    };
    reviews.push(newReview);
    document.getElementById('review-text').value = ''; // Очищаем поле ввода
}

function displayReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.textContent = review.text;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Инициализация с начальным массивом отзывов
const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [{ id: "3", text: "Интересный дизайн, но дорогой." }],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [{ id: "4", text: "Люблю играть на PS5, графика на высоте." }],
    },
];

// Загрузка начальных данных
initialData.forEach(product => {
    product.reviews.forEach(review => reviews.push(review));
});
displayReviews();
