let d = document,
		display = d.getElementById('input'),
		resultBtn = d.getElementById('result'),
		numbers = d.querySelectorAll('.number'),
		dotButton = d.getElementById('decimal'),
		clearBtns = d.querySelectorAll('.clear_btn'),
		operations = d.querySelectorAll('.operation'),

		memoryCurrentNumber = 0,
		memoryNewNumber = false,
		memoryPendingOperation = '';

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

// dotButton.addEventListener('click', decimal);
resultBtn.addEventListener('click', (e) => {
 console.log(e.target.textContent);
});

let numberPress = (num) => {
	if(display.value === '0'){
		display.value = num; 
	}else {
		display.value += num;
	}
};

let operation = (op) => {
	let localMemoryOperation = display.value;

	if (memoryNewNumber) {
		display.value = memoryCurrentNumber;
	}else {
		memoryNewNumber = true;
		switch (op) {
			case '+':
				memoryCurrentNumber += localMemoryOperation;
				break;
			case '-':
			memoryCurrentNumber -= localMemoryOperation
				break;
			case '*':
			memoryCurrentNumber *= localMemoryOperation
				break;
			case '/':
				memoryCurrentNumber /= localMemoryOperation
				break;
			default:
				console.log("Oops! We dont know such ariphmethic operation!");
				break;
		};
	};
};

let decimal = () => {
	console.log("decimal");
};

// let result = () => {
// 	console.log("result");
// }

let clear = (id) => {
	if (id === 'ce') {
		display.value;
	}else {
		display.value = "";
	}
};


