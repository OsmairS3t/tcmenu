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
    const [image, setImage] = useState('');
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
                            <InputForm
                                label="Ingredientes:"
                                name="ingredients"
                                control={control}
                                placeholder="..."
                                autoCapitalize="characters"
                                autoCorrect={false}
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

                <Modal visible={isOpenModalAddIngredient}>
                    <SelectIngredient />
                    {/* <Ingredient 
                        isOpen={isOpenModalAddIngredient}
                        CloseModal={handleCloseModalAddIngredient}
                    /> */}
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}