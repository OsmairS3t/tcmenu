import React from 'react';

import {
    Container,
    Content,
    Title,
    Label
} from './styles';

interface Props{
    label?:string;
}

export function ImageView({label}:Props) {
    return (
        <Container>
            {label && <Label>{label}</Label>}
            <Content>
                <Title>Sem{"\n"}Imagem</Title>
            </Content>
        </Container>
    )
}