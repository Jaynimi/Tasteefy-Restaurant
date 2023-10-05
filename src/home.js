function createHome() {
	const home = document.createElement("div");
	home.classList.add("home");

	const landingImage = document.createElement("img");
	landingImage.src = "/src/TasteeHome.jpg";
	landingImage.alt = "Jollof";

	home.appendChild(homeText("Home of the or Nigerian Jollof"));
	home.appendChild(homeText("Hub of the smoky goodness"));
	home.appendChild(landingImage);
	home.appendChild(homeText("Order Onlline or Visit our Store for a Tastee!"));

	return home;
}

function homeText(text) {
	const paragraph = document.createElement("p");
	paragraph.textContent = text;
	return paragraph;
}

function loadHome() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.appendChild(createHome());
}

export default loadHome;
