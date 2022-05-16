export const category = [
    {id: 'ab1', name: 'Crepe'},
    {id: 'ab2', name: 'Prato'},
    {id: 'ab3', name: 'Sobremesa'},
    {id: 'ab4', name: 'Suco'},
    {id: 'ab5', name: 'Drink'},
    {id: 'ab6', name: 'Cerveja'},
    {id: 'ab7', name: 'Vinho'},
]

export const menu = [
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

export const ingredient = [
    {id: 'a', name: 'Farinha de Trigo', unit: 'quilos',price: 5, amount: 10, amountnecessary: 10},
    {id: 'b', name: 'Leite', price: 5, unit: 'litros',amount: 10, amountnecessary: 10},
    {id: 'c', name: 'Ovos', price: 5, unit: 'unidades',amount: 10, amountnecessary: 10},
    {id: 'd', name: 'Óleo', price: 10, unit: 'litros',amount: 10, amountnecessary: 20},
    {id: 'e', name: 'Batata', price: 120, unit: 'kg',amount: 1, amountnecessary: 1},
]

