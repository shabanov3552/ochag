/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Thumbs, Lazy } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице 
	if (document.querySelector('.swip')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swip', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.banner-catalog__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.banner-catalog__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},


			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.banner-catalog__swiper-button-prev',
				nextEl: '.banner-catalog__swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.main-page-baner__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let mainPageBlockSlider = new Swiper('.main-page-baner__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// effect: 'fade',
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},


			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.main-page-baner__swiper-button-prev',
				nextEl: '.main-page-baner__swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		let mainPageBlock = document.querySelector(".main-page-baner");
		mainPageBlock.addEventListener("mouseenter", function (e) {
			mainPageBlockSlider.autoplay.stop();
		});
		mainPageBlock.addEventListener("mouseleave", function (e) {
			mainPageBlockSlider.params.autoplay.disableOnInteraction = false;
			mainPageBlockSlider.params.autoplay.delay = 5000;
			mainPageBlockSlider.autoplay.start()
		})
	}
	if (document.querySelector('.product-slider__slider')) { // Указываем скласс нужного слайдера
		const productSliders = document.querySelectorAll('.product-slider__slider');
		let count = 1;
		productSliders.forEach((el, i) => {
			if (i + 1 === productSliders.length) el.closest('.product-slider').classList.add('last-slider');
			let className = 'product-slider__slider-' + count;
			let btnClassName = 'product-slider__nav-btns-' + count;
			el.closest('.product-slider').querySelector('.product-slider__nav-btns').classList.add(btnClassName);
			el.classList.add(className);
			// Создаем слайдер
			if (el.closest('.main-catalog')) {
				new Swiper('.' + className, { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: 6,
					spaceBetween: 0,
					speed: 300,
					watchSlidesProgress: true,
					// autoHeight: true,
					//touchRatio: 0,
					//simulateTouch: false,
					// loop: true,
					//preloadImages: false,
					//lazy: true,


					// Эффекты
					// effect: 'fade',
					// autoplay: {
					// 	delay: 3000,
					// 	disableOnInteraction: false,
					// },


					// Пагинация
					/*
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					*/

					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/

					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.' + btnClassName + ' .swiper-button-prev',
						nextEl: '.' + btnClassName + ' .swiper-button-next',
					},

					// Брейкпоинты

					breakpoints: {
						320: {
							slidesPerView: 1,
						},
						375: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						999.98: {
							slidesPerView: 2,
						},
						1150: {
							slidesPerView: 3,
						},
						1280: {
							slidesPerView: 4,
						},
						1600: {
							slidesPerView: 5,
						},
					},

					// События
					on: {

					}
				});
			} else {
				new Swiper('.' + className, { // Указываем скласс нужного слайдера
					// Подключаем модули слайдера
					// для конкретного случая
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: 6,
					spaceBetween: 0,
					speed: 300,
					watchSlidesProgress: true,
					// autoHeight: true,
					//touchRatio: 0,
					//simulateTouch: false,
					// loop: true,
					//preloadImages: false,
					//lazy: true,


					// Эффекты
					// effect: 'fade',
					// autoplay: {
					// 	delay: 3000,
					// 	disableOnInteraction: false,
					// },


					// Пагинация
					/*
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					*/

					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/

					// Кнопки "влево/вправо"
					navigation: {
						prevEl: '.' + btnClassName + ' .swiper-button-prev',
						nextEl: '.' + btnClassName + ' .swiper-button-next',
					},

					// Брейкпоинты

					breakpoints: {
						320: {
							slidesPerView: 1,
						},
						375: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						992: {
							slidesPerView: 4,
						},
						1280: {
							slidesPerView: 5,
						},
						1600: {
							slidesPerView: 6,
						},
					},

					// События
					on: {

					}
				});
			}
			count++;
		});
	}
	if (document.querySelector('.main-prod__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер


		let mainProdSlider = new Swiper('.main-prod__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			preloadImages: false,
			lazy: true,
			loadPrevNext: true,
			navigation: {
				prevEl: '.slider-prod__nav-btn.swiper-button-prev',
				nextEl: '.slider-prod__nav-btn.swiper-button-next',
			},
			thumbs: {
				swiper: {
					el: '.mini-prod__slider',
					modules: [Lazy],
					direction: 'vertical',
					slidesPerView: 'auto',
					spaceBetween: 12,
					lazy: true,
					loadPrevNext: true,
					grabCursor: true,
					breakpoints: {
						320: {
							direction: "horizontal",

						},
						767.98: {
							direction: "vertical",
						},
					},
				},
			},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			// on: {

			// }
		});
		mainProdSlider.slides.forEach((element, index) => {
			const vidos = element.querySelector('video');
			if (vidos) {
				vidos.closest('.main-prod__slide').classList.add('video-slide')
				// vidos.parentElement.setAttribute("class", '')
				mainProdSlider.thumbs.swiper.slides[index].classList.add('video-slide');
			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});