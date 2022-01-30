'use strict';

// Swipers
const initSwipers = () => {
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
};

initSwipers();

// Product change main image handler
// If you don't need this handler, delete / comment out the code below until the next comment

// I added different images to buttons under main image
// to see that main image changes wheh buttons under it clicked.
// *These images in buttons are the same in design

const handleProductImg = () => {
	const mainImg = document.querySelector('.product-block__img-main img');
	const imageButtonsArr = Array.from(document.querySelectorAll('.product-block__img-small'));

	if (!imageButtonsArr || !mainImg) {
		return;
	}

	function handleProductImgChange(e) {
		const targetBtn = e.target.closest('.product-block__img-small');
		const targetImg = e.target.closest('.product-block__img-small img');
		const actualImageButtonsArr = Array.from(document.querySelectorAll('.product-block__img-small'));

		const targetSrc = targetImg.src;
		const targetSrcSet = targetImg.srcset;

		actualImageButtonsArr.forEach(item => {
			if (item.classList.contains('product-block__img-small_active')) {
				item.classList.remove('product-block__img-small_active');
			}
		});

		targetBtn.classList.add('product-block__img-small_active');

		mainImg.src = targetSrc;
		mainImg.srcset = targetSrcSet;
	}

	imageButtonsArr.forEach(btn => btn.addEventListener('click', evt => handleProductImgChange(evt)));

	console.log(imageButtonsArr);
};

handleProductImg();

// Functions after page load

document.addEventListener(`DOMContentLoaded`, () => {});

// JQUERY
