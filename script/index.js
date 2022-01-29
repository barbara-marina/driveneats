startScreen();

function startScreen() {

    const menu = [
        [{optionsTitle: "Primeiro, seu prato", class: "optionsDishes"},
        {image: "./assets/dishes/couscous.jpg", optionTitle: "Cuscuz", description: "cuscuz feito sem crueldade animal", price: "5,90", idPrice: "5.90"},
        {image: "./assets/dishes/pancakes.jpg", optionTitle: "Panquecas", description: "panquecas feitas sem crueldade", price: "7,90", idPrice: "7.90"},
        {image: "./assets/dishes/cassava-puffs.jpeg", optionTitle: "Pães de Beijo", description: "pães de beijo feitos sem crueldade", price: "7,50", idPrice: "7.50"},
        {image: "./assets/dishes/sandwich.jpeg", optionTitle: "Sandu. de abacate", description: "sanduíche de abacate feito sem crueldade", price: "6,50", idPrice: "6.50"}
        ],
        [{optionsTitle: "Agora, sua bebida", class: "optionsDrinks"},
        {image: "./assets/drinks/pineapple-juice.png", optionTitle: "Suco de Abacaxi", description: "feito com amor e sem crueldade", price: "3,90", idPrice: "3.90"},
        {image: "./assets/drinks/orange-juice.png", optionTitle: "Suco de Laranja", description: "feito com amor e sem crueldade", price: "4,90", idPrice: "4.90"},
        {image: "./assets/drinks/passion-fruit-juice.png", optionTitle: "Suco de Maracujá", description: "feito com amor e sem crueldade", price: "3,80", idPrice: "3.80"},
        {image: "./assets/drinks/grape-juice.png", optionTitle: "Suco de Uva", description: "feita com amor e sem crueldade", price: "3,50", idPrice: "3.50"}
        ],
        [{optionsTitle: "Por fim, sua sobremesa", class: "optionsDeserts"},
        {image: "./assets/dessert/cookies.jpeg", optionTitle: "Coockies", description: "feitos com amor e sem crueldade", price: "4,90", idPrice: "4.90"},
        {image: "./assets/dessert/chocolate-mousse.jpeg", optionTitle: "Mous. de Chocolate", description: "feito com amor e sem crueldade", price: "5,90", idPrice: "5.90"},
        {image: "./assets/dessert/passion-fruit-mousse.jpeg", optionTitle: "Mous. de Maracujá", description: "feito com amor e sem crueldade", price: "5,50", idPrice: "5.50"},
        {image: "./assets/dessert/italian-fudge.jpeg", optionTitle: "Palha Italiana", description: "feita com amor e sem crueldade", price: "6,70", idPrice: "6.70"}
        ]   
    ];

    const tela = document.querySelector('main');

    tela.innerHTML = ` 
        <header>
            <h1 class="logo">DrivenEats</h1>
            <h2 class="slogan">Sua comida em 6 minutos</h2>
        </header>

        <div class="contents"> </div>

        <footer>
            <button class="finish-button" onclick="alert('tá clicando')">Selecione os 3 itens para fechar o pedido</button>
        </footer>
    `;

    const options = document.querySelector(".contents");

    for (let i = 0; i < menu.length; i++) {
        options.innerHTML += `
            <section>
                <h1 class="options-title"> ${menu[i][0].optionsTitle} </h1>
                <div class="options ${menu[i][0].class}"></div>
            </section>
        `;
        
        const option = document.querySelector(`.${menu[i][0].class}`);

        for (let j = 1; j < Object.keys(menu[0]).length; j++) {
            option.innerHTML += `
                <div class="option">
                    <img src="${menu[i][j].image}" alt="${menu[i][j].optionTitle}">
                    <p class="option-title">${menu[i][j].optionTitle}</h3>
                    <p class="option-description">${menu[i][j].description}</h4>
                    <div class="option-fotter">
                        <div class="price">
                            <p class="price-sign">R$ </h5>
                            <p class="option-price" id="${menu[i][j].idPrice}">${menu[i][j].price}</h6>
                        </div>
                        <ion-icon name='checkmark-circle-sharp' class='option-check'></ion-icon>
                    </div>
                </div>
            `;
        }
    }
}



function activateButton() {
    
    const dishesSelected = document.querySelector(".isSelected");
    const drinksSelected = document.querySelector(".isSelected");
    const dessertsSelected = document.querySelector(".isSelected");
    const button = document.queryCommandIndeterm(".finish-button");

    if ((dishesSelected !== null) && (drinksSelected !== null) && (dessertsSelected !== null)) {

        button.innerHTML = `Fechar pedido`;
        button.classList.add("activated");
    }

}