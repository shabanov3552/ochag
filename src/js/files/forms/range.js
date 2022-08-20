// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit(rangeSlider) {
	let priceCnt = rangeSlider.closest('.price')
	if (rangeSlider) {
		let textFrom = parseInt(rangeSlider.getAttribute('data-from'));
		let textTo = parseInt(rangeSlider.getAttribute('data-to'));
		noUiSlider.create(rangeSlider, {
			start: [textFrom, textTo], // [0,200000]
			connect: true,
			range: {
				'min': [textFrom],
				'max': [textTo]
			}
		});

		const input0 = priceCnt.querySelector('.js_input-from');
		const input1 = priceCnt.querySelector('.js_input-to');
		const inputs = [input0, input1];
		rangeSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = Math.round(values[handle]);
		});

		const setRangeSlider = (i, value) => {
			let arr = [null, null];
			arr[i] = value;

			console.log(arr);

			rangeSlider.noUiSlider.set(arr);
		};

		inputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				console.log(index);
				setRangeSlider(index, e.currentTarget.value);
			});
		});
	}
}
rangeInit(document.querySelector('#range'));
rangeInit(document.querySelector('#popup-range'));


