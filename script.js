const jacketL = {
	id: "jacketL",
	img: "light-jacket.png",
	category: "Jaquetas",
	title: "Lightweight Jacket",
	description: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
	price: 100,
	cart: 'cartJacketL',
	removeCart: 'removeJacketL',
	removeId: 'removeJL'
};
const hat = {
	id: "hat",
	img: "hat.png",
	category: "Acessórios",
	title: "Black Hat",
	description: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
	price: 100,
	cart: 'cartHat',
	removeCart: 'removeHat',
	removeId: 'removeHT'
};
const mask = {
	id: "mask",
	img: "mask.png",
	category: "Acessórios",
	title: "Mask",
	description: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
	price: "40",
	cart: 'cartMask',
	removeCart: 'removeMask',
	removeId: 'removeMK'
};
const tshirtB = {
	id: "tshirtB",
	img: "black-T-Shirt.png",
	category: "Camisetas",
	title: "T-Shirt",
	description: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
	price: 100,
	cart: 'cartTshirtB',
	removeCart: 'removeTshirtB',
	removeId: 'removeTB'
};
const tshirtW = {
	id: "tshirtW",
	img: "white-T-Shirt.png",
	category: "Camisetas",
	title: "Short-Sleeve T-Shirt",
	description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
	price: 100,
	cart: 'cartTshirtW',
	removeCart: 'removeTshitW',
	removeId: 'removeTW'
};
const jacketC = {
	id: "jacketC",
	img: "black-jacket.png",
	category: "Jaquetas",
	title: "Champion Packable Jacket",
	description: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
	price: 100,
	cart: 'cartJacketC',
	removeCart: 'removeJacketC',
	removeId: 'removeJC'
};
const productsList = [jacketL, hat, mask, tshirtB, tshirtW, jacketC];

const containerProducts = document.createElement("div");

const main = document.querySelector("main");
const cartContainer = document.querySelector(".productsCart");

function createCards(categoria) {
	containerProducts.innerHTML = "";
	containerProducts.classList.add("products");

	for (let i = 0; i < 6; i++) {
		let currentProduct = productsList[i];

		let card = document.createElement("div");
		let imgContainer = document.createElement("div");
		let image = document.createElement("img");
		let infoContainer = document.createElement("div");
		let categoryName = document.createElement("h3");
		let productTitle = document.createElement("h2");
		let description = document.createElement("p");
		let price = document.createElement("p");
		let addToCart = document.createElement("button");

		card.id = currentProduct.id;
		image.src = currentProduct.img;
		categoryName.innerText = currentProduct.category;
		productTitle.innerText = currentProduct.title;
		description.innerText = currentProduct.description;
		price.innerText = "R$ " + currentProduct.price + ".00";
		addToCart.innerText = "Adicionar ao carrinho";
		addToCart.id = currentProduct.cart

		card.classList.add("cards");
		imgContainer.classList.add("containerImage");
		image.classList.add("image");
		infoContainer.classList.add("containerInfo");
		categoryName.classList.add("category");
		productTitle.classList.add("productTitle");
		description.classList.add("description");
		price.classList.add("price");
		addToCart.classList.add("addCart");

		card.appendChild(imgContainer);
		card.appendChild(infoContainer);
		imgContainer.appendChild(image);
		infoContainer.appendChild(categoryName);
		infoContainer.appendChild(productTitle);
		infoContainer.appendChild(description);
		infoContainer.appendChild(price);
		infoContainer.appendChild(addToCart);
		containerProducts.appendChild(card);

		main.appendChild(containerProducts);

		if (categoria == todos) {} else if (categoria != currentProduct.category) {
			card.classList.add("hide");
		}
	}
	addToCartButton()
}
createCards(todos)

function addToCartButton() {
	let buttonJacketL = document.getElementById('cartJacketL')
	let buttonHat = document.getElementById('cartHat')
	let buttonMask = document.getElementById('cartMask')
	let buttonTshirtB = document.getElementById('cartTshirtB')
	let buttonTshirtW = document.getElementById('cartTshirtW')
	let buttonJacketC = document.getElementById('cartJacketC')

	buttonJacketL.addEventListener('click', function() {
		addOnCart(jacketL)
	})
	buttonHat.addEventListener('click', function() {
		addOnCart(hat)
	})
	buttonMask.addEventListener('click', function() {
		addOnCart(mask)
	})
	buttonTshirtB.addEventListener('click', function() {
		addOnCart(tshirtB)
	})
	buttonTshirtW.addEventListener('click', function() {
		addOnCart(tshirtW)
	})
	buttonJacketC.addEventListener('click', function() {
		addOnCart(jacketC)
	})
}
let cartList = []

function addOnCart(product) {
	let miniCard = document.createElement("div");
	let containerImgMini = document.createElement("div");
	let imgMini = document.createElement("img");
	let infoMini = document.createElement("div");
	let titleMini = document.createElement("h3");
	let priceMini = document.createElement("p");
	let removeCart = document.createElement("button");

	imgMini.src = product.img;
	titleMini.innerText = product.title;
	priceMini.innerText = 'R$ ' + product.price + '.00';
	removeCart.innerHTML = "Remover produto";
	removeCart.id = product.removeCart
	miniCard.id = product.cart

	miniCard.classList.add('productsMini')
	containerImgMini.classList.add('containerImageMini')
	imgMini.classList.add('imageMini')
	infoMini.classList.add('infoMini')
	titleMini.classList.add('productTitle')
	priceMini.classList.add('price')
	removeCart.classList.add('removeCart')
	removeCart.addEventListener('click', function() {
		removeFromCart(product)
	})

	cartList.push(product)
	console.log(cartList)

	infoMini.appendChild(titleMini);
	infoMini.appendChild(priceMini);
	infoMini.appendChild(priceMini);
	infoMini.appendChild(removeCart)
	containerImgMini.appendChild(imgMini);
	miniCard.appendChild(containerImgMini);
	miniCard.appendChild(infoMini)
	cartContainer.appendChild(miniCard);
	miniCard.classList.add("productMini");

	calcValue()
}

function removeFromCart(product) {
	let idRemove = product.cart
	let toRemove = document.getElementById(idRemove)
	cartContainer.removeChild(toRemove)
	for (let i = 0; i < cartList.length; i++) {
		if (cartList[i] == product) {
			cartList.splice(i)
		}
	}
	calcValue()

}

let amount = document.getElementById('amount')
let total = document.getElementById('total')

function calcValue() {
	let quantidade = cartList.length.toString()
	amount.innerText = quantidade
	let valorTotal = 0
	for (let i = 0; i < cartList.length; i++) {
		valorTotal += parseInt(cartList[i].price)
	}
	total.innerText = valorTotal
}
