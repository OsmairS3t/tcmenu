export interface IIngredient {
  id: string;
  name: string;
  price: number;
  unit: string;
  amountstock: number;
  amountnecessary: number;
  isnecessary: boolean;
}

export interface IMenu {
  id: string;
  name: string;
  price: number;
  timeprepare: string;
  peopleamount: number;
  ingredients: IIngredient[];
}


