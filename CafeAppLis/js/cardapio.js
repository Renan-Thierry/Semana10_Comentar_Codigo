import itens from './model/dataset.js'; //importação dos arquivos dataset.js
import foodsModel from './model/foods.js'; //importação dos arquivos foods.js


foodsModel.load(itens); //carregamento de todos os itens da pasta foods
let foods = foodsModel.readAll(); //variavel onde irá pegar todos os registros do cardapio e fazer um parse de string para JSON

function initFoodsCard() { //função que irá carregar todos os registros e gerar os cartões com o Bootstrap

    for (let item of foods) { //esse for e um laço de repetição que será aplicado em todos os itens registrados 

        const view = createFoodCardItem(item); //essa variavel irá criar toda a estrutura do HTML dinamicamente por meio da função createFoodCardItem

        let itensCardapio = document.getElementById("itens-cardapio");
        itensCardapio.insertAdjacentHTML('beforeend', view);
        //essa variavel armazena os elementos da div que tem no cardapio.html e adiciona novos elementos child dentro dela
    }
}

function createFoodCardItem(item) { //função que vai criar os cards dinamicamente com o bootstrap e preencher com a imagem, nome e descrição

    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;

    return view; // retorno da estrutura HTMl
}


const foodForm = document.getElementById("foodForm"); // Capta o evento de submissão do formulário e adicionar o item no cartão 

foodForm.onsubmit = function(event) { //captura o evento osSubmit do formulario pelo botão Adicionar sempre que e adicionado novos itens

    event.preventDefault(); // Previne que o modal fique abrindo e fechando em loop.         

    let newFood = Object.fromEntries(new FormData(foodForm));
    foodsModel.create(newFood); //Variavel que vai transformar uma lista de pares chave-valor em um objeto, permitindo que vc possa manipular depois

    const foodCard = createFoodCardItem(newFood); // irá gerar dinamicamente uma estrutura HTML e preenche-las com imagem,nome e descrição
    let itensCardapio = document.getElementById("itens-cardapio");
    itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}

initFoodsCard(); //função initFoodsCard irá inicializar o carregamento de todos os itens do cardapio