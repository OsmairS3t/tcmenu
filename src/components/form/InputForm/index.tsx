import React from "react";
import { TextInputProps } from "react-native";

import {
    Container,
    Label,
    Content,
    Error
} from './styles';

interface Props extends TextInputProps {
    label: string;
    error: string;
}



export function InputForm({label, error, ...rest}: Props) {
    return (
        <Container>
            {label && <Label>{label}</Label>}
            <Content 
                {...rest}
            />
            {error && <Error>{error}</Error>}
        </Container>
    )
}