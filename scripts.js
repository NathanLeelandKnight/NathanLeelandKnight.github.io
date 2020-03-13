var $ = function(id) {
	return document.getElementById(id);
}

var stickyNav = function() {
	var navbar = $("navbar");

	if (window.pageYOffset >= (navbar.scrollTop + $("logo").offsetHeight)) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
};

window.onload = function() {
	window.onscroll = stickyNav;
};
