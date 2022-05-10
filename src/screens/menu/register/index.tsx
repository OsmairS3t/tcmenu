import React from "react";
import { TouchableOpacity } from "react-native";
import { Header } from "../../../components/header";
import { useForm } from 'react-hook-form';

import { 
    Container, 
    TitleButton, 
    HeaderPage, 
    Icon,
    Form,
    Field
} from './styles';

interface Props {
    isOpen: boolean;
    CloseModal: () => void;
}
export function RegisterMenu({isOpen, CloseModal}: Props) {
    const { register, handleSubmit, formState:{errors}} = useForm();

    return (
        <Container>
            <Header title="Cadastrar Menu" />
            <HeaderPage>
                <TouchableOpacity onPress={CloseModal}>
                    <TitleButton><Icon name='arrow-left' size={20} /></TitleButton>
                </TouchableOpacity>
            </HeaderPage>

        </Container>
    )
}