var bouncing = false;
var fuzzy = document.querySelector('.fuzzy');
fuzzy.addEventListener("transitionend", switchDirection, false);
function fuzzyClick() {
	bouncing = !bouncing;
	console.log(bouncing);
	if(bouncing) {
		fuzzy.classList.add('bouncing', 'bounce', 'bounce-start');
	} else {
		fuzzy.classList.remove('bouncing');
	}
}
function switchDirection() {
	if(fuzzy.classList.contains('bounce-start')) {
		fuzzy.classList.remove('bounce-start');
		fuzzy.classList.add('bounce-2');
	} else if(fuzzy.classList.contains('bounce-1')) {
		fuzzy.classList.remove('bounce-1');
		fuzzy.classList.add('bounce-2');
	} else if(fuzzy.classList.contains('bounce-2')) {
		fuzzy.classList.remove('bounce-2');
		if(fuzzy.classList.contains('bouncing')) {
			fuzzy.classList.add('bounce-1');
		} else {
			fuzzy.classList.add('bounce-end');
			fuzzy.classList.remove('bounce');
		}
	} else if(fuzzy.classList.contains('bounce-end') && !document.querySelector(".fuzzy:hover")) {
		fuzzy.classList.remove('bounce-end');
	}
}