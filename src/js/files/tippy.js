// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('[data-tippy-content]', {
	placement: 'right-end',
});
const breakpoint = window.matchMedia("(max-width: 768px)");

const breakpointChecker = () => {
	if (breakpoint.matches) {
		for (let i = 0; i < flsModules.tippy.length; i++) {
			flsModules.tippy[i].setProps({
				placement: "top"
			});
		}

	} else {
		for (let i = 0; i < flsModules.tippy.length; i++) {
			flsModules.tippy[i].setProps({
				placement: "right-end"
			});
		}
	}
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();