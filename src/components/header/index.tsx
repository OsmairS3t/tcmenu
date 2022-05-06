import React from 'react';

import {
    Container,
    Title,
    Exit,
    Icon
} from './styles';

interface Props{
    title: string;
}

export function Header({title}: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <Exit>
                <Icon name="arrow-left" size={25} />
            </Exit>
        </Container>
    )
}