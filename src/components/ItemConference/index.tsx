import React from 'react';
import {Text} from 'react-native';
import { Input } from '../Form/Input';

import {
    Container,
    Information,
    Title,
    DescriptionAmount,
    GroupButtonStatus,
    ButtonStatus,
    TextButtonStatus,
    ButtonsAction,
    Buttons
} from './styles';

export function ItemConference() {
    return (
        <Container>
            <Information>
                <Title>Batata Frita</Title>
                <DescriptionAmount>Quantidade ideal: 20</DescriptionAmount>
            </Information>
            <GroupButtonStatus>
                <ButtonStatus>
                    <TextButtonStatus>Insuficiente</TextButtonStatus>
                </ButtonStatus>
                <ButtonsAction>
                    <Buttons />
                    <Buttons />
                    <Buttons />
                </ButtonsAction>
            </GroupButtonStatus>
        </Container>
    )
}

