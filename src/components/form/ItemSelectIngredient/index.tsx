import React, {useState} from 'react';
import { IIngredient } from '../../../utils/interface';

import {
    Container,
    Icon,
    IngedientName
} from './styles';

interface Props{
    ingredient: IIngredient;
    selected: string[];
}

export function ItemSelectIngredient({ ingredient, selected }:Props){
    const [isClicked, setIsClicked] = useState(false);

    function handleSelectIngredientList(id: string) {
        setIsClicked(!isClicked);
        selected.push(id);
    }

    return (
        <Container onPress={() => handleSelectIngredientList(ingredient.id)}>
            { isClicked ? 
                <Icon size={30} name="check-square" /> : 
                <Icon size={30} name="square" /> 
            }
            <IngedientName isSelected={isClicked}>
                {ingredient.name}
            </IngedientName>
        </Container>
    )
}