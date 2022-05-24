import React from 'react';
import { FlatList } from 'react-native';
import { ingredient } from '../../../utils/data';
import { Header } from '../../Header';
import { HeaderPage } from '../../HeaderPage';

import {
    Container,
    IngedientName
} from './styles';

export interface Ingredient {
    id: string;
    name: string;
}

export function SelectIngredient() {
    return (
        <Container>
            <Header title="Menu" />

            <HeaderPage titlePage='Selecionar Ingrediente' />
            <FlatList
                data={ingredient}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <IngedientName>{item.name}</IngedientName>
                )}
            />
        </Container>
    )
}