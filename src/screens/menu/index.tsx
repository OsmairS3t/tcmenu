import React, { useState } from "react";
import { Modal, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { RegisterMenu } from './register'
import { HeaderPage } from "../../components/HeaderPage";

import { listmenu } from '../../utils/data';

import {
    Container,
    ListMenu,
    TextListMenu 
} from './styles';


export function Menu() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const valores = [
        {id: '1', name: 'Creme bulet'},
        {id: '2', name: 'Lyon'},
        {id: '3', name: 'Batata Frita'},
        {id: '4', name: 'Crepe Salgado'}
    ]
    
    function OpenRegisterMenu() {
        setIsOpenModal(true);
    }

    function CloseRegisterMenu() {
        setIsOpenModal(false);
    }

    return (
        <Container>
            <Header title="Menu" />
            <HeaderPage 
                titlePage="Itens do menu:" 
                titleButton="Cadastrar"
                onPress={OpenRegisterMenu} 
            />
            
            <FlatList 
                data={listmenu}
                style={{ paddingHorizontal:20, width: '100%' }}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <ListMenu index={index}>
                        <TextListMenu>{item.name}</TextListMenu>
                    </ListMenu>
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