const menu = [
    [{optionsTitle: "Primeiro, seu prato", class: "optionsDishes", idData: "dishes"},
    {image: "./assets/dishes/couscous.jpg", optionTitle: "Cuscuz", description: "cuscuz feito sem crueldade animal", price: "5,90", priceId: 5.90, function: "selectDishes", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/dishes/pancakes.jpg", optionTitle: "Panquecas", description: "panquecas feitas sem crueldade", price: "7,90", priceId: 7.90, function: "selectDishes", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/dishes/cassava-puffs.jpeg", optionTitle: "Pães de Beijo", description: "pães de beijo feitos sem crueldade", price: "7,50", priceId: 7.50, function: "selectDishes", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/dishes/sandwich.jpeg", optionTitle: "Sandu. de abacate", description: "sanduíche de abacate feito sem crueldade", price: "6,50", priceId: 6.50, function: "selectDishes", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"}
    ],
    [{optionsTitle: "Agora, sua bebida", class: "optionsDrinks", idData: "drinks"},
    {image: "./assets/drinks/pineapple-juice.png", optionTitle: "Suco de Abacaxi", description: "feito com amor e sem crueldade", price: "3,90", priceId: 3.90, function: "selectDrinks", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/drinks/orange-juice.png", optionTitle: "Suco de Laranja", description: "feito com amor e sem crueldade", price: "4,90", priceId: 4.90, function: "selectDrinks", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/drinks/passion-fruit-juice.png", optionTitle: "Suco de Maracujá", description: "feito com amor e sem crueldade", price: "3,80", priceId: 3.80, function: "selectDrinks", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/drinks/grape-juice.png", optionTitle: "Suco de Uva", description: "feita com amor e sem crueldade", price: "3,50", priceId: 3.50, function: "selectDrinks", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"}
    ],
    [{optionsTitle: "Por fim, sua sobremesa", class: "optionsDesserts", idData: "desserts"},
    {image: "./assets/dessert/cookies.jpeg", optionTitle: "Cookies", description: "feitos com amor e sem crueldade", price: "4,90", priceId: 4.90, function: "selectDesserts", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/dessert/chocolate-mousse.jpeg", optionTitle: "Mou. de Chocolate", description: "feito com amor e sem crueldade", price: "5,90", priceId: 5.90, function: "selectDesserts", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/dessert/passion-fruit-mousse.jpeg", optionTitle: "Mous. de Maracujá", description: "feito com amor e sem crueldade", price: "5,50", priceId: 5.50, function: "selectDesserts", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"},
    {image: "./assets/dessert/italian-fudge.jpeg", optionTitle: "Palha Italiana", description: "feita com amor e sem crueldade", price: "6,70", priceId: 6.70, function: "selectDesserts", idOption: "food-option", idTitle: "food-title", idPrice: "food-price"}
    ]   
];

startScreen();

function startScreen() {

    const tela = document.querySelector('main');

    tela.innerHTML = ` 
        <header>
            <h1 class="logo">DrivenEats</h1>
            <h2 class="slogan">Sua comida em 6 minutos</h2>
        </header>

        <div class="contents"> </div>

        <footer>
            <button class="finish-button" onclick="requestData()">Selecione os 3 itens para fechar o pedido</button>
        </footer>

        <div class="overlay-screen hidden">
            <div class="check-screen" data-identifier="confirmation-dialog">
                <h1>Confirme seu pedido</h1>
                <ul>
                    <li>
                        <p class="dish-title"></p>
                        <p class="dish-price"></p>
                    </li>
                    <li>
                        <p class="drink-title"></p>
                        <p class="drink-price"></p>
                    </li>
                    <li>
                        <p class="dessert-title"></p>
                        <p class="dessert-price"></p>
                    </li>
                    <li>
                        <p class="total-title">TOTAL</p>
                        <p class="total-price"></p>
                    </li>
                </ul>
                <button class="send-order" onclick="sendOrder()">Tudo certo, pode pedir!</button>
                <h2 class="cancel-order" onclick="cancelOrder()">Cancelar</h2>
            </div>
        </div>
    `;

    const options = document.querySelector(".contents");

    for (let i = 0; i < menu.length; i++) {
        options.innerHTML += `
            <section>
                <h1 class="options-title"> ${menu[i][0].optionsTitle} </h1>
                <div class="${menu[i][0].class}" data-identifier="${menu[i][0].idData}"></div>
            </section>
        `;
        
        const option = document.querySelector(`.${menu[i][0].class}`);

        for (let j = 1; j < Object.keys(menu[0]).length; j++) {
            option.innerHTML += `
                <div class="option" data-identifier="${menu[i][j].idOption}" onclick="${menu[i][j].function}(this, '${menu[i][j].optionTitle}', ${menu[i][j].priceId})">
                    <img src="${menu[i][j].image}" alt="${menu[i][j].optionTitle}">
                    <p class="option-title" data-identifier="${menu[i][j].idTitle}">${menu[i][j].optionTitle}</p>
                    <p class="option-description">${menu[i][j].description}</p>
                    <div class="option-fotter">
                        <p class="price" data-identifier="${menu[i][j].idPrice}">R$ ${menu[i][j].price}</p>
                        <ion-icon name='checkmark-circle-sharp' class='option-check'></ion-icon>
                    </div>
                </div>
            `;
        }
    }
}

let userName;
let userAddress;

let dishTitle;
let drinkTitle;
let dessertTitle;

let dishPrice;
let drinkPrice;
let dessertPrice;

let totalPrice;

function selectDishes(option, optionTitle, idPrice) {

    const isSelectedDish = document.querySelector(".optionsDishes .isSelected");

    if (isSelectedDish !== null) {
        isSelectedDish.classList.remove("isSelected");
    }

    option.classList.add("isSelected");
    dishTitle = optionTitle;
    dishPrice = idPrice;

    activateButton();
}

function selectDrinks(option, optionTitle, idPrice) {

    const isSelectedDrink = document.querySelector(".optionsDrinks .isSelected");

    if (isSelectedDrink !== null) {
        isSelectedDrink.classList.remove("isSelected");
    }

    option.classList.add("isSelected");
    drinkTitle = optionTitle;
    drinkPrice = idPrice;

    activateButton();
}

function selectDesserts(option, optionTitle, idPrice) {

    const isSelectedDessert = document.querySelector(".optionsDesserts .isSelected");

    if (isSelectedDessert !== null) {
        isSelectedDessert.classList.remove("isSelected");
    }

    option.classList.add("isSelected");
    dessertTitle = optionTitle;
    dessertPrice = idPrice;

    activateButton();
}

function activateButton() {
    
    const isSelectedDish = document.querySelector(".optionsDishes .isSelected");
    const isSelectedDrink = document.querySelector(".optionsDrinks .isSelected");
    const isSelectedDessert = document.querySelector(".optionsDesserts .isSelected");

    const finishButton = document.querySelector(".finish-button");

    if ((isSelectedDish !== null) && (isSelectedDrink !== null) && (isSelectedDessert !== null)) {
        finishButton.innerHTML = `Fechar pedido`;
        finishButton.classList.add("activated");
    }

}

function requestData() {

    userName = prompt("Nome: ");
    userAddress = prompt("Endereço: ");

    confirmOrder();
}

function sendOrder() {

    window.open(`https://wa.me/5555984660648?text=${encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${dishTitle}\n- Bebida: ${drinkTitle}\n- Sobremesa: ${dessertTitle} \nTotal: R$ ${totalPrice.toFixed(2)}\n\nNome: ${userName}\nEndereço: ${userAddress}`)}`).focus;
}

function cancelOrder() {
    document.querySelector(".overlay-screen").classList.add("hidden");
}

function confirmOrder() {

    totalPrice = dishPrice + drinkPrice + dessertPrice;

    document.querySelector(".overlay-screen").classList.remove("hidden");
    document.querySelector(".dish-title").innerHTML = dishTitle;
    document.querySelector(".dish-price").innerHTML = (dishPrice.toFixed(2).replace('.',','));
    document.querySelector(".drink-title").innerHTML = drinkTitle;
    document.querySelector(".drink-price").innerHTML = (drinkPrice.toFixed(2).replace('.',','));
    document.querySelector(".dessert-title").innerHTML = dessertTitle;
    document.querySelector(".dessert-price").innerHTML = (dessertPrice.toFixed(2).replace('.',','));
    document.querySelector(".total-price").innerHTML = `R$ ${(totalPrice.toFixed(2).replace('.',','))}`
}