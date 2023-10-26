import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "bootstrap/dist/css/bootstrap.min.css";

function createHeader() {
	const header = document.createElement("header");
	header.classList.add("header", "py-3", "text-center");
	header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	header.style.color = "#dd7a23";

	const restaurantName = document.createElement("h1");
	restaurantName.classList.add("tastee");
	restaurantName.textContent = "tasteefy";

	header.appendChild(restaurantName);
	header.appendChild(createNav());

	return header;
}

function createNav() {
	const nav = document.createElement("nav");

	const homeButton = document.createElement("button");
	homeButton.classList.add("navButtons", "btn", "text-white");
	homeButton.textContent = "Home";
	homeButton.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActiveButton(homeButton);
		loadHome();
	});

	const menuButton = document.createElement("button");
	menuButton.classList.add("navButtons", "btn", "text-white", "mx-3");
	menuButton.textContent = "Menu";
	menuButton.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActiveButton(menuButton);
		loadMenu();
	});

	const contactButton = document.createElement("button");
	contactButton.classList.add("navButtons");
	contactButton.classList.add("btn", "text-white");
	contactButton.textContent = "Contact Us";
	contactButton.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActiveButton(contactButton);
		loadContact();
	});

	nav.appendChild(homeButton);
	nav.appendChild(menuButton);
	nav.appendChild(contactButton);

	return nav;
}

function setActiveButton(button) {
	const buttons = document.querySelectorAll(".navButtons");

	buttons.forEach((button) => {
		if (button !== this) {
			button.classList.remove("active");
		}
	});

	button.classList.add("active");
}

function createMain() {
	const main = document.createElement("main");
	main.classList.add("mainContainer");
	main.setAttribute("id", "main");

	return main;
}

function createFooter() {
	const footer = document.createElement("footer");
	footer.classList.add(
		"footer",
		"fixed-bottom",
		"d-flex",
		"justify-content-center",
		"pt-3",
	);
	footer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

	const copyright = document.createElement("p");
	copyright.textContent = `Copyright \u00A9 ${new Date().getFullYear()}`;
	copyright.style.color = "white";

	const githubLink = document.createElement("a");
	githubLink.href = "https://github.com/Jaynimi/Tasteefy-Restaurant";

	const githubIcon = document.createElement("i");
	githubIcon.classList.add("fab", "fa-github", "px-3", "fs-2");
	githubIcon.style.color = "#eebe95";
	githubLink.appendChild(githubIcon);

	footer.appendChild(copyright);
	footer.appendChild(githubLink);

	return footer;
}

function initializeWebsite() {
	const content = document.getElementById("content");

	content.appendChild(createHeader());
	content.appendChild(createMain());
	content.appendChild(createFooter());
}

export default initializeWebsite;
