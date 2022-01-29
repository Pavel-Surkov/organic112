'use strict';

const homeSwiperConfig = {
	autoplay: {
		delay: 3500
	},
	pagination: {
		el: '.home-main__swiper .swiper-pagination'
	}
};

const homeCatalogSwiperConfig = {
	slidesPerView: 4,
	spaceBetween: 30,
	navigation: {
		prevEl: '.home-catalog__prev',
		nextEl: '.home-catalog__next'
	}
};

const homeSwiper = new Swiper('.home-main__swiper', homeSwiperConfig);
const homeCatalogSwiper = new Swiper('.home-catalog__swiper', homeCatalogSwiperConfig);

document.addEventListener(`DOMContentLoaded`, () => {});

// JQUERY
