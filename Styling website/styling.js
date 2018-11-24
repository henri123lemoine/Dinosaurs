function AddSidebar() {
	if (document.getElementById("sidebar").classList.contains("visible")){
		giveClass = document.getElementById("sidebar").classList.remove("visible");
	} else {
		giveClass = document.getElementById("sidebar").classList.add("visible");
	}
}
