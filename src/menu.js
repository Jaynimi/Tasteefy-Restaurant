function createMenu() {
	const menu = document.createElement("div");
	menu.classList.add("menu", "mt-5");
	menu.style.display = "flex";
	menu.style.flexWrap = "wrap";
	menu.style.justifyContent = "center";
	menu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	menu.style.color = "white";
	// menu.style.alignItems = "center";
	menu.style.margin = "0 15%";

	menu.appendChild(
		createMenuItem(
			"Nigeria Jollof",
			"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
			"/src/images/NaijjaJ.jpg",
		),
	);
	menu.appendChild(
		createMenuItem(
			"Ghana Jollof",
			"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
			"/src/images/ghanaJ.jpg",
		),
	);
	menu.appendChild(
		createMenuItem(
			"Cameroon Jollof",
			"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
			"/src/images/CameroonJ.jpg",
		),
	);
	menu.appendChild(
		createMenuItem(
			"Gambian Jollof",
			"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
			"/src/images/GambianJ.jpg",
		),
	);
	menu.appendChild(
		createMenuItem(
			"Ethiopian Jollof",
			"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
			"/src/images/randoJ.webp",
		),
	);
	menu.appendChild(
		createMenuItem(
			"Senegalese Jollof",
			"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
			"/src/images/SenegaleseJ.jpg",
		),
	);
	menu.appendChild(
		createMenuItem(
			"Senegambin Jollof",
			"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
			"/src/images/SenegalianJ.webp",
		),
	);

	return menu;
}

function createMenuItem(name, description, image) {
	const menuItem = document.createElement("div");
	menuItem.classList.add(
		"menu-item",
		"pt-5",
		"col-8",
		"col-md-7",
		"col-lg-5",
		"my-5",
		"mx-4",
	);
	menuItem.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

	menuItem.style.transition = "background-color 0.3s"; // Adding a transition for a smooth color change

	// Change background color on hover
	menuItem.addEventListener("mouseover", function () {
		menuItem.style.backgroundColor = "rgba(255, 255, 255, 0.259)"; // Change to a different color on hover
		menuItem.style.color = "#f3cfaf";
	});

	// Revert back to the original background color on mouseout
	menuItem.addEventListener("mouseout", function () {
		menuItem.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // Revert back to the original color
		menuItem.style.color = "white";
	});

	const foodName = document.createElement("h2");
	foodName.classList.add("col-10", "col-md-10", "col-lg-10");
	foodName.style.margin = "0 auto";
	foodName.textContent = name;

	const foodDescription = document.createElement("p");
	foodDescription.classList.add();
	foodDescription.classList.add("col-10", "col-md-10", "col-lg-10", "pb-4");
	foodDescription.style.margin = "0 auto";
	foodDescription.textContent = description;

	const foodImage = document.createElement("img");
	foodImage.src = image;
	foodImage.alt = `${name}`;
	foodImage.style.display = "flex";
	// foodImage.style.flexWrap = "wrap";
	foodImage.style.justifyContent = "center";
	foodImage.style.margin = "0 auto";
	foodImage.classList.add(
		"menuImg",
		"border",
		"border-secondary-subtle",
		"col-10",
		"col-md-10",
		"col-lg-8",
	);
	function updateImageHeight() {
		if (window.innerWidth >= 1000) {
			foodImage.style.height = "300px";
			foodImage.style.borderRadius = "47%";
			foodName.style.fontSize = "1.4rem";
			foodName.style.marginTop = "1.35rem";
			foodDescription.style.fontSize = "0.92rem";
			foodDescription.style.fontWeight = "200";
		} else if (window.innerWidth >= 768) {
			foodImage.style.height = "220px";
			foodImage.style.borderRadius = "50%";
		} else {
			foodImage.style.height = "180px";
			foodImage.style.borderRadius = "45%";
		}
	}

	// Call the function to set the initial height
	updateImageHeight();

	// Listen for the window resize event and update the height accordingly
	window.addEventListener("resize", updateImageHeight);

	foodImage.style.objectFit = "cover";

	menuItem.appendChild(foodImage);
	menuItem.appendChild(foodName);
	menuItem.appendChild(foodDescription);

	return menuItem;
}
// function createMenuItem(name, description) {
// 	const menuItem = document.createElement("div");
// 	menuItem.classList.add("menu-item");

// 	const foodName = document.createElement("h2");
// 	foodName.textContent = name;

// 	const foodDescription = document.createElement("p");
// 	foodDescription.textContent = description;

// 	const foodImage = document.createElement("img");
// 	foodImage.src = "ae.jpg";
// 	foodImage.alt = `${name}`;

// 	menuItem.appendChild(foodImage);
// 	menuItem.appendChild(foodName);
// 	menuItem.appendChild(foodDescription);

// 	return menuItem;
// }

function loadMenu() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.appendChild(createMenu());
}

export default loadMenu;
