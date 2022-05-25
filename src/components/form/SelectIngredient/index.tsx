import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { IngredientProps } from '../../../screens/menu/Ingredient';
import { ingredient } from '../../../utils/data';
import { Header } from '../../Header';
import { HeaderPage } from '../../HeaderPage';
import { ButtonSend } from '../Button';
import { ItemSelectIngredient } from '../ItemSelectIngredient';

import {
    Container
} from './styles';

export interface Props {
    ingredient: IngredientProps;
    closeListIngredient: () => void;
    setIngredient: (ingredient:IngredientProps) => void;
}

export function SelectIngredient({closeListIngredient, setIngredient}: Props) {
    const [selectedIngredient, setSelectedIngredient] = useState(false);

    function handleCloseIngredientSelect() {
        closeListIngredient();
    }
    function handleIngredientSelect(id: string) {
        console.log(id);
        setSelectedIngredient(!selectedIngredient);
    }

    return (
        <Container>
            <Header title="Menu" />

            <HeaderPage titlePage='Selecionar Ingredientes:' />
            <FlatList
                data={ingredient}
                style={{width: 410, paddingLeft: 20, paddingRight: 20}}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemSelectIngredient ingredient={item} isSelected={selectedIngredient} onSelect={()=>handleIngredientSelect} />
                )}
            />
            <ButtonSend title="Selecionar" width={380} 
                onPress={()=>handleCloseIngredientSelect}
            />
        </Container>
    )
}