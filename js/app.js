let display = document.getElementById('input'),
		ce = document.getElementById('ce'),
		c = document.getElementById('c'),
		numbers = document.querySelectorAll('numbers'),
		operations = document.querySelectorAll('operation'),
		decimal = document.getElementById('decimal'),
		result = document.getElementById('result');

decimal.addEventListener('click', () => {
	console.log('You clicked decimal');
});
c.addEventListener('click', () => {
	console.log('You clicked C');
});
ce.addEventListener('click', () => {
	console.log('You clicked CE');
});
result.addEventListener('click', () => {
	console.log('You clicked result');
});
display.addEventListener('input', () => {
	console.log('You focused on input');
});

