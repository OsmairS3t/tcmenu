import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Header } from "../../../components/header";

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputForm } from '../../../components/Form/InputForm';
import { ButtonSend } from "../../../components/Form/Button";

import {
    Container,
    TitleButton,
    HeaderPage,
    TitlePage,
    Icon,
    Form,
    Field
} from './styles';
import { ImageView } from "../../../components/Form/ImageView";

type Ingredient = {
    id: string;
    productname: string;
    description: string;
}

interface MenuProps {
    name: string;
    price: number;
    timeprepare: string;
    peopleamount: number;
    ingredients: Ingredient[];
}

interface Props {
    isOpen: boolean;
    CloseModal: () => void;
}

const schema = Yup.object().shape({
    name: Yup.string().required('O nome do prato deve ser informado'),
    price: Yup.number().required('O valor do prato é necessário'),
    timeprepare: Yup.string().required('O tempo de preparo é necessário')
})

export function RegisterMenu({ isOpen, CloseModal }: Props) {
    const {
        handleSubmit,
        control,
        formState: { errors } } = useForm<MenuProps>({
            resolver: yupResolver(schema)
        });

    function handleSubmitRegisterMenu(menu: MenuProps) {
        console.log(menu);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header title="Menu" />

                <HeaderPage>
                    <TitlePage>Cadastrar itens do Menu:</TitlePage>
                    <TouchableOpacity onPress={CloseModal}>
                        <TitleButton><Icon name='corner-up-left' size={20} /></TitleButton>
                    </TouchableOpacity>
                </HeaderPage>
                <Form>
                    <Field>
                        <InputForm
                            label="Nome do prato:"
                            name="name"
                            control={control}
                            placeholder="Crepe..."
                            autoCapitalize="characters"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                    </Field>
                    <Field>
                        <InputForm
                            label="Valor:"
                            name="price"
                            control={control}
                            placeholder="35.00"
                            keyboardType="numeric"
                            autoCorrect={false}
                            error={errors.price && errors.price.message}
                        />
                    </Field>
                    <Field>
                        <InputForm
                            label="Tempo de preparo:"
                            name="timeprepare"
                            control={control}
                            placeholder="20 minutos"
                            autoCapitalize="characters"
                            autoCorrect={false}
                            error={errors.timeprepare && errors.timeprepare.message}
                        />
                    </Field>
                    <Field>
                        <InputForm
                            label="Quant. Pessoas:"
                            name="peopleamount"
                            control={control}
                            placeholder="2 pessoas adultas"
                            autoCapitalize="characters"
                            autoCorrect={false}
                        />
                    </Field>
                    <Field>
                        <InputForm
                            label="Ingredientes:"
                            name="ingredients"
                            control={control}
                            placeholder="..."
                            autoCapitalize="characters"
                            autoCorrect={false}
                        />
                    </Field>
                    <Field>
                    <ImageView
                        label="Imagem:"
                        />
                    </Field>
                    <ButtonSend title="Cadastrar" onPress={handleSubmit(handleSubmitRegisterMenu)} />
                </Form>
            </Container>
        </TouchableWithoutFeedback>
    )
}