import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

    function exit() {
        navigation.navigate('approutes');
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Exit onPress={()=>exit}>
                <Icon name="x" size={25} />
            </Exit>
        </Container>
    )
}