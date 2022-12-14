// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, _slideDown, _slideUp, showMore } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { lazyMedia } from './scroll/lazyload.js'
//#region Глобальный клик

document.addEventListener("click", function (e) {
	// очистка input по клику на крестик
	if (e.target.closest('.form__clear-svg')) {
		let input = e.target.closest('.form__line').querySelector('.form__input');
		input.value = '';
		input.classList.remove('_form-focus');
		input.parentElement.classList.remove('_form-focus');
		e.target.closest('.form__clear-svg').classList.remove('_active');
		// Inputmask.remove(input);
	}
	// закрытие бокового каталога при клике вне каталога.
	if (!e.target.closest(".catalog__body") && document.querySelector('.menu-open') || e.target.closest(".catalog__close")) {
		menuClose()
		if (document.documentElement.classList.contains('menu-open')) {
			document.documentElement.classList.remove('menu-open');
		}
		if (document.documentElement.classList.contains('sub-menu-open')) {
			document.documentElement.classList.remove('sub-menu-open');
		}
		if (document.querySelector('._sub-menu-open') && document.querySelector("._sub-menu-active")) {
			document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open');
			document.querySelector('._sub-menu-active').classList.remove("_sub-menu-active");
		}
	}
	// автовысота для textarea
	if (e.target.closest('textarea')) {
		txtarAutoHeight(e.target)
	}
	// спрятать/показать input в личкабе
	if (e.target.closest('.personal-data__change')) {
		changeData(e.target)
		e.preventDefault()
	}
	// смена текста кнопки в личкабе
	if (e.target.closest('.order__more-btn')) {
		let target = e.target.closest('.order__more-btn')
		target.classList.contains('_spoller-active') ? target.innerHTML = 'Свернуть детали заказа' : target.innerHTML = 'Показать детали заказа';
		e.preventDefault()
	}
});

//#endregion

//#region Открытие подкатегорий в модалке-каталоге

export function documentActions(e) {
	if (e.target.closest('[data-parent]')) {
		const targetElement = e.target.closest('[data-parent]');
		const subMenuId = targetElement.closest('[data-parent]').dataset.parent ? targetElement.closest('[data-parent]').dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		if (subMenu) {
			const activeLink = document.querySelector('._sub-menu-active');
			const activeBlock = document.querySelector('._sub-menu-open');


			if (activeLink && activeLink !== targetElement) {
				activeLink.classList.remove('_sub-menu-active');
				activeBlock.classList.remove('_sub-menu-open');
				document.documentElement.classList.remove('sub-menu-open');
			}
			document.documentElement.classList.add('sub-menu-open');
			targetElement.classList.add('_sub-menu-active');
			subMenu.classList.add('_sub-menu-open');
			showMore(subMenu.querySelectorAll('[data-showmore]'));
			e.preventDefault();
		} else {
			const activeLink = document.querySelector('._sub-menu-active');
			const activeBlock = document.querySelector('._sub-menu-open');


			if (activeLink) {
				activeLink.classList.remove('_sub-menu-active');
				activeBlock.classList.remove('_sub-menu-open');
				document.documentElement.classList.remove('sub-menu-open');
			}
		}
	}
	if (e.target.closest('.menu-catalog__back')) {
		document.documentElement.classList.remove('catalog-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
	if (e.target.closest('.sub-menu-catalog__back')) {
		document.documentElement.classList.remove('sub-menu-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}

}

//#endregion

//#region Переключатель отображения плиток в каталоге

const layout = document.querySelector('.js-layout');
if (layout) {



	if (localStorage.getItem('layout')) {
		document.querySelector('.main-catalog__cards, .favorites__cards').classList.add('row');
		layout.querySelector(".js-layout__row").classList.add('_active');
		layout.querySelector(".js-layout__column").classList.remove('_active');
	}


	layout.addEventListener("click", function (e) {
		let target = e.target;
		let cards = document.querySelector('.main-catalog__cards, .favorites__cards')
		let rowBtn = layout.querySelector(".js-layout__row")
		let colBtn = layout.querySelector(".js-layout__column")



		if (target.closest('.js-layout__column')) {
			cards.classList.remove('row')
			localStorage.removeItem('layout')
		} else if (target.closest('.js-layout__row')) {
			cards.classList.add('row')
			localStorage.setItem("layout", 'row')
		}
		if (target.closest('.js-layout__row')) {
			colBtn.classList.remove('_active')
			rowBtn.classList.add('_active')
		} else {
			colBtn.classList.add('_active')
			rowBtn.classList.remove('_active')
		}
	});
}

//#endregion

//#region высота строк в сравнении 

window.addEventListener("load", function () {
	const dataName = Array.from(document.querySelectorAll('[data-name]'));
	let names = [];
	dataName.forEach(el => {
		if (!names.includes(el.dataset.name)) {
			names.push(el.dataset.name)
		}
	});
	for (const name of names) {
		setHeight(name)
	}
	function setHeight(name) {
		const nodeName = document.querySelector(`[data-main=${name}]`);
		const node = document.querySelectorAll(`[data-name=${name}]`);
		let heights = []
		heights.push(nodeName.scrollHeight);
		node.forEach(el => {
			heights.push(el.scrollHeight);
		});
		let maxHei = Math.max(...heights);
		node.forEach(element => {
			element.style.height = maxHei + 'px';
		});
		nodeName ? nodeName.style.height = maxHei + 'px' : null;
	}
	let btnChek = document.querySelector(".radio-inline input[type=\"radio\"]:checked");
	if (btnChek) {
		btnChek.closest('.radio-inline').classList.add('checked');
	}
});

//#endregion

//#region Плавающая линия для табов


document.querySelectorAll(".float-line").forEach(e => {
	floatLine(e)
});

function floatLine(node) {
	if (!node) return

	node.addEventListener("mouseover", (e) => {
		if (e.target.classList.contains("float-line__item")) {
			node.style.setProperty(
				"--underline-width",
				`${e.target.offsetWidth}px`
			);
			node.style.setProperty(
				"--underline-offset-x",
				`${e.target.offsetLeft}px`
			);
		}
	});
	node.addEventListener("mouseleave", () =>
		node.style.setProperty("--underline-width", "0")
	);
}

//#endregion

//#region Шаринг в деталке


let shareButton = document.getElementById('share-button');
if (shareButton) {


	let thisUrl = window.location.href
	let thisTitle = document.title;
	shareButton.addEventListener('click', function () {
		// Проверка поддержки navigator.share
		if (navigator.share && isMobile.any()) {

			// navigator.share принимает объект с URL, title или text
			navigator.share({
				title: thisTitle,
				url: thisUrl
			})
				.then(function () {
					// Shareing successfull
				})
				.catch(function () {
					// Sharing failed
				})

		} else {
			flsModules.popup.open('#share-popup');
			copyUrl();
		}
	})
}
function copyUrl() {
	const copyButton = document.querySelector('.share__button');
	const copyInput = document.querySelector('.share__input');

	copyInput.value = window.location.href;
	copyInput.focus();

	copyButton.addEventListener("click", function (e) {
		copyInput.select();
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		copyButton.innerHTML = 'Ссылка скопированна';
		copyButton.classList.remove('btn__orange');
		copyButton.setAttribute('disabled', 'true');
	});
}

//#endregion

//#region автовысота для textarea

function txtarAutoHeight(target) {
	const el = target;
	if (el.closest('textarea')) {

		let origHeight
		if (el.dataset.height) {
			origHeight = el.dataset.height
		} else {
			origHeight = el.scrollHeight
			el.dataset.height = origHeight
		}
		origHeight = Number(origHeight)
		el.style.height = el.setAttribute('style', 'height: ' + (origHeight + 1) + 'px');
		el.addEventListener('input', e => {
			if (el.scrollHeight > origHeight) {
				el.style.height = 'auto';
				el.style.height = (el.scrollHeight) + 10 + 'px';
			} else {
				el.style.height = 'auto';
				el.style.height = origHeight + 'px';
			}
		});
	}
}

//#endregion

//#region спрятать/показать input в личкабе

function changeData(target) {
	let el = target.closest('.personal-data__row')
	el.classList.add('_active');
	let submitBtn = el.querySelector('.personal-data__btn')
	submitBtn.addEventListener("click", function (e) {
		el.classList.remove('_active');
		el.classList.add('show-msg');
		setTimeout(() => {
			el.classList.remove('show-msg');
		}, 3000);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape' || e.code === 'Enter' || e.code === 'NumpadEnter') {
			el.classList.remove('_active');
			el.classList.add('show-msg');
			setTimeout(() => {
				el.classList.remove('show-msg')
			}, 3000);
		}
	});
}

//#endregion

//#region Обновление lazyLoad в каталоге при изменении

const catalog = document.querySelector('.main-catalog__content');


if (catalog) {
	let catalogObserve = new MutationObserver(() => {
		lazyMedia.update();
		if (localStorage.getItem('layout')) {
			document.querySelector('.main-catalog__cards, .favorites__cards').classList.add('row');
		}
	});

	catalogObserve.observe(catalog, {
		childList: true,
		subtree: true,
	});
}

//#endregion

//#region Перемещение модалки с фильтрами под .wrapper

const filtersPopup = document.querySelector('#filters-more');

if (filtersPopup) {
	filtersPopup.remove();
	document.querySelector('.wrapper').insertAdjacentElement('afterend', filtersPopup);
	getFilterColumns(filtersPopup);
}

function getFilterColumns(popup) {
	const columns = popup.querySelectorAll('.filters__col');
	const popupWrapper = popup.querySelector('.filters__wrapper');
	columns.length > 1 ? popupWrapper.classList.add('many-cols') : null;
}

//#endregion