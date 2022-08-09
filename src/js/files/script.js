// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", function (e) {
	if (e.target.closest('.form__clear-svg')) {
		let input = e.target.closest('.form__line').querySelector('.form__input');
		console.log(input);
		input.value = '';
		input.classList.remove('_form-focus');
		input.parentElement.classList.remove('_form-focus');
		e.target.closest('.form__clear-svg').classList.remove('_active');
	}
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
});



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

			e.preventDefault();
		} else {
			console.log('Ой ой, нет такого подменю :(')
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