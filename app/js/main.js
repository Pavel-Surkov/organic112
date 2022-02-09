'use strict';

// Swipers
const initSwipers = () => {
	const homeSwiperConfig = {
		autoplay: {
			delay: 3500
		},
		pagination: {
			el: '.home-main__swiper + .swiper-pagination',
			type: 'bullets',
			clickable: true
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

// Subscription modal
const subscriptionModalInit = () => {
	const modal = document.querySelector('#subscription');
	const blocker = document.querySelector('#blocker');
	const htmlEl = document.documentElement;

	if (modal && !modal.classList.contains('subscription_open')) {
		modal.classList.add('subscription_open');
		blocker.classList.add('blocker_open');
		htmlEl.classList.add('is-locked');
	}
}

const subscriptionCloseHandle = () => {
	const closeSubscriptionBtn = document.querySelector('.subscription-close');

	const closeSubscriptionModal = () => {
		const modal = document.querySelector('#subscription');
		const blocker = document.querySelector('#blocker');
		const htmlEl = document.documentElement;

		if (modal && modal.classList.contains('subscription_open')) {
			modal.classList.remove('subscription_open');
			blocker.classList.remove('blocker_open');
			htmlEl.classList.remove('is-locked');
		}
	}

	if (closeSubscriptionBtn) {
		closeSubscriptionBtn.addEventListener('click', closeSubscriptionModal)
	}
}

subscriptionCloseHandle();

// Feedback modal
const feedbackOpenHandle = () => {
	const feedbackItems = Array.from(document.querySelectorAll('.feedback-item'));

	const feedbackModalOpen = () => {
		const modal = document.querySelector('#feedback-modal');
		const blocker = document.querySelector('#blocker');
		const htmlEl = document.documentElement;
	
		if (modal && !modal.classList.contains('feedback-modal_open')) {
			modal.classList.add('feedback-modal_open');
			blocker.classList.add('blocker_open');
			htmlEl.classList.add('is-locked');
		}
	}

	if (feedbackItems) {
		feedbackItems.forEach(item => item.addEventListener('click', feedbackModalOpen));
	}
}

const feedbackCloseHandle = () => {
	const closeFeedbackBtn = document.querySelector('.feedback-modal-close');

	const closeFeedbackModal = () => {
		const modal = document.querySelector('#feedback-modal');
		const blocker = document.querySelector('#blocker');
		const htmlEl = document.documentElement;

		if (modal && modal.classList.contains('feedback-modal_open')) {
			modal.classList.remove('feedback-modal_open');
			blocker.classList.remove('blocker_open');
			htmlEl.classList.remove('is-locked');
		}
	}

	if (closeFeedbackBtn) {
		closeFeedbackBtn.addEventListener('click', closeFeedbackModal)
	}
}

feedbackOpenHandle();
feedbackCloseHandle();

// Functions after page load
document.addEventListener(`DOMContentLoaded`, () => {
	subscriptionModalInit();
});

// JQUERY
