import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { IIngredient } from '../../../utils/interface';
import { Header } from '../../Header';
import { HeaderPage } from '../../HeaderPage';
import { ButtonSend } from '../Button';
import { ItemSelectIngredient } from '../ItemSelectIngredient';

import { Container } from './styles';

export interface Props {
    ingredients: IIngredient[];
    setSelectedIngredients: (intredients: IIngredient[]) => void;
    closeListIngredient: () => void;
}

export function SelectIngredient({ ingredients, setSelectedIngredients, closeListIngredient }: Props) {
    const [selIngre, setSelIngred] = useState<IIngredient[]>([]);
    const arrSelected: string[] = [];

    function submitSelectedIngredients() {
        let response:IIngredient[] = []
        arrSelected.map((idIng) => {
            response = ingredients.filter((ing) => ing.id === idIng)
        })
        setSelectedIngredients(response);
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
                        selected={arrSelected}
                        ingredient={item}
                    />
                )}
            />

            <ButtonSend title="Selecionar" width={380}
                onPress={submitSelectedIngredients}
            />
        </Container>
    )
}