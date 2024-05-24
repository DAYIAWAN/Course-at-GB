fetch('products.json')
  .then(response => response.json())
  .then(products => {
    let productsHTML = '';
    for (let product of products) {
      productsHTML += `
        <div class="product__card">
          <div class="prod__image_cont">
            <img class="product__image" src="${product.image}" alt="${product.name}">
            <button class="btn">
              <img src="./img/cart.png" alt="cart"> 
              Add to Cart
            </button>
          </div>
          <div class="card__text">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <h4>$${product.price}</h4>
          </div>
        </div>
      `;
    }
    document.querySelector('.all__cards').innerHTML = productsHTML;
  });