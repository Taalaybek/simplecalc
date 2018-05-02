let d = document,
		c = d.getElementById('c'),
		ce = d.getElementById('ce'),
		btns = d.querySelectorAll('.btn'),
		display = d.getElementById('input'),
		result = d.getElementById('result'),
		numbers = d.querySelectorAll('.number'),
		dotButton = d.getElementById('.decimal'),
		operations = d.querySelectorAll('.operation');

let numberPress = () => {
	let handleClick = (e) => {
		let value = e.target.innerText;
		display.value = value;
	};
	
	for (let i = 0; i < btns.length; i++) {
		let btn = btns[i];
	
		btn.addEventListener('click', handleClick);
	};
};
numberPress();

let operation = () => {

};

let decimal = () => {

};

let clear = () => {

};


