// =================== variables =================== //

const allowBackspaceCheckbox = document.getElementById('allow-backspace');
const showFingerCheckbox = document.getElementById('show-finger');
const highlightErrorsCheckbox = document.getElementById('highlight-errors');
const includeShiftedCheckbox = document.getElementById('include-shifted');
const includeHalfspaceCheckbox = document.getElementById('include-half-space');
const includeHalfspaceOption = document.getElementById('include-half-space-option');
const showErrorsRadios = document.querySelectorAll('input[name="show-errors-count"]');
const showAccuracyRadios = document.querySelectorAll('input[name="show-accuracy"]');
const showSpeedRadios = document.querySelectorAll('input[name="show-speed"]');
const showTimerRadios = document.querySelectorAll('input[name="show-timer"]');
const speedUnitRadios = document.querySelectorAll('input[name="speed-unit"]');
const timerModeRadios = document.querySelectorAll('input[name="timer-mode"]');
const languageRadios = document.querySelectorAll('input[name="language"]');
const languageFieldset = languageRadios[0].parentElement.parentElement;
const practiceModeRadios = document.querySelectorAll('input[name="practice-mode"]');
const generationMethodRadios = document.querySelectorAll('input[name="text-generation-method"]');
const fingerMappingContainer = document.getElementById('finger-mapping-container');
const fingerMappingKeyboard = document.getElementById('finger-mapping-keyboard');
const fingerMappingNumpad = document.getElementById('finger-mapping-numpad');
const lengthInput = document.getElementById('length-input');
const lengthControl = lengthInput.parentElement.parentElement;
const lengthIncreaseButton = document.getElementById('length-increase-button');
const lengthDecreaseButton = document.getElementById('length-decrease-button');
const fileInput = document.getElementById('file-input');
const fileNameDisplay = document.getElementById('file-name-display');
const filterButton = document.getElementById('filter-button');
const numpadOverlay = document.getElementById('numpad-overlay');
const keyboardOverlay = document.getElementById('keyboard-overlay');
const defaultModalKeyboard = document.getElementById('default-modal-keyboard');
const shiftedModalKeyboard = document.getElementById('shifted-modal-keyboard');
const numpadModalKeyboard = document.getElementById('numpad-modal-keyboard');
const modalCloseButtons = document.querySelectorAll('.js-modal-close-button');
const gettingStartedTitle = document.getElementById('getting-started-title');
const gettingStartedOverlay = document.getElementById('getting-started-overlay');
const startButton = document.getElementById('start-button');
const pauseResumeButton = document.getElementById('pause-resume-button');
const resetButton = document.getElementById('reset-button');
const inputBox = document.getElementById('input-box');
const textToTypeBox = document.getElementById('text-to-type-box');
const chooseFileButton = document.getElementById('choose-file-button');
const toggleControls = document.querySelectorAll('.js-toggle-controls');
const radioOptions = document.querySelectorAll('.js-radio-option');
const minuteInput = document.getElementById('minute-input');
const minuteIncreaseButton = document.getElementById('minute-increase-button');
const minuteDecreaseButton = document.getElementById('minute-decrease-button');
const secondInput = document.getElementById('second-input');
const secondIncreaseButton = document.getElementById('second-increase-button');
const secondDecreaseButton = document.getElementById('second-decrease-button');
const durationInputSection = document.getElementById('duration-input-section');
const errorsBadge = document.getElementById('errors-badge');
const accuracyBadge = document.getElementById('accuracy-badge');
const speedBadge = document.getElementById('speed-badge');
const timerBadge = document.getElementById('timer-badge');
const handContainer = document.querySelector('.hand-container');
const temporaryHandContainer = document.getElementById('temporary-hand-container');

const keyboardKeys = {
	english: {
		default: [
			// row 1
			'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⟵',

			// row 2
			'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',

			// row 3
			'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',

			// row 4
			'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',

			// row 5
			'Ctrl', 'Space', 'Ctrl'
		],
		shifted: [
			// row 1
			'~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '⟵',

			// row 2
			'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',

			// row 3
			'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',

			// row 4
			'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift',

			// row 5
			'Ctrl', 'Space', 'Ctrl'
		],
	},
	persian: {
		default: [
			// row 1
			'÷', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰', '-', '=', '⟵',

			// row 2
			'Tab', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ', 'پ',

			// row 3
			'Caps Lock', 'ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ک', 'گ', 'Enter',

			// row 4
			'Shift', 'ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'ئ', 'و', '.', '/', 'Shift',

			// row 5
			'Ctrl', 'Space', 'Ctrl'
		],
		shifted: [
			// row 1
			"×", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "_", "+", "⟵",

			// row 2
			"Tab", "ً", "ٌ", "ٍ", "ريال", "،", "؛", ",", "]", "[", "\\", "}", "{", "|",

			// row 3
			"Caps Lock", "َ", "ُ", "ِ", "ّ", "ۃ", "آ", "ـ", "«", "»", ":", "\"", "Enter",

			// row 4
			"Shift", "ة", "ي", "ژ", "ؤ", "إ", "أ", "ء", "<", ">", "؟", "Shift",

			// row 5
			'Ctrl', 'Space', 'Ctrl'
		],
	},
	numpad: {
		default: [
			// row 1
			'Num', '/', '*', '-',

			// row 2
			'7', '8', '9', '+',

			// row 3
			'4', '5', '6',

			// row 4
			'1', '2', '3', 'Enter',

			// row 5
			'0', '.'
		]
	}
}

const fingersMap = {
	english: [
		// row 1
		{ transform: '-153%, -60%', handedness: 'left', finger: 'pinky' },
		{ transform: '-132%, -58%', handedness: 'left', finger: 'pinky' },
		{ transform: '-125%, -35%', handedness: 'left', finger: 'ring' },
		{ transform: '-120%, -23%', handedness: 'left', finger: 'middle' },
		{ transform: '-125%, -30%', handedness: 'left', finger: 'index' },
		{ transform: '-103%, -30%', handedness: 'left', finger: 'index' },

		{ transform: '-54%, -30%', handedness: 'right', finger: 'index' },
		{ transform: '-33%, -30%', handedness: 'right', finger: 'index' },
		{ transform: '-37%, -23%', handedness: 'right', finger: 'middle' },
		{ transform: '-34%, -35%', handedness: 'right', finger: 'ring' },
		{ transform: '-26%, -60%', handedness: 'right', finger: 'pinky' },
		{ transform: '-4%, -60%', handedness: 'right', finger: 'pinky' },
		{ transform: '18%, -60%', handedness: 'right', finger: 'pinky' },
		{ transform: '45%, -60%', handedness: 'right', finger: 'pinky' },


		// row 2
		{ transform: '-150%, -35%', handedness: 'left', finger: 'pinky' },
		{ transform: '-123%, -35%', handedness: 'left', finger: 'pinky' },
		{ transform: '-115%, -12%', handedness: 'left', finger: 'ring' },
		{ transform: '-110%, 0%', handedness: 'left', finger: 'middle' },
		{ transform: '-115%, -7%', handedness: 'left', finger: 'index' },
		{ transform: '-93%, -7%', handedness: 'left', finger: 'index' },

		{ transform: '-44%, -7%', handedness: 'right', finger: 'index' },
		{ transform: '-23%, -7%', handedness: 'right', finger: 'index' },
		{ transform: '-27%, 0%', handedness: 'right', finger: 'middle' },
		{ transform: '-24%, -12%', handedness: 'right', finger: 'ring' },
		{ transform: '-14%, -37%', handedness: 'right', finger: 'pinky' },
		{ transform: '8%, -37%', handedness: 'right', finger: 'pinky' },
		{ transform: '30%, -37%', handedness: 'right', finger: 'pinky' },
		{ transform: '53%, -37%', handedness: 'right', finger: 'pinky' },

		// // row 3
		{ transform: '-145%, -14%', handedness: 'left', finger: 'pinky' },
		{ transform: '-117%, -14%', handedness: 'left', finger: 'pinky' },
		{ transform: '-109%, 9%', handedness: 'left', finger: 'ring' },
		{ transform: '-106%, 21%', handedness: 'left', finger: 'middle' },
		{ transform: '-111%, 14%', handedness: 'left', finger: 'index' },
		{ transform: '-89%, 14%', handedness: 'left', finger: 'index' },

		{ transform: '-40%, 14%', handedness: 'right', finger: 'index' },
		{ transform: '-17%, 14%', handedness: 'right', finger: 'index' },
		{ transform: '-22%, 21%', handedness: 'right', finger: 'middle' },
		{ transform: '-18%, 11%', handedness: 'right', finger: 'ring' },
		{ transform: '-12%, -14%', handedness: 'right', finger: 'pinky' },
		{ transform: '10%, -14%', handedness: 'right', finger: 'pinky' },
		{ transform: '42%, -14%', handedness: 'right', finger: 'pinky' },

		// // row 4
		{ transform: '-140%, 7%', handedness: 'left', finger: 'pinky' },
		{ transform: '-103%, 7%', handedness: 'left', finger: 'pinky' },
		{ transform: '-95%, 30%', handedness: 'left', finger: 'ring' },
		{ transform: '-93%, 42%', handedness: 'left', finger: 'middle' },
		{ transform: '-97%, 35%', handedness: 'left', finger: 'index' },
		{ transform: '-75%, 35%', handedness: 'left', finger: 'index' },

		{ transform: '-26%, 35%', handedness: 'right', finger: 'index' },
		{ transform: '-3%, 35%', handedness: 'right', finger: 'index' },
		{ transform: '-7%, 42%', handedness: 'right', finger: 'middle' },
		{ transform: '-4%, 30%', handedness: 'right', finger: 'ring' },
		{ transform: '4%, 7%', handedness: 'right', finger: 'pinky' },
		{ transform: '40%, 7%', handedness: 'right', finger: 'pinky' },

		// // row 5
		{ transform: '30%, 8%', handedness: 'right', finger: 'thumb' },
		{ transform: '-125%, 8%', handedness: 'left', finger: 'thumb' },
	],
	persian: [
		// row 1
		{ transform: '-153%, -60%', handedness: 'left', finger: 'pinky' },
		{ transform: '-132%, -58%', handedness: 'left', finger: 'pinky' },
		{ transform: '-125%, -35%', handedness: 'left', finger: 'ring' },
		{ transform: '-120%, -23%', handedness: 'left', finger: 'middle' },
		{ transform: '-125%, -30%', handedness: 'left', finger: 'index' },
		{ transform: '-103%, -30%', handedness: 'left', finger: 'index' },

		{ transform: '-54%, -30%', handedness: 'right', finger: 'index' },
		{ transform: '-33%, -30%', handedness: 'right', finger: 'index' },
		{ transform: '-37%, -23%', handedness: 'right', finger: 'middle' },
		{ transform: '-34%, -35%', handedness: 'right', finger: 'ring' },
		{ transform: '-26%, -60%', handedness: 'right', finger: 'pinky' },
		{ transform: '-4%, -60%', handedness: 'right', finger: 'pinky' },
		{ transform: '18%, -60%', handedness: 'right', finger: 'pinky' },
		{ transform: '45%, -60%', handedness: 'right', finger: 'pinky' },


		// row 2
		{ transform: '-150%, -35%', handedness: 'left', finger: 'pinky' },
		{ transform: '-123%, -35%', handedness: 'left', finger: 'pinky' },
		{ transform: '-115%, -12%', handedness: 'left', finger: 'ring' },
		{ transform: '-110%, 0%', handedness: 'left', finger: 'middle' },
		{ transform: '-115%, -7%', handedness: 'left', finger: 'index' },
		{ transform: '-93%, -7%', handedness: 'left', finger: 'index' },

		{ transform: '-44%, -7%', handedness: 'right', finger: 'index' },
		{ transform: '-23%, -7%', handedness: 'right', finger: 'index' },
		{ transform: '-27%, 0%', handedness: 'right', finger: 'middle' },
		{ transform: '-24%, -12%', handedness: 'right', finger: 'ring' },
		{ transform: '-14%, -37%', handedness: 'right', finger: 'pinky' },
		{ transform: '8%, -37%', handedness: 'right', finger: 'pinky' },
		{ transform: '30%, -37%', handedness: 'right', finger: 'pinky' },
		{ transform: '53%, -37%', handedness: 'right', finger: 'pinky' },

		// // row 3
		{ transform: '-145%, -14%', handedness: 'left', finger: 'pinky' },
		{ transform: '-117%, -14%', handedness: 'left', finger: 'pinky' },
		{ transform: '-109%, 9%', handedness: 'left', finger: 'ring' },
		{ transform: '-106%, 21%', handedness: 'left', finger: 'middle' },
		{ transform: '-111%, 14%', handedness: 'left', finger: 'index' },
		{ transform: '-89%, 14%', handedness: 'left', finger: 'index' },

		{ transform: '-40%, 14%', handedness: 'right', finger: 'index' },
		{ transform: '-17%, 14%', handedness: 'right', finger: 'index' },
		{ transform: '-22%, 21%', handedness: 'right', finger: 'middle' },
		{ transform: '-18%, 11%', handedness: 'right', finger: 'ring' },
		{ transform: '-12%, -14%', handedness: 'right', finger: 'pinky' },
		{ transform: '10%, -14%', handedness: 'right', finger: 'pinky' },
		{ transform: '42%, -14%', handedness: 'right', finger: 'pinky' },

		// // row 4
		{ transform: '-140%, 7%', handedness: 'left', finger: 'pinky' },
		{ transform: '-103%, 7%', handedness: 'left', finger: 'pinky' },
		{ transform: '-95%, 30%', handedness: 'left', finger: 'ring' },
		{ transform: '-93%, 42%', handedness: 'left', finger: 'middle' },
		{ transform: '-97%, 35%', handedness: 'left', finger: 'index' },
		{ transform: '-75%, 35%', handedness: 'left', finger: 'index' },

		{ transform: '-26%, 35%', handedness: 'right', finger: 'index' },
		{ transform: '-3%, 35%', handedness: 'right', finger: 'index' },
		{ transform: '-7%, 42%', handedness: 'right', finger: 'middle' },
		{ transform: '-4%, 30%', handedness: 'right', finger: 'ring' },
		{ transform: '4%, 7%', handedness: 'right', finger: 'pinky' },
		{ transform: '40%, 7%', handedness: 'right', finger: 'pinky' },

		// // row 5
		{ transform: '30%, 8%', handedness: 'right', finger: 'thumb' },
		{ transform: '-125%, 8%', handedness: 'left', finger: 'thumb' },
	],
	numpad: [
		// row 1 
		{ transform: '-70%, -33%', handedness: 'right', finger: 'index' },
		{ transform: '-73%, -28%', handedness: 'right', finger: 'middle' },
		{ transform: '-69%, -37%', handedness: 'right', finger: 'ring' },
		{ transform: '-60%, -63%', handedness: 'right', finger: 'pinky' },

		// row 2
		{ transform: '-70%, -10%', handedness: 'right', finger: 'index' },
		{ transform: '-73%, -5%', handedness: 'right', finger: 'middle' },
		{ transform: '-69%, -14%', handedness: 'right', finger: 'ring' },
		{ transform: '-60%, -30%', handedness: 'right', finger: 'pinky' },

		// row 3
		{ transform: '-70%, 13%', handedness: 'right', finger: 'index' },
		{ transform: '-73%, 18%', handedness: 'right', finger: 'middle' },
		{ transform: '-69%, 9%', handedness: 'right', finger: 'ring' },

		// row 4
		{ transform: '-70%, 37%', handedness: 'right', finger: 'index' },
		{ transform: '-73%, 42%', handedness: 'right', finger: 'middle' },
		{ transform: '-69%, 34%', handedness: 'right', finger: 'ring' },
		{ transform: '-60%, 20%', handedness: 'right', finger: 'pinky' },

		// row 5
		{ transform: '-30%, 10%', handedness: 'right', finger: 'thumb' },
		{ transform: '-69%, 57%', handedness: 'right', finger: 'ring' },
	]
};

const validCharacters = {
	english: [
		'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
		'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
		'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
		'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ' ', '\n',

		'~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
		'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
		'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"',
		'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'
	],
	persian: [
		'÷', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰', '-', '=',
		'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ', 'پ',
		'ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ک', 'گ',
		'ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'ئ', 'و', '.', '/', ' ', '\n', '‌',

		'×', '!', '@', '#', '$', '%', '^', '&', '*', ')', '(', '_', '+',
		'ً', 'ٌ', 'ٍ', 'ريال', '،', '؛', ',', ']', '[', '\\', '}', '{', '|',
		'َ', 'ُ', 'ِ', 'ّ', 'ۃ', 'آ', 'ـ', '«', '»', ':', '"',
		'ة', 'ي', 'ژ', 'ؤ', 'إ', 'أ', 'ء', '<', '>', '؟'
	],
	numpad: [
		'/', '*', '-',
		'7', '8', '9', '+',
		'4', '5', '6',
		'1', '2', '3',
		'0', '.', '\n',
	]
}

const state = {
	controls: {
		allowBackspace: false,
		showFinger: true,
		highlightErrors: true,
		showErrors: 'while typing',
		showAccuracy: 'while typing',
		showSpeed: 'while typing',
		showTimer: 'while typing',
		speedUnit: 'cpm',
		timerMode: 'timer',
		duration: {
			minute: 1,
			second: 30
		}
	},
	textSettings: {
		textLength: 100,
		language: 'english',
		practiceMode: 'main',
		generationMethod: 'original',
		includeShifted: false,
		includeHalfspace: false,
		allowedKeys: []
	},
	sessionStatus: 'ready',
	// sessionStatus values:
	// 	ready
	// 	started
	// 	typing
	// 	paused
	// 	finished
	currentCharacterIndex: 0,
	statistics: {
		errors: 0,
		accuracy: 0,
		speed: 0
	}
};

let fileContent;
let intervalId;
let deciseconds;
let textToType = {
	text: '',
	charactersState: []
};

// =================== initialize =================== //

fileInput.setAttribute("accept", ".docx");
fileInput.removeAttribute("multiple");

// =================== event listeners =================== //

document.addEventListener('keydown', () => {
	if (keyboardOverlay.style.display !== 'none') {
		keyboardOverlay.style.display = 'none';
	}

	if (numpadOverlay.style.display !== 'none') {
		numpadOverlay.style.display = 'none';
	}

	if (gettingStartedOverlay.style.display !== 'none') {
		gettingStartedOverlay.style.display = 'none';
	}
});

allowBackspaceCheckbox.addEventListener('change', (event) => {
	state.controls.allowBackspace = event.target.checked;
});

showFingerCheckbox.addEventListener('change', (event) => {
	state.controls.showFinger = event.target.checked;

	if (state.controls.showFinger) {
		fingerMappingContainer.style.display = 'block';
	}
	else {
		fingerMappingContainer.style.display = 'none';
	}
});

highlightErrorsCheckbox.addEventListener('change', (event) => {
	state.controls.highlightErrors = event.target.checked;
});

includeShiftedCheckbox.addEventListener('change', (event) => {
	state.textSettings.includeShifted = event.target.checked;

	if (state.textSettings.includeShifted) {
		shiftedModalKeyboard.style.opacity = '100%';
		shiftedModalKeyboard.style.pointerEvents = 'auto';
	}
	else {
		shiftedModalKeyboard.style.opacity = '60%';
		shiftedModalKeyboard.style.pointerEvents = 'none';

		state.textSettings.allowedKeys = state.textSettings.allowedKeys.filter(key => !keyboardKeys.english.shifted.includes(key));
		state.textSettings.allowedKeys = state.textSettings.allowedKeys.filter(key => !keyboardKeys.persian.shifted.includes(key));

		renderKeyboardLook();
	}
});

includeHalfspaceCheckbox.addEventListener('change', (event) => {
	state.textSettings.includeHalfspace = event.target.checked;

	if (state.textSettings.includeHalfspace) {
		state.textSettings.allowedKeys.push('‌');
		state.textSettings.allowedKeys.sort((a, b) => a - b);
	}
	else {
		state.textSettings.allowedKeys = state.textSettings.allowedKeys.filter(key => key !== '‌');
	}
});

showErrorsRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		showErrorsRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.controls.showErrors = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		if (state.controls.showErrors === 'while typing') {
			errorsBadge.classList.replace('badge--error--disabled', 'badge--error--default');
		}
		else if (state.controls.showErrors === 'after completion') {
			errorsBadge.classList.replace('badge--error--default', 'badge--error--disabled');
		}
	});
});

showAccuracyRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		showAccuracyRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.controls.showAccuracy = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		if (state.controls.showAccuracy === 'while typing') {
			accuracyBadge.classList.replace('badge--success--disabled', 'badge--success--default');
		}
		else if (state.controls.showAccuracy === 'after completion') {
			accuracyBadge.classList.replace('badge--success--default', 'badge--success--disabled');
		}
	});
});

showSpeedRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		showSpeedRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.controls.showSpeed = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		if (state.controls.showSpeed === 'while typing') {
			speedBadge.classList.replace('badge--info--disabled', 'badge--info--default');
		}
		else if (state.controls.showSpeed === 'after completion') {
			speedBadge.classList.replace('badge--info--default', 'badge--info--disabled');
		}
	});
});

showTimerRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		showTimerRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.controls.showTimer = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		if (state.controls.showTimer === 'while typing') {
			timerBadge.classList.replace('badge--warning--disabled', 'badge--warning--default');
		}
		else if (state.controls.showTimer === 'after completion') {
			timerBadge.classList.replace('badge--warning--default', 'badge--warning--disabled');
		}
	});
});

speedUnitRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		speedUnitRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.controls.speedUnit = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		speedBadge.textContent = `
			Speed: 0${state.controls.speedUnit === 'cpm' ? 'CPM' : 'WPM'}
		`;
	});
});

timerModeRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		timerModeRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.controls.timerMode = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');

			if (event.target.value === 'timer') {
				durationInputSection.style.display = 'none';
			}
			else if (event.target.value === 'stopwatch') {
				durationInputSection.style.display = 'flex';
			}
		}
	});
});

minuteInput.addEventListener('change', (event) => {
	let inputValue = Math.round(Number(event.target.value));

	if (inputValue < 0) {
		inputValue = 0;
	}
	else if (inputValue > 59) {
		inputValue = 59;
	}

	event.target.value = inputValue;
	state.controls.duration.minute = inputValue;
});

minuteIncreaseButton.addEventListener('click', () => {
	if (state.controls.duration.minute < 59) {
		minuteInput.value = Number(minuteInput.value) + 1;
		state.controls.duration.minute = minuteInput.value;
	}
});

minuteDecreaseButton.addEventListener('click', () => {
	if (state.controls.duration.minute > 0) {
		minuteInput.value = Number(minuteInput.value) - 1;
		state.controls.duration.minute = minuteInput.value;
	}
});

secondInput.addEventListener('change', (event) => {
	let inputValue = Math.round(Number(event.target.value));

	if (inputValue < 0) {
		inputValue = 0;
	}
	else if (inputValue > 59) {
		inputValue = 59;
	}

	event.target.value = inputValue;
	state.controls.duration.second = inputValue;
});

secondIncreaseButton.addEventListener('click', () => {
	if (state.controls.duration.second < 59) {
		secondInput.value = Number(secondInput.value) + 1;
		state.controls.duration.second = secondInput.value;
	}
});

secondDecreaseButton.addEventListener('click', () => {
	if (state.controls.duration.second > 0) {
		secondInput.value = Number(secondInput.value) - 1;
		state.controls.duration.second = secondInput.value;
	}
});

lengthInput.addEventListener('change', (event) => {
	let inputValue = Math.round(Number(event.target.value));

	if (inputValue < 50) {
		inputValue = 50;
	}
	else if (inputValue > 1000) {
		inputValue = 1000;
	}

	event.target.value = inputValue;
	state.textSettings.textLength = inputValue;
});

lengthIncreaseButton.addEventListener('click', () => {
	if (state.textSettings.textLength < 1000) {
		lengthInput.value = Number(lengthInput.value) + 1;
		state.textSettings.textLength = lengthInput.value;
	}
});

lengthDecreaseButton.addEventListener('click', () => {
	if (state.textSettings.textLength > 50) {
		lengthInput.value = Number(lengthInput.value) - 1;
		state.textSettings.textLength = lengthInput.value;
	}
});

languageRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		languageRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.textSettings.language = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		if (state.textSettings.language === 'english') {
			includeHalfspaceOption.style.display = 'none';


			inputBox.style.textAlign = 'left';
			inputBox.style.direction = 'ltr';
			textToTypeBox.style.textAlign = 'left';
			textToTypeBox.style.direction = 'ltr';

		}
		else if (state.textSettings.language === 'persian') {
			includeHalfspaceOption.style.display = 'flex';

			inputBox.style.textAlign = 'right';
			inputBox.style.direction = 'rtl';
			textToTypeBox.style.textAlign = 'right';
			textToTypeBox.style.direction = 'rtl';
		}

		renderKeyboardKeys();
		state.textSettings.allowedKeys = [];
		renderKeyboardLook();
	});
});

practiceModeRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		practiceModeRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.textSettings.practiceMode = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		if (state.textSettings.practiceMode === 'main') {
			fingerMappingKeyboard.style.display = 'block';
			fingerMappingNumpad.style.display = 'none';
			fingerMappingContainer.style.paddingInline = '0';

			languageFieldset.style.display = 'block';
		}
		else if (state.textSettings.practiceMode === 'numpad') {
			fingerMappingKeyboard.style.display = 'none';
			fingerMappingNumpad.style.display = 'grid';
			fingerMappingContainer.style.paddingInline = '35%';

			languageFieldset.style.display = 'none';
		}

		state.textSettings.allowedKeys = [];
		renderKeyboardLook();
	});
});

generationMethodRadios.forEach(radio => {
	radio.addEventListener('change', (event) => {
		generationMethodRadios.forEach(radio => {
			radio.nextElementSibling.classList.replace('radio-option-text--checked', 'radio-option-text--unchecked');
		});

		if (event.target.checked) {
			state.textSettings.generationMethod = event.target.value;
			event.target.nextElementSibling.classList.replace('radio-option-text--unchecked', 'radio-option-text--checked');
		}

		if (state.textSettings.generationMethod === 'original') {
			lengthControl.style.display = 'none';
			filterButton.style.display = 'none';
		}
		else if (state.textSettings.generationMethod === 'random') {
			lengthControl.style.display = 'flex';
			filterButton.style.display = 'flex';
		}

		extractFileContent();
	});
});

fileInput.addEventListener("change", (event) => {
	extractFileContent();
});

chooseFileButton.addEventListener('click', () => {
	fileInput.value = "";
	fileNameDisplay.textContent = 'No file chosen';
	fileContent = undefined;
});

filterButton.addEventListener('click', () => {
	if (state.textSettings.practiceMode === 'numpad') {
		numpadOverlay.style.display = 'flex';
	}
	else if (state.textSettings.practiceMode === 'main') {
		keyboardOverlay.style.display = 'flex';
	}
});

modalCloseButtons.forEach(closeButton => {
	closeButton.addEventListener('click', () => {
		keyboardOverlay.style.display = 'none';
		numpadOverlay.style.display = 'none';
	});
});

gettingStartedTitle.addEventListener('mouseenter', () => {
	gettingStartedOverlay.style.display = 'flex';
});
gettingStartedTitle.addEventListener('mouseleave', () => {
	gettingStartedOverlay.style.display = 'none';
});

defaultModalKeyboard.querySelectorAll('.key').forEach(key => {
	key.addEventListener('click', (event) => {
		if (state.textSettings.allowedKeys.includes(event.target.textContent)) {
			state.textSettings.allowedKeys = state.textSettings.allowedKeys.filter((key) => {
				if (key === event.target.textContent)
					return false;
				else
					return true;
			});
		}
		else {
			state.textSettings.allowedKeys.push(event.target.textContent);
			state.textSettings.allowedKeys.sort((a, b) => a - b);
		}

		renderKeyboardLook();
	});
});

shiftedModalKeyboard.querySelectorAll('.key').forEach(key => {
	key.addEventListener('click', (event) => {
		if (state.textSettings.allowedKeys.includes(event.target.textContent)) {
			state.textSettings.allowedKeys = state.textSettings.allowedKeys.filter((key) => {
				if (key === event.target.textContent)
					return false;
				else
					return true;
			});
		}
		else {
			state.textSettings.allowedKeys.push(event.target.textContent);
			state.textSettings.allowedKeys.sort((a, b) => a - b);
		}

		renderKeyboardLook();
	});
});

numpadModalKeyboard.querySelectorAll('.key').forEach(key => {
	key.addEventListener('click', (event) => {
		if (state.textSettings.allowedKeys.includes(event.target.textContent)) {
			state.textSettings.allowedKeys = state.textSettings.allowedKeys.filter((key) => {
				if (key === event.target.textContent)
					return false;
				else
					return true;
			});
		}
		else {
			state.textSettings.allowedKeys.push(event.target.textContent);
			state.textSettings.allowedKeys.sort((a, b) => a - b);
		}

		renderKeyboardLook();
	});
});

startButton.addEventListener('click', () => {
	if (state.sessionStatus === 'ready') {
		if (fileContent === undefined) {
			window.alert('Upload a file first!');
			return;
		}

		if (state.textSettings.generationMethod === 'original') {
			if (state.textSettings.practiceMode === 'main') {
				if (state.textSettings.language === 'english') {
					const invalidCharacters = [...new Set(
						[...fileContent].filter(
							char => !validCharacters.english.includes(char)
						)
					)];

					if (invalidCharacters.length) {
						window.alert(
							"Your file contains characters below, which are not valid in english:\n" +
							invalidCharacters.map(char =>
								`<${char === ' ' ? 'SPACE' :
									char === '\t' ? 'TAB' :
										char === '\n' ? 'NEWLINE' :
											char === '\r' ? 'CARRIAGE RETURN' :
												char === '\v' ? 'VERTICAL TAB' :
													char === '\f' ? 'FORM FEED' :
														char
								}>`
							).join(", ")
						);
						return;
					}
				}
				else if (state.textSettings.language === 'persian') {
					const invalidCharacters = [...new Set(
						[...fileContent].filter(
							char => !validCharacters.persian.includes(char)
						)
					)];

					if (invalidCharacters.length) {
						window.alert(
							"Your file contains characters below, which are not valid in persian:\n" +
							invalidCharacters.map(char =>
								`<${char === ' ' ? 'SPACE' :
									char === '\t' ? 'TAB' :
										char === '\n' ? 'NEWLINE' :
											char === '\r' ? 'CARRIAGE RETURN' :
												char === '\v' ? 'VERTICAL TAB' :
													char === '\f' ? 'FORM FEED' :
														char
								}>`
							).join(", ")
						);
						return;
					}
				}
			}
			else if (state.textSettings.practiceMode === 'numpad') {
				const invalidCharacters = [...new Set(
					[...fileContent].filter(
						char => !validCharacters.numpad.includes(char)
					)
				)];

				if (invalidCharacters.length) {
					window.alert(
						"Your file contains characters below, which are not valid in numpad:\n" +
						invalidCharacters.map(char =>
							`<${char === ' ' ? 'SPACE' :
								char === '\t' ? 'TAB' :
									char === '\n' ? 'NEWLINE' :
										char === '\r' ? 'CARRIAGE RETURN' :
											char === '\v' ? 'VERTICAL TAB' :
												char === '\f' ? 'FORM FEED' :
													char
							}>`
						).join(", ")
					);
					return;
				}
			}
		}

		generateText();

		if (textToType.text.length > 1000) {
			window.alert('Your file is too large! Upload a file with less that 1000 characters.');
			return;
		}

		if (fileContent.length === 0) {
			window.alert('Your file is empty! Upload another file.');
			return;
		}

		if (state.textSettings.generationMethod === 'random') {
			if (state.textSettings.allowedKeys.length === 0) {
				window.alert('Choose at least one character in filter section!');
				return;
			}

			if (textToType.text.length === 0) {
				window.alert('No word was found based on your text and filtered charcters!');
				return;
			}
		}


		renderTextToTypeBoxContent();

		state.sessionStatus = 'started';

		startButton.classList.replace('button--primary', 'button--disabled');
		resetButton.classList.replace('button--accent', 'button--accent');

		inputBox.style.pointerEvents = 'auto';

		disableSettings();

		if (state.controls.timerMode === 'timer') {
			timerBadge.textContent = `Time: 0:00`;
		}
		else if (state.controls.timerMode === 'stopwatch') {
			timerBadge.textContent = `Time: ${minuteInput.value}:${secondInput.value} `;
		}

		renderFingerMapping();
	}
});

inputBox.addEventListener('keydown', (event) => {
	let inputCharacter = event.key;

	inputCharacter = (inputCharacter === 'Enter') ? '\n' : inputCharacter;

	if (inputCharacter === "Backspace") {
		if (state.controls.allowBackspace) {
			if (state.currentCharacterIndex > 0) {
				state.currentCharacterIndex--;
			}
			textToType.charactersState[state.currentCharacterIndex] = 'default';
		}
		else {
			event.preventDefault();
		}

		renderTextToTypeBoxContent();
	}
	else if (inputCharacter.length === 1) {
		if (state.sessionStatus === 'started') {
			deciseconds =
				state.controls.timerMode === 'timer'
					? 0
					: state.controls.duration.minute * 600 +
					state.controls.duration.second * 10;

			startTimer();
			state.sessionStatus = 'typing';
			state.currentCharacterIndex = 0;

			pauseResumeButton.classList.replace('button--disabled', 'button--primary');
		}

		if (state.sessionStatus === 'typing') {
			textToType.charactersState[state.currentCharacterIndex] =
				inputCharacter === textToType.text[state.currentCharacterIndex] ? 'correct' : 'incorrect';

			state.currentCharacterIndex++;

			renderTextToTypeBoxContent();

			calculateStatistics();

			if (state.controls.showErrors === 'while typing') {
				errorsBadge.textContent = `Errors: ${state.statistics.errors}`;
			}

			if (state.controls.showAccuracy === 'while typing') {
				accuracyBadge.textContent = `Accuracy: ${state.statistics.accuracy}%`;
			}


			if (state.currentCharacterIndex === textToType.text.length) {
				finishRound();
				inputBox.value += inputCharacter;
			}
		}
	}

	renderFingerMapping();
});

pauseResumeButton.addEventListener('click', () => {
	if (state.sessionStatus === 'typing') {
		pauseResumeButton.textContent = 'Resume';
		inputBox.readOnly = true;

		stopTimer();

		state.sessionStatus = 'paused';
	}
	else if (state.sessionStatus === 'paused') {
		pauseResumeButton.textContent = 'Pause';
		inputBox.readOnly = false;

		startTimer();

		state.sessionStatus = 'typing';
	}

	renderFingerMapping();
});

resetButton.addEventListener('click', () => {
	clearInterval(intervalId);

	textToTypeBox.innerHTML = '';
	inputBox.value = '';

	inputBox.style.pointerEvents = 'none';
	inputBox.readOnly = false;

	startButton.classList.replace('button--disabled', 'button--primary');
	pauseResumeButton.classList.replace('button--primary', 'button--disabled');

	enableSettings();

	errorsBadge.textContent = 'Errors: 0';
	accuracyBadge.textContent = 'Accuracy: 0%';
	speedBadge.textContent = `
	Speed: 0${state.controls.speedUnit === 'cpm' ? 'CPM' : 'WPM'}
	`;
	timerBadge.textContent = `Timer: ${state.controls.timerMode === 'time'
		? '0:00'
		: `${minuteInput.value}:${secondInput.value}`
		}`;

	if (state.controls.showErrors === 'after completion') {
		errorsBadge.classList.replace('badge--error--default', 'badge--error--disabled');
	}
	if (state.controls.showAccuracy === 'after completion') {
		accuracyBadge.classList.replace('badge--success--default', 'badge--success--disabled');
	}
	if (state.controls.showSpeed === 'after completion') {
		speedBadge.classList.replace('badge--info--default', 'badge--info--disabled');
	}
	if (state.controls.showTimer === 'after completion') {
		timerBadge.classList.replace('badge--warning--default', 'badge--warning--disabled');
	}

	state.currentCharacterIndex = 0;
	state.sessionStatus = 'ready';
	state.statistics.errors = 0;
	state.statistics.accuracy = 0;
	state.statistics.speed = 0;

	textToType.text = '';
	textToType.charactersState = [];

	renderFingerMapping();
});

// =================== functions =================== //
function renderKeyboardKeys() {
	const fingerMappingKeys = fingerMappingKeyboard.querySelectorAll('.key');
	const defaultModalKeys = defaultModalKeyboard.querySelectorAll('.key');
	const shiftedModalKeys = shiftedModalKeyboard.querySelectorAll('.key');

	fingerMappingKeys.forEach((key, index) => {
		if (state.textSettings.language === 'english') {
			key.textContent = keyboardKeys.english.default[index];
		}
		else if (state.textSettings.language === 'persian') {
			key.textContent = keyboardKeys.persian.default[index];
		}
	});

	defaultModalKeys.forEach((key, index) => {
		if (state.textSettings.language === 'english') {
			key.textContent = keyboardKeys.english.default[index];
		}
		else if (state.textSettings.language === 'persian') {
			key.textContent = keyboardKeys.persian.default[index];
		}
	});

	shiftedModalKeys.forEach((key, index) => {
		if (state.textSettings.language === 'english') {
			key.textContent = keyboardKeys.english.shifted[index];
		}
		else if (state.textSettings.language === 'persian') {
			key.textContent = keyboardKeys.persian.shifted[index];
		}
	});
}

function renderKeyboardLook() {
	const defaultModalKeys = defaultModalKeyboard.querySelectorAll('.key');
	const shiftedModalKeys = shiftedModalKeyboard.querySelectorAll('.key');
	const numpadModalKeys = numpadModalKeyboard.querySelectorAll('.key');

	defaultModalKeys.forEach((key) => {
		if (!key.classList.contains('key--disabled')) {
			if (state.textSettings.allowedKeys.includes(key.textContent)) {
				if (key.classList.contains('key--default'))
					key.classList.replace('key--default', 'key--selected');
			}
			else {
				if (key.classList.contains('key--selected'))
					key.classList.replace('key--selected', 'key--default');
			}
		}
	});

	shiftedModalKeys.forEach((key) => {
		if (!key.classList.contains('key--disabled')) {
			if (state.textSettings.allowedKeys.includes(key.textContent)) {
				if (key.classList.contains('key--default'))
					key.classList.replace('key--default', 'key--selected');
			}
			else {
				if (key.classList.contains('key--selected'))
					key.classList.replace('key--selected', 'key--default');
			}
		}
	});

	numpadModalKeys.forEach((key) => {
		if (!key.classList.contains('key--disabled')) {
			if (state.textSettings.allowedKeys.includes(key.textContent)) {
				if (key.classList.contains('key--default'))
					key.classList.replace('key--default', 'key--selected');
			}
			else {
				if (key.classList.contains('key--selected'))
					key.classList.replace('key--selected', 'key--default');
			}
		}
	});
}

function generateText() {
	if (state.textSettings.generationMethod === 'original') {
		textToType.text = fileContent;
	}
	else if (state.textSettings.generationMethod === 'random') {
		const allowedCharacters = new Set(state.textSettings.allowedKeys);

		const validfileContent = fileContent.filter(word =>
			[...word].every(character => allowedCharacters.has(character))
		);

		for (let i = validfileContent.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[validfileContent[i], validfileContent[j]] = [validfileContent[j], validfileContent[i]];
		}

		if (validfileContent.length === 0) return "";

		let result = [];
		let currentLength = 0;
		let wordIndex = 0;

		while (currentLength < state.textSettings.textLength) {
			const word = validfileContent[wordIndex];
			let remaining = state.textSettings.textLength - currentLength;

			let space = 0;
			if (state.textSettings.practiceMode === 'main') {
				space = result.length === 0 ? 0 : 1;
			}

			if (remaining < 1) break;

			if (word.length + space <= remaining) {
				if (space) {
					if (state.textSettings.allowedKeys.includes('Enter')) {
						Math.round(Math.random()) ? result.push(" ") : result.push("\n");
					}
					else {
						result.push(" ");
					}

					currentLength += 1;
				}
				result.push(word);
				currentLength += word.length;
			} else {
				if (space && remaining > 0) {
					if (state.textSettings.allowedKeys.includes('Enter')) {
						Math.round(Math.random()) ? result.push(" ") : result.push("\n");
					}
					else {
						result.push(" ");
					}

					currentLength += 1;
					remaining--;
				}
				result.push(word.slice(0, remaining));
				currentLength += remaining;
				break;
			}

			wordIndex = (wordIndex + 1) % validfileContent.length;
		}

		textToType.text = result.join("");
	}

	for (let i = 0; i < textToType.text.length; i++) {
		textToType.charactersState.push('default');
	}
}

function disableSettings() {
	toggleControls.forEach(control => {
		control.style.pointerEvents = 'none';
	});

	radioOptions.forEach(option => {
		option.style.pointerEvents = 'none';
	});

	chooseFileButton.style.pointerEvents = 'none';

	lengthInput.style.pointerEvents = 'none';
	lengthIncreaseButton.style.pointerEvents = 'none';
	lengthDecreaseButton.style.pointerEvents = 'none';

	minuteInput.style.pointerEvents = 'none';
	minuteIncreaseButton.style.pointerEvents = 'none';
	minuteDecreaseButton.style.pointerEvents = 'none';
	secondInput.style.pointerEvents = 'none';
	secondIncreaseButton.style.pointerEvents = 'none';
	secondDecreaseButton.style.pointerEvents = 'none';

	filterButton.style.pointerEvents = 'none';
}

function enableSettings() {
	toggleControls.forEach(control => {
		control.style.pointerEvents = 'auto';
	});

	radioOptions.forEach(option => {
		option.style.pointerEvents = 'auto';
	});

	chooseFileButton.style.pointerEvents = 'auto';

	lengthInput.style.pointerEvents = 'auto';
	lengthIncreaseButton.style.pointerEvents = 'auto';
	lengthDecreaseButton.style.pointerEvents = 'auto';

	minuteInput.style.pointerEvents = 'auto';
	minuteIncreaseButton.style.pointerEvents = 'auto';
	minuteDecreaseButton.style.pointerEvents = 'auto';
	secondInput.style.pointerEvents = 'auto';
	secondIncreaseButton.style.pointerEvents = 'auto';
	secondDecreaseButton.style.pointerEvents = 'auto';

	filterButton.style.pointerEvents = 'auto';
}

async function extractFileContent() {
	const file = fileInput.files[0];
	if (!file) return;

	if (!file.name.toLowerCase().endsWith(".docx")) {
		alert("Only .docx files are allowed");
		fileInput.value = "";
		fileNameDisplay.textContent = "No file chosen";
		fileContent = undefined;
		return;
	}

	fileNameDisplay.textContent = file.name;

	const arrayBuffer = await file.arrayBuffer();
	const result = await mammoth.extractRawText({ arrayBuffer });

	const rawText = (result.value || "").replace(/\n\n/g, '\n');

	if (state.textSettings.generationMethod === "original") {
		fileContent = rawText
			.replace(/\r\n/g, '\n')
			.replace(/\r/g, '\n')
			.trim();
	}
	else if (state.textSettings.generationMethod === "random") {
		fileContent = (
			rawText
				.normalize("NFC")
				.match(
					/(?!\p{Extended_Pictographic})(?:[\p{L}\u200C\u200D]+|\p{N}+|\p{P}+|\p{S}+)/gu
				) || []
		);
	}
}

function decisecondsToTime(ds) {
	const totalSeconds = Math.floor(ds / 10);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;

	return `${minutes}:${seconds.toString().padStart(2, '0')} `;
}

function renderTextToTypeBoxContent() {
	let newInnerHTML = '';

	for (let i = 0; i < textToType.text.length; i++) {
		if (i === state.currentCharacterIndex) {
			newInnerHTML += `<span class="current-character body body1">${textToType.text[i]}</span >`;
			continue;
		}

		if (!state.controls.highlightErrors) {
			if (textToType.text[i] === '') {
				newInnerHTML += `<span class="default-character body body1">&nbsp;</span >`;
			}
			else {
				newInnerHTML += `<span class="default-character body body1">${textToType.text[i]}</span >`;
			}
		}
		else {
			switch (textToType.charactersState[i]) {
				case 'default':
					if (textToType.text[i] === '') {
						newInnerHTML += `<span class="default-character body body1">&nbsp;</span >`;
					}
					else {
						newInnerHTML += `<span class="default-character body body1">${textToType.text[i]}</span >`;
					}
					break;

				case 'correct':
					if (textToType.text[i] === '') {
						newInnerHTML += `<span class="correct-character body body1">&nbsp;</span >`;
					}
					else {
						newInnerHTML += `<span class="correct-character body body1">${textToType.text[i]}</span >`;
					}
					break;

				case 'incorrect':
					if (textToType.text[i] === '') {
						newInnerHTML += `<span class="incorrect-character body body1">&nbsp;</span >`;
					}
					else {
						newInnerHTML += `<span class="incorrect-character body body1">${textToType.text[i]}</span >`;
					}
					break;
			}
		}
	}

	textToTypeBox.innerHTML = newInnerHTML;

	if (textToTypeBox.style.direction === 'ltr') {
		textToTypeBox.firstElementChild.classList.add('left-rounded');
		if (textToTypeBox.querySelector('.default-character')) {
			textToTypeBox.querySelector('.default-character').previousElementSibling.classList.add('right-rounded');
		}
		else {
			textToTypeBox.lastElementChild.classList.add('right-rounded');
		}
	}
	else if (textToTypeBox.style.direction === 'rtl') {
		textToTypeBox.firstElementChild.classList.add('right-rounded');
		if (textToTypeBox.querySelector('.default-character')) {
			textToTypeBox.querySelector('.default-character').previousElementSibling.classList.add('left-rounded');
		}
		else {
			textToTypeBox.lastElementChild.classList.add('left-rounded');
		}
	}
}

function startTimer() {
	intervalId = setInterval(() => {
		if (state.controls.timerMode === 'timer') {
			deciseconds++;
		}
		else if (state.controls.timerMode === 'stopwatch') {
			deciseconds--;

			if (deciseconds === 0) {
				finishRound();
			}
		}

		if (state.controls.showTimer === 'while typing') {
			timerBadge.textContent = `Time: ${decisecondsToTime(deciseconds)} `;
		}

		if (deciseconds % 10 === 0) {
			calculateStatistics();
			if (state.controls.showSpeed === 'while typing') {
				speedBadge.textContent = `
							Speed: ${state.statistics.speed}
							${state.controls.speedUnit === 'cpm' ? 'CPM' : 'WPM'}
						`;
			}
		}

	}, 100);
}

function stopTimer() {
	clearInterval(intervalId);
}

function finishRound() {
	stopTimer();

	pauseResumeButton.classList.replace('button--primary', 'button--disabled');

	inputBox.readOnly = true;

	state.sessionStatus = 'finished';

	if (state.controls.showErrors === 'after completion') {
		errorsBadge.classList.replace('badge--error--disabled', 'badge--error--default');
	}
	if (state.controls.showAccuracy === 'after completion') {
		accuracyBadge.classList.replace('badge--success--disabled', 'badge--success--default');
	}
	if (state.controls.showSpeed === 'after completion') {
		speedBadge.classList.replace('badge--info--disabled', 'badge--info--default');
	}
	if (state.controls.showTimer === 'after completion') {
		timerBadge.classList.replace('badge--warning--disabled', 'badge--warning--default');
	}

	calculateStatistics();
	errorsBadge.textContent = `Errors: ${state.statistics.errors}`;
	accuracyBadge.textContent = `Accuracy: ${state.statistics.accuracy}%`;
	speedBadge.textContent = `
			Speed: ${state.statistics.speed}
			${state.controls.speedUnit === 'cpm' ? 'CPM' : 'WPM'}
		`;
	timerBadge.textContent = `Time: ${decisecondsToTime(deciseconds)} `;
}

function calculateStatistics() {
	state.statistics.errors = 0;
	state.statistics.accuracy = 0;

	for (let i = 0; i < textToType.text.length; i++) {
		if (textToType.charactersState[i] === 'incorrect') {
			state.statistics.errors++;
		}

		if (textToType.charactersState[i] === 'correct') {
			state.statistics.accuracy++;
		}
	}

	state.statistics.accuracy = state.statistics.accuracy / state.currentCharacterIndex * 100;

	if (state.controls.speedUnit === 'cpm') {
		if (state.controls.timerMode === 'timer') {
			state.statistics.speed = state.currentCharacterIndex / deciseconds * 600;
		}
		else if (state.controls.timerMode === 'stopwatch') {
			state.statistics.speed =
				state.currentCharacterIndex
				/ ((state.controls.duration.minute * 600 + state.controls.duration.second * 10) - deciseconds)
				* 600;
		}
	}
	else if (state.controls.speedUnit === 'wpm') {
		const substring = textToType.text
			.slice(0, state.currentCharacterIndex)
			.trim();

		const wordCount = substring === ""
			? 0
			: substring.split(/\s+/).length;

		if (state.controls.timerMode === 'timer') {
			state.statistics.speed = wordCount / deciseconds * 600;
		}
		else if (state.controls.timerMode === 'stopwatch') {
			state.statistics.speed =
				wordCount
				/ ((state.controls.duration.minute * 600 + state.controls.duration.second * 10) - deciseconds)
				* 600;
		}
	}

	state.statistics.accuracy = state.statistics.accuracy.toFixed(2);
	state.statistics.speed = state.statistics.speed.toFixed(0);
}

function renderFingerMapping() {
	if (state.sessionStatus === 'typing' || state.sessionStatus === 'started') {
		handContainer.style.display = 'block';

		let currentCharcterInfo = {
			charcter: '',
			language: '',
			keyboardState: '',
			index: -1
		};
		if (textToType.text[state.currentCharacterIndex] === ' ') {
			currentCharcterInfo.charcter = 'Space';
		}
		else if (textToType.text[state.currentCharacterIndex] === '\n') {
			currentCharcterInfo.charcter = 'Enter';
		}
		else {
			currentCharcterInfo.charcter = textToType.text[state.currentCharacterIndex];
		}
		if (state.textSettings.practiceMode === 'main') {
			for (const language in keyboardKeys) {
				for (const keyboardState in keyboardKeys[language]) {
					const index = keyboardKeys[language][keyboardState].indexOf(currentCharcterInfo.charcter);

					if (index !== -1) {
						currentCharcterInfo.language = language;
						currentCharcterInfo.keyboardState = keyboardState;
						currentCharcterInfo.index = index;
						break;
					}
				}
				if (currentCharcterInfo.index !== -1) break;
			}
		}
		else if (state.textSettings.practiceMode === 'numpad') {
			currentCharcterInfo.language = 'numpad';
			currentCharcterInfo.keyboardState = 'default';
			currentCharcterInfo.index = keyboardKeys.numpad.default.indexOf(currentCharcterInfo.charcter);
		}
		if (currentCharcterInfo.charcter && currentCharcterInfo.charcter !== '‌') { // not half-space
			let keys;
			if (state.textSettings.practiceMode === 'main') {
				keys = fingerMappingKeyboard.querySelectorAll('.key');
			}
			else if (state.textSettings.practiceMode === 'numpad') {
				keys = fingerMappingNumpad.querySelectorAll('.key');
			}

			keys.forEach((key, index) => {
				key.textContent = keyboardKeys[currentCharcterInfo.language][currentCharcterInfo.keyboardState][index];

				key.classList.replace('key--selected', 'key--default');
				if (index === currentCharcterInfo.index) {
					key.classList.add('key--disabled');
					key.classList.replace('key--default', 'key--selected');
				}
			});

			temporaryHandContainer.querySelector('.ring').style.display = 'none';

			temporaryHandContainer.style.display = 'none';
			if (currentCharcterInfo.keyboardState === 'shifted') {
				temporaryHandContainer.style.display = 'block';

				if (fingersMap[currentCharcterInfo.language][currentCharcterInfo.index].handedness === 'left') {
					temporaryHandContainer.style.transform = `translate(${fingersMap[currentCharcterInfo.language][52].transform}) scaleX(1)`;
					keys[52].classList.replace('key--default', 'key--selected');
				}
				else if (fingersMap[currentCharcterInfo.language][currentCharcterInfo.index].handedness === 'right') {
					temporaryHandContainer.style.transform = `translate(${fingersMap[currentCharcterInfo.language][41].transform}) scaleX(-1)`;
					keys[41].classList.replace('key--default', 'key--selected');
				}
			}

			handContainer.style.transform = `
				translate(${fingersMap[currentCharcterInfo.language][currentCharcterInfo.index].transform})
				scaleX(${fingersMap[currentCharcterInfo.language][currentCharcterInfo.index].handedness === 'right' ? '1' : '-1'})
			`;

			handContainer.querySelector('.thumb').style.display = 'none';
			handContainer.querySelector('.index').style.display = 'none';
			handContainer.querySelector('.middle').style.display = 'none';
			handContainer.querySelector('.ring').style.display = 'none';
			handContainer.querySelector('.pinky').style.display = 'none';

			switch (fingersMap[currentCharcterInfo.language][currentCharcterInfo.index].finger) {
				case 'thumb':
					handContainer.querySelector('.thumb').style.display = 'block';
					break;
				case 'index':
					handContainer.querySelector('.index').style.display = 'block';
					break;
				case 'middle':
					handContainer.querySelector('.middle').style.display = 'block';
					break;
				case 'ring':
					handContainer.querySelector('.ring').style.display = 'block';
					break;
				case 'pinky':
					handContainer.querySelector('.pinky').style.display = 'block';
					break;
			}
		}
		else if (currentCharcterInfo.charcter) { // half-space
			if (currentCharcterInfo.charcter === '‌') {
				handContainer.querySelector('.thumb').style.display = 'none';
				handContainer.querySelector('.index').style.display = 'none';
				handContainer.querySelector('.middle').style.display = 'none';
				handContainer.querySelector('.ring').style.display = 'none';
				handContainer.querySelector('.pinky').style.display = 'none';

				temporaryHandContainer.querySelector('.thumb').style.display = 'none';
				temporaryHandContainer.querySelector('.index').style.display = 'none';
				temporaryHandContainer.querySelector('.middle').style.display = 'none';
				temporaryHandContainer.querySelector('.ring').style.display = 'none';
				temporaryHandContainer.querySelector('.pinky').style.display = 'none';

				handContainer.style.transform = 'translate(-100%, -60%) scaleX(1) rotate(-45deg)';

				handContainer.querySelector('.index').style.display = 'block';

				temporaryHandContainer.style.display = 'block';
				temporaryHandContainer.style.transform = 'translate(-155%, 28%) scaleX(-1)';

				temporaryHandContainer.querySelector('.pinky').style.display = 'block';
				temporaryHandContainer.querySelector('.ring').style.display = 'block';

				const keys = fingerMappingKeyboard.querySelectorAll('.key');
				keys[2].classList.replace('key--default', 'key--selected');
				keys[41].classList.replace('key--default', 'key--selected');
				keys[53].classList.replace('key--default', 'key--selected');
			}
		}
	}
	else {
		handContainer.style.display = 'none';
		temporaryHandContainer.style.display = 'none';

		let keys = fingerMappingKeyboard.querySelectorAll('.key');
		keys.forEach((key, index) => {
			key.classList.replace('key--selected', 'key--default');
		});
		keys = fingerMappingNumpad.querySelectorAll('.key');
		keys.forEach((key, index) => {
			key.classList.replace('key--selected', 'key--default');
		});
	}
}