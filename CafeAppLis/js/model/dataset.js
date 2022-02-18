const dataset = [ //constante que irá receber os itens com id, nome,descrição e imagem e será atribuida a um array e sera carregada automaticamente para os cartões  do cardapio
    {
        id: 1, //id do item 1
        name: 'Hambúrguer', //nome do item 1
        image: 'images/hamburguer.jpg', //imagem do item 1
        description: 'Um hambúrguer é um sanduíche que consiste em um ou mais hambúrgueres cozidos de carne moída, geralmente carne bovina, colocados dentro de um pão ou pão fatiado. O hambúrguer pode ser frito, grelhado, defumado ou grelhado', //descrição do item 1
    },
    {
        id: 2, //id do item 2
        name: 'Sanduíche', //nome do item 2
        image: 'images/sanduiche.jpg', //imagem do item 2
        description: 'O sanduíche (do inglês sandwich), também popularmente chamado de sanduba (português brasileiro) ou sandes (português europeu), é um tipo de alimento que consiste em duas fatias de um pão inteiro, entre as quais é colocada carne, queijo ou outro tipo de alimento.Os sanduíches são, habitualmente, consumidos ao lanche ou como uma refeição rápida, durante o almoço ou o jantar.', //descrição do item 2
    },
    {
        id: 3, //id do item 3
        name: 'Café', //nome do item 3
        image: 'images/cafe.jpg', //imagem do item 3
        description: 'O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.', //descrição do item 3
    },
    {
        id: 4, //id do item 4
        name: 'Suco', //nome do item 4
        image: 'images/suco.jpg', //imagem do item 4
        description: 'Um suco (português brasileiro) ou sumo (português europeu) é uma bebida produzida do líquido extraído de frutos. Além dos frutos, sucos também podem ser obtidos pelo processamento de outras partes dos vegetais, tais como folhas, talos ou raízes.', //descrição do item 4
    },
];

export default dataset; // exportação que permite q esse modulo seja importado em outro