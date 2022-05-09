import React from "react";
import { TouchableOpacity } from "react-native";
import { Header } from "../../../components/header";

import { Container, TitleButton, HeaderPage } from './styles';

interface Props {
    isOpen: boolean;
    CloseModal: () => void;
}
export function RegisterMenu({isOpen, CloseModal}: Props) {

    return (
        <Container>
            <Header title="Cadastrar Menu" />
            <HeaderPage>
                <TouchableOpacity onPress={CloseModal}>
                    <TitleButton>Voltar</TitleButton>
                </TouchableOpacity>
            </HeaderPage>
        </Container>
    )
}