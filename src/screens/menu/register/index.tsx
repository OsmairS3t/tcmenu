import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Modal } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Header } from "../../../components/Header";
import { HeaderPage } from "../../../components/HeaderPage";

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputForm } from '../../../components/Form/InputForm';
import { ButtonSend } from "../../../components/Form/Button";

import {
    Container,
    Form,
    Fields,
    Field,
    Upload, 
    PickImageButton
} from './styles';
import { Photo } from "../../../components/Form/Photo";

import { Ingredient } from '../../../screens/menu/Ingredient'
import { IngredientProps } from '../Ingredient'
import { SelectIngredient } from "../../../components/Form/SelectIngredient";
import { SelectIngredientButton } from "../../../components/Form/SelectIngredientButton";

interface MenuProps {
    name: string;
    price: number;
    timeprepare: string;
    peopleamount: number;
    ingredients: IngredientProps[];
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
    const [isOpenModalAddIngredient, setIsOpenModalAddIngredient] = useState(false);
    const [isOpenModalListIngredient, setIsOpenModalListIngredient] = useState(false);
    const [image, setImage] = useState('');
    const [ingredient, setIngredient] = useState({
        id: '', name: '', unit: '',price: 0, amountstock: 0, amountnecessary: 0
    })
    const { handleSubmit, control, formState: { errors } 
        } = useForm<MenuProps>({
            resolver: yupResolver(schema)
        });

    function handleSubmitRegisterMenu(menu: MenuProps) {
        console.log(menu);
    }

    async function handlePicherImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4,4]
            });
            if(!result.cancelled) {
                setImage(result.uri);
            }
        }
    }

    function handleOpenModalAddIngredient() {
        setIsOpenModalAddIngredient(true);
    }

    function handleCloseModalAddIngredient() {
        setIsOpenModalAddIngredient(false);
    }

    function handleOpenModalListIngredient() {
        setIsOpenModalListIngredient(true);
    }

    function handleCloseModalListIngredient() {
        setIsOpenModalListIngredient(false);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header title="Menu" />

                <HeaderPage 
                    titlePage="Cadastrar itens do Menu:"
                    iconButton="corner-up-left"
                    onPress={CloseModal}
                />
                
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
                            placeholder="0.00"
                            keyboardType="numeric"
                            autoCorrect={false}
                            error={errors.price && errors.price.message}
                        />
                    </Field>
                    <Field>
                        <InputForm
                            label="Tempo de preparo(em minutos):"
                            name="timeprepare"
                            control={control}
                            placeholder="0"
                            autoCapitalize="characters"
                            autoCorrect={false}
                            error={errors.timeprepare && errors.timeprepare.message}
                        />
                    </Field>
                    <Field>
                        <InputForm
                            label="Quantidade de Pessoas:"
                            name="peopleamount"
                            control={control}
                            placeholder="0"
                            autoCapitalize="characters"
                            autoCorrect={false}
                        />
                    </Field>
                    <Fields>
                        <Field size={290}>
                            <SelectIngredientButton 
                                title="Ingredientes..." 
                                onPress={handleOpenModalListIngredient}
                            />
                        </Field>
                        <Field size={70}>
                            <ButtonSend title="+" onPress={handleOpenModalAddIngredient} />
                        </Field>
                    </Fields>
                    <Field>
                        <Upload>
                            <Photo uri={image} />
                            <PickImageButton 
                                title="Up &uarr;" 
                                onPress={handlePicherImage} 
                            />
                        </Upload>
                    </Field>
                    <ButtonSend title="Cadastrar" onPress={handleSubmit(handleSubmitRegisterMenu)} />
                </Form>

                <Modal visible={isOpenModalListIngredient}>
                    <SelectIngredient 
                        ingredient={ingredient}
                        setIngredient={setIngredient}
                        closeListIngredient={handleCloseModalListIngredient}
                    />
                </Modal>
                <Modal visible={isOpenModalAddIngredient}>
                    <Ingredient 
                        isOpen={isOpenModalAddIngredient}
                        CloseModal={handleCloseModalAddIngredient}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}