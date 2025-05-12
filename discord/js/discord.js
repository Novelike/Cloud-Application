// nav_dd_list 클래스를 가진 a 태그에 hover 이벤트를 부여
// hover 시 부모 div 중 nav_dd 클래스를 가진 태그를 찾아 해당 자식요소들에 w--open 클래스를 부여
// 이벤트 중복 발생 방지: nav_dd에만 이벤트 바인딩

document.addEventListener("DOMContentLoaded", function () {
	// 모든 .nav_dd 요소를 찾음
	var navDdDivs = document.querySelectorAll("div.nav_dd");

	navDdDivs.forEach(function (navDd) {
		navDd.addEventListener("mouseenter", function (event) {
			// navDd 내부에서 이동한 경우 무시
			if (navDd.contains(event.relatedTarget)) return;
			Array.from(navDd.children).forEach(function (child) {
				child.classList.add("w--open");
			});
		});
		navDd.addEventListener("mouseleave", function (event) {
			// navDd 내부로 이동한 경우 무시
			if (navDd.contains(event.relatedTarget)) return;
			Array.from(navDd.children).forEach(function (child) {
				child.classList.remove("w--open");
			});
		});
	});
});
