import React, {useState} from 'react';
import { IngredientProps } from '../../../screens/menu/Ingredient';

import {
    Container,
    Icon,
    IngedientName
} from './styles';

interface Props{
    isSelected: boolean;
    onSelect: () => void;
    ingredient: IngredientProps;
}

export function ItemSelectIngredient({ isSelected, onSelect, ingredient }:Props){
    return (
        <Container onPress={onSelect}>
            {isSelected ? <Icon size={30} name="check-square" /> : <Icon size={30} name="square" /> }
            <IngedientName isSelected={isSelected}>{ingredient.name}</IngedientName>
        </Container>
    )
}