'use strict';

// Swipers
const initSwipers = () => {
	const homeSwiperConfig = {
		spaceBetween: 20,
		autoplay: {
			delay: 3500
		},
		pagination: {
			el: '.home-main__swiper .swiper-pagination'
		},
		breakpoints: {
			577: {
				spaceBetween: 0
			}
		}
	};

	const homeCatalogSwiperConfig = {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 20,
		navigation: {
			prevEl: '.home-catalog__prev',
			nextEl: '.home-catalog__next'
		},
		pagination: {
			el: '.home-catalog__swiper .swiper-pagination'
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				slidesPerGroup: 1
			},
			577: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30,
			},
			350: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			}
		}
	};

	const productThumbConfig = {
		spaceBetween: 24,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
	};

	const productThumbSwiper = new Swiper('.product-block__thumb', productThumbConfig);

	const productMainConfig = {
		spaceBetween: 10,
		pagination: {
			el: '.product-block__img-main .swiper-pagination'
		},
		thumbs: {
			swiper: productThumbSwiper
		}
	};
	const productMainSwiper = new Swiper('.product-block__img-main', productMainConfig);

	const homeSwiper = new Swiper('.home-main__swiper', homeSwiperConfig);
	const homeCatalogSwiper = new Swiper('.home-catalog__swiper', homeCatalogSwiperConfig);
};

initSwipers();

// Product change main image handler
// If you don't need this handler, delete / comment out the code below until the next comment

// I added different images to buttons under main image
// to see that main image changes wheh buttons under it clicked.
// *These images in buttons are the same in design

// const handleProductImg = () => {
// 	const mainImg = document.querySelector('.product-block__img-main img');
// 	const imageButtonsArr = Array.from(document.querySelectorAll('.product-block__img-small'));

// 	if (!imageButtonsArr || !mainImg) {
// 		return;
// 	}

// 	function handleProductImgChange(e) {
// 		const targetBtn = e.target.closest('.product-block__img-small');
// 		const targetImg = e.target.closest('.product-block__img-small img');
// 		const actualImageButtonsArr = Array.from(document.querySelectorAll('.product-block__img-small'));

// 		const targetSrc = targetImg.src;
// 		const targetSrcSet = targetImg.srcset;

// 		actualImageButtonsArr.forEach(item => {
// 			if (item.classList.contains('product-block__img-small_active')) {
// 				item.classList.remove('product-block__img-small_active');
// 			}
// 		});

// 		targetBtn.classList.add('product-block__img-small_active');

// 		mainImg.src = targetSrc;
// 		mainImg.srcset = targetSrcSet;
// 	}

// 	imageButtonsArr.forEach(btn => btn.addEventListener('click', evt => handleProductImgChange(evt)));

// 	console.log(imageButtonsArr);
// };

// handleProductImg();

// Mobile menu handlers
const handleMobileMenu = () => {
	const menuBtnClose = document.querySelector('#m-menu__button_close');
	const menuBtnOpen = document.querySelector('#m-menu__button_open');

	const mobileMenuOpen = () => {
		const menu = document.querySelector('.m-menu');
		const htmlElement = document.documentElement;
		
		if (!menu.classList.contains('m-menu_open')) {
			menu.classList.add('m-menu_open');
			htmlElement.classList.add('is-locked');
		}
	};
	
	const mobileMenuClose = () => {
		const menu = document.querySelector('.m-menu');
		const htmlElement = document.documentElement;
		
		if (menu.classList.contains('m-menu_open')) {
			menu.classList.remove('m-menu_open');
			htmlElement.classList.remove('is-locked');
		}
	};

	if (menuBtnClose && menuBtnOpen) {
		menuBtnClose.addEventListener('click', mobileMenuClose);
		menuBtnOpen.addEventListener('click', mobileMenuOpen);
	}
}

handleMobileMenu();

// Functions after page load
document.addEventListener(`DOMContentLoaded`, () => {});

// JQUERY
