import React from 'react';
import uuid from 'react-native-uuid'
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderPage } from '../../../components/HeaderPage';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { keyIngredient } from '../../../utils/keystorage';

import { InputForm } from '../../../components/Form/InputForm';
import { ButtonSend } from '../../../components/Form/Button';
import { Header } from '../../../components/Header';

import { Fields, Field, Form } from '../register/styles';
import { Container } from './styles';
import { Alert } from 'react-native';

interface Props {
    isOpen: boolean;
    CloseModal: () => void;
}

export interface IngredientProps {
    name: string;
    price: string;
    unit: string;
    amountstock: number;
    amountnecessary: number;
}

const schema = Yup.object().shape({
    name: Yup.string().required('O nome do ingrediente é necessário'),
    amountstock: Yup.number().required('A quantidade é necessária.')
});

export function Ingredient({ isOpen, CloseModal }: Props) {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<IngredientProps>({
        resolver: yupResolver(schema)
    });

    async function handleSubmitAddIngredient(dataForm: IngredientProps) {
        const dataIngredient = {
            id: uuid.v4(),
            name: dataForm.name,
            price: dataForm.price,
            unid: dataForm.unit,
            amountstock: dataForm.amountstock,
            amountnecessary: dataForm.amountnecessary,
        }
        try {
            const dataSaved = await AsyncStorage.getItem(keyIngredient)
            const currentData = dataSaved ? JSON.parse(dataSaved) : [];
            const dataFormatted = [
                ...currentData,
                dataIngredient
            ]
            await AsyncStorage.setItem(keyIngredient, JSON.stringify(dataFormatted));
            Alert.alert('Ingrediente cadastrado com sucesso!');
            console.log(dataFormatted);
            reset();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possivel salvar');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                <Fields>
                    <Field size={250}>
                        <InputForm
                            label='Quantidade estoque:'
                            name="amountstock"
                            control={control}
                            error={errors.amountstock && errors.amountstock.message}
                            keyboardType='numeric'
                        />
                    </Field>
                    <Field size={100}>
                        <InputForm
                            label='Unidade:'
                            name="unit"
                            control={control}
                        />
                    </Field>
                </Fields>
                <Field>
                    <InputForm
                        label='Quant. Ideal:'
                        name="amountnecessary"
                        control={control}
                        keyboardType='numeric'
                    />
                </Field>
                <ButtonSend
                    title='Cadastrar'
                    onPress={handleSubmit(handleSubmitAddIngredient)}
                />
            </Form>
        </Container>
        </TouchableWithoutFeedback>
    )
}
