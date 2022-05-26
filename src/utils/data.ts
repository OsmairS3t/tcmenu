export const listcategory = [
    {id: 'ab1', name: 'Crepe'},
    {id: 'ab2', name: 'Prato'},
    {id: 'ab3', name: 'Sobremesa'},
    {id: 'ab4', name: 'Suco'},
    {id: 'ab5', name: 'Drink'},
    {id: 'ab6', name: 'Cerveja'},
    {id: 'ab7', name: 'Vinho'},
]

export const listmenu = [
    {
      id: '1',
      category: 'ab1',
      name:'Lyon', 
      photo: '',
      price:30.00, 
      timeprepare:'5 minutos', 
      peopleamount: 1, 
      ingredients: [
        {id:'a', name: 'Farinha de Trigo'},
        {id:'b', name: 'Ovos'},
        {id:'c', name: 'Sal'},
        {id:'d', name: 'Leite'}
      ]
    },
    {
      id: '2',
      category: 'ab2',
      name:'Batata Frita', 
      photo: '',
      price:6.00, 
      timeprepare:'5 minutos', 
      peopleamount: 1, 
      ingredients: [
        {id:'e', name: 'Batata'},
        {id:'f', name: 'Óleo'},
        {id:'g', name: 'Sal'}
      ]
    },
]

export const listingredient = [
    {id: 'a', name: 'Farinha de Trigo', unit: 'quilos',price: 5, amountstock: 10, amountnecessary: 10, isnecessary: false},
    {id: 'b', name: 'Leite', price: 5, unit: 'litros',amountstock: 10, amountnecessary: 10, isnecessary: false},
    {id: 'c', name: 'Ovos', price: 5, unit: 'unidades',amountstock: 10, amountnecessary: 10, isnecessary: false},
    {id: 'd', name: 'Óleo', price: 10, unit: 'litros',amountstock: 10, amountnecessary: 20, isnecessary: false},
    {id: 'e', name: 'Batata', price: 120, unit: 'kg',amountstock: 2, amountnecessary: 1, isnecessary: false},
]

/* Embalagem p/ Crepe
Embalagem p/ sacola
Embalagem p/ suco
Massa rodada suficiente pra noite pelo menos uma massa.
Batatas iniciar com pelo menos 20 porções
Queijo Ralado (suficiente pra noite, ou completar)
Filé mignon suficiente pra noite (crepe)
Filé mignon porcionado entrecot.
Filé porcionado filé moises
Cebola caramelizada pra noite
Mangericao fresco
Tomate cortado
Bacon (microondas na hora)
Velute de aipim (conferir suficiente)
Carne desfiada (conferir)
Frango suficiente (conferir)
Cream cheese
Catupiry
Cheedar
Milho (conferir)
Calabreza
Molho Heinz
Barbecue
Lombinho (ralado)
Rúcula lavada
Acelga
Camarão
Antepasto de legumes prós vegetarianos tem que ter no mínimo 5
Batata para fritar entrecot ver se tem
Arroz
Legumes pra camarão internqcional
 Bife empanado para parmegianno pelo menos 6 porções
Banana
Funghi
Carne moída pro espagheti pelo menos 6 porções.
Doce de leite
Goiabada
Biscoito champanhe
Morango
Nutella
Creme blank
Creme brule
Brounie
Chá verde
Chá rosele
Pessego
Laranja
Limão
Bebidas alcoolicas
 */