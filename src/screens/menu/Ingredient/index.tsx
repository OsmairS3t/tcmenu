import React from 'react';
import { HeaderPage } from '../../../components/headerPage';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from './styles';
import { Field, Form } from '../register/styles';
import { InputForm } from '../../../components/Form/InputForm';
import { ButtonSend } from '../../../components/Form/Button';
import { Header } from '../../../components/header';

interface Props {
    isOpen: boolean;
    CloseModal: () => void;
}

export interface IngredientProps {
    name: string;
    price: string;
    amount: number;
}

const schema = Yup.object().shape({
    name: Yup.string().required('O nome do ingrediente é necessário'),
    amount: Yup.number().required('A quantidade é necessária.')
});

export function Ingredient({ isOpen, CloseModal }: Props) {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<IngredientProps>({
        resolver: yupResolver(schema)
    });

    function handleSubmitAddIngredient(data: IngredientProps) {
        console.log(data);
        reset();
    }

    return (
        <Container>
            <Header title="Menu" />

            <HeaderPage
                titlePage='Cadastrar Ingrediente:'
                iconButton="corner-up-left"
                onPress={CloseModal}
            />
            <Form>
                <Field>
                    <InputForm
                        label='Nome:'
                        name="name"
                        control={control}
                        error={errors.name && errors.name.message}
                    />
                </Field>
                <Field>
                    <InputForm
                        label='Valor:'
                        name="price"
                        control={control}
                        keyboardType='numeric'
                    />
                </Field>
                <Field>
                    <InputForm
                        label='Quantidade:'
                        name="amount"
                        control={control}
                        error={errors.amount && errors.amount.message}
                        keyboardType='numeric'
                    />
                </Field>
                <ButtonSend
                    title='Cadastrar'
                    onPress={handleSubmit(handleSubmitAddIngredient)}
                />
            </Form>
        </Container>
    )
}
