import React, {useState} from 'react';
import { IIngredient } from '../../../utils/interface';

import {
    Container,
    Icon,
    IngedientName
} from './styles';

interface Props{
    ingredient: IIngredient;
    setIngredient: (ingredient: IIngredient) => void;
}

export function ItemSelectIngredient({ setIngredient, ingredient }:Props){
    const [ingred, setIngred] = useState(ingredient);
    const [selected, setSelected] = useState(ingredient.isnecessary);

    function handleSelectIngredientList(ingredient: IIngredient) {
        (ingred.isnecessary) ? setSelected(false) : setSelected(true);
        const ingredientTemp = {
            id: ingredient.id,
            name: ingredient.name,
            price: ingredient.price, 
            unit: ingredient.unit,
            amountstock: ingredient.amountstock, 
            amountnecessary: ingredient.amountnecessary, 
            isnecessary: selected
        }
        setIngred(ingredientTemp);
        console.log(ingredient)
    }

    return (
        <Container onPress={() => handleSelectIngredientList(ingred)}>
            { selected ? 
                <Icon size={30} name="check-square" /> : 
                <Icon size={30} name="square" /> 
            }
            <IngedientName isSelected={selected}>
                {ingred.name}
            </IngedientName>
        </Container>
    )
}