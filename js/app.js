let d = document,
		c = d.getElementById('c'),
		ce = d.getElementById('ce'),
		btns = d.querySelectorAll('.btn'),
		display = d.getElementById('input'),
		result = d.getElementById('result'),
		numbers = d.querySelectorAll('.number'),
		dotButton = d.getElementById('decimal'),
		operations = d.querySelectorAll('.operation');

let handleClick = (e) => {
	let value = e.target.innerText;
	display.value = value;
};

let numberPress = () => {
	for (let i = 0; i < numbers.length; i++) {
		let number = numbers[i];
	
		number.addEventListener('click', handleClick);
	};
};
numberPress();

let operation = () => {
	for (let i = 0; i < operations.length; i++) {
		let operation = operations[i];
		
		operation.addEventListener('click', handleClick);
	}
};
operation();

let decimal = () => {
	dotButton.addEventListener('click', handleClick);
};
decimal();

let clear = () => {

};
clear();


