let d = document,
		display = d.getElementById('input'),
		resultBtn = d.getElementById('result'),
		numbers = d.querySelectorAll('.number'),
		dotButton = d.getElementById('decimal'),
		clearBtns = d.querySelectorAll('.clear_btn'),
		operations = d.querySelectorAll('.operation'),

		MemoryCurrentNumber = 0,
		MemoryNewNumber = false,
		MemoryPendingOperation = '';

// Event listener for numbers buttons
for (let i = 0; i < numbers.length; i++) {
	let number = numbers[i];

	number.addEventListener('click', (e) => {
		numberPress(e.target.textContent);
	});
};

// Event listener for operations buttons
for (let i = 0; i < operations.length; i++) {
	let operationBtn = operations[i];
	
	operationBtn.addEventListener('click', (e) => {
		operation(e.target.textContent);
	});
}

// Event listener for clear buttons
for (let i = 0; i < clearBtns.length; i++) {
	let clearBtn = clearBtns[i];
	clearBtn.addEventListener('click', (e) => {
		clear(e.srcElement.id);
	});
}


let numberPress = (num) => {
	if (MemoryNewNumber) {
		display.value = num;
		MemoryNewNumber = false;
	}else {
		if(display.value === '0'){
			display.value = num; 
		}else {
			display.value += num;
		};
	};
};

let operation = (op) => {

	let localMemoryOperation = display.value;

	if (MemoryNewNumber && MemoryPendingOperation !== '=') {
		display.value = MemoryCurrentNumber;
	}else {

		MemoryNewNumber = true;

		if (MemoryPendingOperation === '+') {
			MemoryCurrentNumber += parseFloat(localMemoryOperation);
		}else if (MemoryPendingOperation === '-') {
			MemoryCurrentNumber -= parseFloat(localMemoryOperation);
		}else if (MemoryPendingOperation === '/') {
			MemoryCurrentNumber /= parseFloat(localMemoryOperation);
		}else if (MemoryPendingOperation === '*') {
			MemoryCurrentNumber *= parseFloat(localMemoryOperation);
		}else {
			MemoryCurrentNumber = parseFloat(localMemoryOperation);
		}

		display.value = MemoryCurrentNumber;
		MemoryPendingOperation = op;

	};
};

let decimal = () => {
	let localDecimalMemory = display.value;

	if (MemoryNewNumber) {

		localDecimalMemory = '0.';
		MemoryNewNumber = false;

	}else {

		if (localDecimalMemory.indexOf('.') === -1) {
			localDecimalMemory += '.';
		};

	};

	display.value = localDecimalMemory;
};

dotButton.addEventListener('click', decimal);

let clear = (id) => {
	console.log(id);
};

