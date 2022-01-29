'use strict';

const homeSwiperConfig = {
	autoplay: {
		delay: 3500
	},
	pagination: {
		el: '.home-main__swiper .swiper-pagination'
	}
};

const homeSwiper = new Swiper('.home-main__swiper', homeSwiperConfig);

document.addEventListener(`DOMContentLoaded`, () => {});

// JQUERY
