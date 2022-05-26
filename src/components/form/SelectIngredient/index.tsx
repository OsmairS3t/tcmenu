import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { IIngredient } from '../../../utils/interface';
import { Header } from '../../Header';
import { HeaderPage } from '../../HeaderPage';
import { ButtonSend } from '../Button';
import { ItemSelectIngredient } from '../ItemSelectIngredient';

import {
    Container
} from './styles';

export interface Props {
    ingredients: IIngredient[];
    closeListIngredient: () => void;
}

export function SelectIngredient({ ingredients, closeListIngredient }: Props) {
    const [ingredient, setIngredient] = useState<IIngredient>();
    
    function handleCloseIngredientSelect() {
        console.log(ingredients)
        closeListIngredient();
    }

    return (
        <Container>
            <Header title="Menu" />

            <HeaderPage titlePage='Selecionar Ingredientes:' />
            <FlatList
                data={ingredients}
                style={{ width: 410, paddingLeft: 20, paddingRight: 20 }}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemSelectIngredient
                        ingredient={item}
                        setIngredient={setIngredient}
                    />
                )}
            />
            <ButtonSend title="Selecionar" width={380}
                onPress={handleCloseIngredientSelect}
            />
        </Container>
    )
}