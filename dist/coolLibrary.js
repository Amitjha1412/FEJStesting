(function() {
	'use strict';
	var a = document.createElement('div');
	a.style.backgroundColor = 'teal';
	a.style.width = '250px';
	a.style.height = '250px';
	a.setAttribute('foo', 'bar');
	a.classList.add('box');
	document.body.appendChild(a);
})();
