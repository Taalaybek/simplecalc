let d = document,
		btns = d.querySelectorAll('.btn'),
		display = d.getElementById('input');

let handleClick = (e) => {
	let value = e.target.innerText;
	display.value = value;
};

for (let i = 0; i < btns.length; i++) {
	let btn = btns[i];

	btn.addEventListener('click', handleClick);
};
