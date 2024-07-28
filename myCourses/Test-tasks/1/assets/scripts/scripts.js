import Carousel from './components/carousel.js';

class Main {
    constructor() {
        this.membersCarousel = null;
        this.stagesCarousel = null;
    }

    init() {
        this.setScrollbarWidth();
        window.addEventListener('resize', this.handleResize.bind(this));
        document.addEventListener('DOMContentLoaded', this.initCarousel.bind(this));

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    handleResize() {
        this.setScrollbarWidth();
        this.initCarousel();
    }

    initCarousel() {
        if (!this.membersCarousel) {

            this.membersCarousel = new Carousel(
                document.querySelector('.stages .carousel-wrapper'),
                document.querySelector('.stages .stages__grid'),
                document.querySelector('.stages .carousel-controls'),
                document.querySelector('.stages .carousel-controls__text'),
                '--carousel-stages-transition',
                0,
                true
            );
            this.membersCarousel.init();
        } else {
            this.membersCarousel.handleResize()
        }

        if (!this.stagesCarousel) {
            this.stagesCarousel = new Carousel(
                document.querySelector('.members .carousel-wrapper'),
                document.querySelector('.members .members__carousel'),
                document.querySelector('.members .carousel-controls'),
                document.querySelector('.members .carousel-controls__text'),
                '--carousel-members-transition',
                20,
                false
            );
            this.stagesCarousel.init();
        }
    }

    setScrollbarWidth() {
        this.scrollbarWidth = window.innerWidth - (window.innerWidth - document.documentElement.clientWidth);
        window.scrollbarWidth = this.scrollbarWidth;
        document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - (window.innerWidth - document.documentElement.clientWidth)) + 'px');
    }
}

const main = new Main();
main.init();
