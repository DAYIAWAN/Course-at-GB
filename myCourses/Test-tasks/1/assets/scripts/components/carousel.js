import { minmax } from "../utils.js";

class Carousel {
    constructor(carouselWrapper, carousel, controls, textElem, cssTransition, paddingTransition, isDots) {
        this.carouselWrapper = carouselWrapper;
        this.carousel = carousel;
        this.controls = controls;
        this.textElem = textElem;
        this.cssTransition = cssTransition;
        this.paddingTransition = paddingTransition;
        this.isDots = isDots;
        this.timer = isDots ? null : 4000;
        this.current = 1;
    }

    init() {
        this.controls.addEventListener('click', this.handleControls.bind(this));
        this.setCarouselTransition(1);
        this.handleResize();

        if (this.timer) {
            this.scrollByTimer();
        }
    }

    handleResize() {
        if (window.scrollbarWidth <= 640 && !this.isDots) {
            this.textElem.innerHTML = '1 / 6';
        }
    }

    scrollByTimer() {
        setInterval(() => {
            if (this.current === 6) {
                this.changeNumberText(false, 3);
            } else {
                this.controls.querySelector('.control__right').click();
            }
        }, this.timer);
    }

    handleControls(event) {
        const btn = event.target.closest('.btn');
        const isForward = btn.closest('[data-direction]').dataset.direction === 'right';
        if (this.isDots) {
            this.changeDots(isForward);
        } else {
            this.changeNumberText(isForward);
        }
    }

    getNumText(arr, length, isForward) {
        const numSlides = window.scrollbarWidth <= 640 ? 1 : 3;
        const numArr = arr.map((el) => parseInt(el));

        return [
            minmax(isForward ? numArr[0] + numSlides : numArr[0] - numSlides, numSlides, length),
            length
        ];
    }

    setDisabled(cardsLength) {
        if (this.current === 1 || (window.scrollbarWidth > 640 && this.current === 3)) {
            this.controls.querySelector('.control__left').classList.add('disabled');
            this.controls.querySelector('.control__right').classList.remove('disabled');
        } else if (this.current === cardsLength) {
            this.controls.querySelector('.control__left').classList.remove('disabled');
            this.controls.querySelector('.control__right').classList.add('disabled');
        } else {
            this.controls.querySelector('.control__left').classList.remove('disabled');
            this.controls.querySelector('.control__right').classList.remove('disabled');
        }
    }

    setCarouselTransition() {
        document.documentElement.style.setProperty(this.cssTransition, -((window.scrollbarWidth - this.paddingTransition) * (this.current - 1)) + 'px');
    }

    changeDots(isForward) {
        const oldCurrentDom = this.controls.querySelector('.this.current');
        const oldCurrent = parseInt(oldCurrentDom.dataset.dot);
        if ((oldCurrent === 5 && isForward) || (oldCurrent === 1 && !isForward)) return;
        this.current = isForward ? oldCurrent + 1 : oldCurrent - 1;

        oldCurrentDom.classList.remove('this.current');
        this.controls.querySelector(`[data-dot="${this.current}"]`).classList.add('this.current');
        this.setDisabled(5);
        this.setCarouselTransition(this.current);
    }

    changeNumberText(isForward, current = null) {
        const numText = this.textElem.innerText.split(' / ');

        if (current) {
            numText.splice(0, 1, current);
        }

        const cardsLength = this.carousel.querySelectorAll('.carousel-card').length;
        const newText = this.getNumText(numText, cardsLength, isForward);
        this.textElem.innerHTML = newText.join(' / ');

        this.current = newText[0];
        this.setCarouselTransition(this.current);

        if (isForward) {
            this.carousel.classList.remove('backward');
            this.carousel.classList.add('forward');
        } else {
            this.carousel.classList.remove('forward');
            this.carousel.classList.add('backward');
        }

    }
}

export default Carousel;
