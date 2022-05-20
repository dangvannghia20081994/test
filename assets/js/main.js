const relieveBtnScrollTop = () => {
	const target = document.querySelector('#btnScrollToTop');
	const currentCs = window.pageYOffset;
	if (!target) {
		return;
	}
	currentCs > 250
		? (() => {
				target.classList.add('btn-scroll-to-top--on-show');
		  })()
		: (() => {
				target.classList.remove('btn-scroll-to-top--on-show');
		  })();
};

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', () => {
		relieveBtnScrollTop();
	});
	document.querySelector('#btnScrollToTop').addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
});
