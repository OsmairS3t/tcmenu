import React, { useState } from "react";
import { TouchableOpacity, Modal, FlatList } from "react-native";
import { Header } from "../../components/header";
import { RegisterMenu } from './register'


import {
    Container,
    TitleButton,
    HeaderPage,
    Texto
} from './styles';

interface MenuProps {
    id: number;
    name: string;
}

export function Menu() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [valores, setValores] = useState<MenuProps[]>([
        {id: 1, name: 'Creme bulet'},
        {id: 2, name: 'Lyon'},
        {id: 3, name: 'Batata Frita'},
        {id: 4, name: 'Crepe Salgado'}
    ]);
    
    function OpenRegisterMenu() {
        setIsOpenModal(true);
    }

    function CloseRegisterMenu() {
        setIsOpenModal(false);
    }

    return (
        <Container>
            <Header title="Menu" />
            <HeaderPage>
                <TouchableOpacity onPress={OpenRegisterMenu}>
                    <TitleButton>Cadastrar</TitleButton>
                </TouchableOpacity>
            </HeaderPage>
            <FlatList 
                data={valores}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Texto>{item.name}</Texto>
                )}
            />
            <Modal visible={isOpenModal}>
                <RegisterMenu
                    isOpen={isOpenModal}
                    CloseModal={CloseRegisterMenu}
                />
            </Modal>
        </Container>
    )
}