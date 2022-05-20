const advanceFilterBtn = document.querySelector('#advance-filter-btn');
const advanceFilter = document.querySelector('#advance-filter');
const listData = document.querySelector('#list-data');
const listCards = document.querySelectorAll('.list-cards ');
const getSwiper = (className, slidesPerView, nextEl, prevEl) => {
	return new Swiper(`.${className}`, {
		slidesPerView: slidesPerView,
		spaceBetween: 24,
		keyboard: {
			enabled: true,
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: nextEl,
			prevEl: prevEl,
		},
	});
};
var customerSwiper = advanceFilterBtn.classList.contains('collapsed')
	? getSwiper('customerSwiper', 4, '.custom-nav-next', '.custom-nav-prev')
	: getSwiper('customerSwiper', 3, '.custom-nav-next', '.custom-nav-prev');
var justwatchSwiper = advanceFilterBtn.classList.contains('collapsed')
	? getSwiper('justwatchSwiper', 4, '.just-watch-nav-next', '.just-watch-nav-prev')
	: getSwiper('justwatchSwiper', 3, '.just-watch-nav-next', '.just-watch-nav-prev');

const resizeListCards = () => {
	listCards.forEach(o => {
		o.querySelectorAll('.card-prod').forEach(k => {
			if (advanceFilterBtn.classList.contains('collapsed')) {
				k.classList.add('col-4');
				k.classList.remove('col-3');
			} else {
				k.classList.remove('col-4');
				k.classList.add('col-3');
			}
		});
	});
};
advanceFilterBtn.addEventListener('click', () => {
	resizeListCards();
	if (advanceFilterBtn.classList.contains('collapsed')) {
		advanceFilterBtn.classList.remove('collapsed');
		listData.classList.remove('w-100');
		advanceFilter.classList.add('show-advance-filter');
		if (Array.isArray(customerSwiper)) {
			customerSwiper.forEach(o => o.destroy());
		} else {
			customerSwiper.destroy();
		}
		customerSwiper = getSwiper('customerSwiper', 3, '.custom-nav-next', '.custom-nav-prev');
		if (Array.isArray(justwatchSwiper)) {
			justwatchSwiper.forEach(o => o.destroy());
		} else {
			justwatchSwiper.destroy();
		}
		justwatchSwiper = getSwiper('justwatchSwiper', 3, '.just-watch-nav-next', '.just-watch-nav-prev');
	} else {
		advanceFilterBtn.classList.add('collapsed');
		listData.classList.add('w-100');
		advanceFilter.classList.remove('show-advance-filter');
		if (Array.isArray(customerSwiper)) {
			customerSwiper.forEach(o => o.destroy());
		} else {
			customerSwiper.destroy();
		}
		customerSwiper = getSwiper('customerSwiper', 4, '.custom-nav-next', '.custom-nav-prev');
		if (Array.isArray(justwatchSwiper)) {
			justwatchSwiper.forEach(o => o.destroy());
		} else {
			justwatchSwiper.destroy();
		}
		justwatchSwiper = getSwiper('justwatchSwiper', 4, '.just-watch-nav-next', '.just-watch-nav-prev');
	}
});
