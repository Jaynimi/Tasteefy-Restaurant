function createMenu() {
	const menu = document.createElement("div");
	menu.classList.add("menu");

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
			"Cameroonian Jollof",
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
	menuItem.classList.add("menu-item");

	const foodName = document.createElement("h2");
	foodName.textContent = name;

	const foodDescription = document.createElement("p");
	foodDescription.textContent = description;

	const foodImage = document.createElement("img");
	foodImage.src = image;
	foodImage.alt = `${name}`;

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
