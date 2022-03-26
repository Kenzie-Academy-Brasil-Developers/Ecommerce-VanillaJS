const jacketL = {
	id: "jacketL",
	img: "light-jacket.png",
	category: "Jaquetas",
	title: "Lightweight Jacket",
	description: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
	price: 100
}
const hat = {
	id: "hat",
	img: "hat.png",
	category: "Acessórios",
	title: "Black Hat",
	description: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
	price: 100
}
const mask = {
	id: "mask",
	img: "mask.png",
	category: "Acessórios",
	title: "Mask",
	description: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
	price: "40"
}
const tshirtB = {
	id: "tshirtB",
	img: "black-T-Shirt.png",
	category: "Camisetas",
	title: "T-Shirt",
	description: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
	price: 100
}
const tshirtW = {
	id: "tshirtW",
	img: "white-T-Shirt.png",
	category: "Camisetas",
	title: "Short-Sleeve T-Shirt",
	description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
	price: 100
}
const jacketC = {
	id: "jacketC",
	img: "black-jacket.png",
	category: "Jaquetas",
	title: "Champion Packable Jacket",
	description: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
	price: 100
}
const productsList = [jacketL, hat, mask, tshirtB, tshirtW, jacketC]
const containerProducts = document.createElement("div")
containerProducts.classList.add('products')
const main = document.querySelector("main")
const cartContainer = document.querySelector(".productsCart")
let cartList = []

function hideCart() {
	let cartHtml = document.getElementById('cartHtml')
	cartHtml.classList.add('hide')
}

function mobileCartHide() {
	if (isCartEmpty() & isMobile()) {
		hideCart()
	}
}

function isMobile() {
	if (window.innerWidth < 933) {
		return true
	} else {
		return false
	}
}

function isAlredyOnCart(product) {
	if (cartList.includes(product)) {
		return true
	} else {
		return false
	}
}

function whatAmount(product) {
	let amountHtml = document.getElementById(`amount${product.id}`)
	let amount = Number(amountHtml.innerText)
	return amount
}

function addOneMore(product) {
	let amountHtml = document.getElementById(`amount${product.id}`)
	amountHtml.innerText = `${whatAmount(product) + 1}`
}

function isProductMultiple(product) {
	if (whatAmount(product) > 1) {
		return true
	} else {
		return false
	}
}

function reduceOne(product) {
	let amountHtml = document.getElementById(`amount${product.id}`)
	amountHtml.innerText = `${whatAmount(product) - 1}`
}

function removeFromCartList(product) {
	let y = false
	for (let i = 0; y == false; i++) {
		if (cartList[i] == product) {
			cartList.splice(i, 1)
			y = true
		}
	}
}

function calcQuantity() {
	let quantity = cartList.length
	return quantity
}

function calcTotal() {
	let valorTotal = 0
	for (let i = 0; i < cartList.length; i++) {
		valorTotal += parseInt(cartList[i].price)
	}
	return valorTotal
}

function recalcValues() {
	let quantityHtml = document.getElementById('quantityHtml')
	quantityHtml.innerText = calcQuantity()
	let totalHtml = document.getElementById('totalHtml')
	totalHtml.innerText = calcTotal()
}

function removeEmptyMessage() {
	if (isCartEmpty()) {
		emptyCartHtml = document.getElementById('emptyCartMessage')
		cartContainer.classList.remove('emptyCart')
		cartContainer.removeChild(emptyCartHtml)
		showValues()
		console.log('else')
	}
}

function createEmptyMessage() {
	if (isCartEmpty()) {
		let emptyCartHtml = document.createElement('p')
		emptyCartHtml.innerText = `Carrinho vazio
		Experimente adicionar algo ao carrinho`
		emptyCartHtml.id = 'emptyCartMessage'
		cartContainer.classList.add('emptyCart')
		cartContainer.appendChild(emptyCartHtml)
	}
}

function valuesShowOrNot() {
	if (isCartEmpty()) {
		hideValues()
	} else {
		showValues()
	}
}

function hideValues() {
	let cartHide = document.getElementById('values')
	cartHide.classList.add('hide')
}

function showValues() {
	let cartShow = document.getElementById('values')
	cartShow.classList.remove('hide')
}

function isCartEmpty() {
	if (cartList.length == 0) {
		return true
	} else {
		return false
	}
}

function removeFromCart(product) {
	if (isProductMultiple(product)) {
		reduceOne(product)
	} else {
		let idRemove = `cart${product.id}`
		let toRemove = document.getElementById(idRemove)
		cartContainer.removeChild(toRemove)
	}

	removeFromCartList(product)
	recalcValues()
	createEmptyMessage()
	valuesShowOrNot()
}

function addOnCart(product) {
	removeEmptyMessage()

	let miniCard = document.createElement("div")
	let containerImgMini = document.createElement("div")
	let imgMini = document.createElement("img")
	let infoMini = document.createElement("div")
	let titleMini = document.createElement("h3")
	let priceMini = document.createElement("p")
	let quantityMini = document.createElement("p")
	let removeCart = document.createElement("button")
	imgMini.src = product.img;
	removeCart.innerHTML = "Remover produto"
	removeCart.id = `remove${product.id}`
	miniCard.id = `cart${product.id}`
	titleMini.innerText = product.title
	priceMini.innerText = 'R$ ' + product.price + '.00';
	quantityMini.id = `amount${product.id}`

	if (isAlredyOnCart(product)) {
		addOneMore(product)
	} else {
		quantityMini.innerText = '1'
		miniCard.classList.add('productsMini')
		containerImgMini.classList.add('containerImageMini')
		imgMini.classList.add('imageMini')
		infoMini.classList.add('infoMini')
		titleMini.classList.add('productTitle')
		priceMini.classList.add('price')
		quantityMini.classList.add('quantityMini')
		removeCart.classList.add('removeCart')
		removeCart.addEventListener('click', function () {
			removeFromCart(product)
		})
		infoMini.appendChild(titleMini)
		infoMini.appendChild(priceMini)
		infoMini.appendChild(priceMini)
		infoMini.appendChild(quantityMini)
		infoMini.appendChild(removeCart)
		containerImgMini.appendChild(imgMini)
		miniCard.appendChild(containerImgMini)
		miniCard.appendChild(infoMini)
		cartContainer.appendChild(miniCard)
		let showValues = document.getElementById('values')
		showValues.classList.remove('hide')
		miniCard.classList.add("productMini")
	}
	cartList.push(product)
	recalcValues()
	valuesShowOrNot()

}

function createCards() {
	for (let i = 0; i < productsList.length; i++) {
		let currentProduct = productsList[i]
		let card = document.createElement("div")
		let imgContainer = document.createElement("div")
		let image = document.createElement("img")
		let infoContainer = document.createElement("div")
		let categoryName = document.createElement("h3")
		let productTitle = document.createElement("h2")
		let description = document.createElement("p")
		let price = document.createElement("p")
		let addToCart = document.createElement("button")

		card.id = currentProduct.id
		image.src = currentProduct.img
		categoryName.innerText = currentProduct.category
		productTitle.innerText = currentProduct.title
		description.innerText = currentProduct.description
		price.innerText = "R$ " + currentProduct.price + ".00"

		if (isMobile()) {
			addToCart.innerText = 'Comprar'
		} else {
			addToCart.innerText = "Adicionar ao carrinho"
		}

		addToCart.id = `cart${currentProduct.id}`
		addToCart.addEventListener('click', function () {
			addOnCart(currentProduct)
		})

		card.classList.add("cards")
		imgContainer.classList.add("containerImage")
		image.classList.add("image")
		infoContainer.classList.add("containerInfo")
		categoryName.classList.add("category")
		productTitle.classList.add("productTitle")
		description.classList.add("description")
		price.classList.add("price")
		addToCart.classList.add("addCart")
		card.appendChild(imgContainer)
		card.appendChild(infoContainer)
		imgContainer.appendChild(image)
		infoContainer.appendChild(categoryName)
		infoContainer.appendChild(productTitle)
		infoContainer.appendChild(description)
		infoContainer.appendChild(price)
		infoContainer.appendChild(addToCart)
		containerProducts.appendChild(card)
		main.appendChild(containerProducts)
	}
}

createCards()
mobileCartHide()
createEmptyMessage()
valuesShowOrNot()