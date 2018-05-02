let d = document,
		display = d.getElementById('input'),
		ce = d.getElementById('ce'),
		c = d.getElementById('c'),
		numbers = d.querySelectorAll('numbers'),
		operations = document.querySelectorAll('operation'),
		decimal = d.getElementById('decimal'),
		result = d.getElementById('result');

let handleClick = (e) => {
	let value = e.target.textContext;
	display.value = value;
}



