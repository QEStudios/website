var bouncing = false;
var fuzzy = document.getElementById('fuzzy');
fuzzy.addEventListener("transitionend", switchDirection, false);
function fuzzyClick() {
	bouncing = !bouncing;
	console.log(bouncing);
	if(bouncing) {
		fuzzy.classList.add('bouncing', 'bounce', 'bounce-1');
	} else {
		fuzzy.classList.remove('bouncing');
	}
}
function switchDirection() {
	if(fuzzy.classList.contains('bounce-1')) {
		fuzzy.classList.remove('bounce-1');
		fuzzy.classList.add('bounce-2');
	} else if(fuzzy.classList.contains('bounce-2')) {
		fuzzy.classList.remove('bounce-2');
		if(fuzzy.classList.contains('bouncing')) {
			fuzzy.classList.add('bounce-1');
		} else {
			fuzzy.classList.remove('bounce');
		}
	}
}