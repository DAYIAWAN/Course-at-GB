document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('reviewForm')) {
        // Страница добавления отзыва
        document.getElementById('reviewForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const productName = document.getElementById('productName').value;
            const reviewText = document.getElementById('reviewText').value;
            addReview(productName, reviewText);
            document.getElementById('reviewForm').reset();
        });
    }

    if (document.getElementById('productList')) {
        // Страница просмотра отзывов
        displayProducts();
    }

    if (document.getElementById('backButton')) {
        document.getElementById('backButton').addEventListener('click', () => {
            document.getElementById('productList').style.display = 'block';
            document.getElementById('reviewList').style.display = 'none';
        });
    }
});

function addReview(productName, reviewText) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(reviewText);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function displayProducts() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productList = document.getElementById('productList');
    for (const product in reviews) {
        const productItem = document.createElement('div');
        const productLink = document.createElement('a');
        productLink.href = '#';
        productLink.textContent = product;
        productLink.addEventListener('click', () => displayReviews(product));
        productItem.appendChild(productLink);
        productList.appendChild(productItem);
    }
}

function displayReviews(product) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const reviewList = document.getElementById('reviewList');
    const productList = document.getElementById('productList');
    const currentProduct = document.getElementById('currentProduct');
    const reviewContainer = document.getElementById('reviews');

    currentProduct.textContent = product;
    reviewContainer.innerHTML = '';
    reviews[product].forEach((review, index) => {
        const reviewItem = document.createElement('li');
        reviewItem.textContent = review;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => deleteReview(product, index));
        reviewItem.appendChild(deleteButton);
        reviewContainer.appendChild(reviewItem);
    });

    productList.style.display = 'none';
    reviewList.style.display = 'block';
}

function deleteReview(product, index) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    reviews[product].splice(index, 1);
    if (reviews[product].length === 0) {
        delete reviews[product];
    }
    localStorage.setItem('reviews', JSON.stringify(reviews));
    displayReviews(product);
}
