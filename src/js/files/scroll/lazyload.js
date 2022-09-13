import LazyLoad from "vanilla-lazyload";

// Работает с объектами с класом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: '.product-card__image-ibg img, .main-catalog__image-ibg img, .banner-catalog__image-ibg img, .menu-banner__image-ibg img',
	class_loaded: '_lazy-loaded',
	use_native: true
});

// Обновить модуль
//lazyMedia.update();