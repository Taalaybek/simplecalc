let d = document,
		display = d.getElementById('input'),
		result = d.getElementById('result'),
		numbers = d.querySelectorAll('.number'),
		dotButton = d.getElementById('decimal'),
		clearBtns = d.querySelectorAll('.clear_btn'),
		operations = d.querySelectorAll('.operation');

// Event listener for numbers buttons
for (let i = 0; i < numbers.length; i++) {
	let number = numbers[i];

	number.addEventListener('click', () => {
		console.log(number);
	});
};

// Event listener for operations buttons
for (let i = 0; i < operations.length; i++) {
	let operationBtn = operations[i];
	
	operationBtn.addEventListener('click', () => {
		console.log('operation');
	});
}

// Event listener for clear buttons
for (let i = 0; i < clearBtns.length; i++) {
	let clearBtn = clearBtns[i];
	clearBtn.addEventListener('click', (e) => {
		clear(e.srcElement.id);
	});
}

dotButton.addEventListener('click', (e) => {
	console.log(e.srcElement.id);
});
result.addEventListener('click', (e) => {
	console.log(e.srcElement.id);
});

let numberPress = () => {
	// body ...
};

let operation = () => {
	// body ...
};

let decimal = () => {
	// body ...
};

let clear = (id) => {
	if (id === 'ce') {
		console.log("Cut symbol at the end!");
	}else {
		display.value = "";
	}
};


