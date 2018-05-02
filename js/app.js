let d = document,
		btns = d.querySelectorAll('.btn'),
		display = d.getElementById('input');

console.log(btns);

let handleClick = (e) => {
	let value = e.target.textContext;
	display.value = value;
};

for (let i = 0; i < btns.length; i++) {
	let btn = btns[i];

	btn.addEventListener('click', handleClick);
};


