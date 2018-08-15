function openDrawer() {
	document.querySelector('.scrim').classList.add('open');
	document.querySelector('nav.drawer').classList.add('open');
}

function closeAll() {
	document.querySelector('.scrim').classList.remove('open');
	document.querySelector('nav.drawer').classList.remove('open');
}