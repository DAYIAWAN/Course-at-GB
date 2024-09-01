const bucketWithCards = document.querySelector('.bucket');

const secFuture = document.querySelector('.future-main');
secFuture.addEventListener('mouseover', (event) => {
    if (event.target.className == 'future-main-photo-button'){
        event.target.onclick = () =>{
            let elementForBucket = dataObjects[event.target.id-1];
            // console.log(elementForBucket);
            bucketWithCards.insertAdjacentHTML('beforeend', `
            <div class="card">
            <img src="${elementForBucket.img}" alt="${elementForBucket.title}" class="photo" />
            <div class="info">
              <h2 class="inho__heading">${elementForBucket.title}</h2>
              <div class="info__content">
                <p class="info__content-text">
                  Price: <span class="color-pink">${elementForBucket.price}</span>
                </p>
                <p class="info__content-text">
                  Color: <span class="color-grey">${elementForBucket.color}</span>
                </p>
                <p class="info__content-text">
                  Size: <span class="color-grey">${elementForBucket.size}</span>
                </p>
                <p class="info__content-text">
                  Quantity: <input class="quantaty" type="number" value="${elementForBucket.quantity}" />
                </p>
              </div>
              <button class="button-close">
                <img class="img-close" src="./img/cross.svg" alt="close">
              </button>
            </div>
          </div>
            `
            );

            // const butElem = document.querySelectorAll('.button-close');
            // butElem.forEach(element => {
            //   element.addEventListener('click', (e) => {
            //     e.target.closest('.card').remove();
            //   });
            // });          
        };     
    };
});

const buttonAllProducts = document.querySelector('.future-push');
buttonAllProducts.addEventListener('click', (ev) => {
    dataObjects.forEach(element => {
        bucketWithCards.insertAdjacentHTML('beforeend', `
        <div class="card">
        <img src="${element.img}" alt="${element.title}" class="photo" />
        <div class="info">
          <h2 class="inho__heading">${element.title}</h2>
          <div class="info__content">
            <p class="info__content-text">
              Price: <span class="color-pink">${element.price}</span>
            </p>
            <p class="info__content-text">
              Color: <span class="color-grey">${element.color}</span>
            </p>
            <p class="info__content-text">
              Size: <span class="color-grey">${element.size}</span>
            </p>
            <p class="info__content-text">
              Quantity: <input class="quantaty" type="number" value="${element.quantity}" />
            </p>
          </div>
          <button class="button-close">
            <img class="img-close" src="./img/cross.svg" alt="close">
          </button>
        </div>
      </div>
        `
        );
    });
});
 
bucketWithCards.addEventListener('mouseover', (event) => {
  if (event.target.className === 'button-close' || event.target.className === 'img-close'){
    event.target.onclick = () =>{
      event.target.closest('.card').remove();
    };    
  };
});