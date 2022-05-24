import React, { useState } from "react";
import { FlatList, Modal } from "react-native"; 
import { Header } from "../../components/Header";
import { ItemConference } from "../../components/ItemConference";
import { ConfigMenu } from "./ConfigMenu";
import { ingredient } from '../../utils/data';

import {
    Container,
} from './styles';

export function ConferenceMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [idMenu, setIdMenu] = useState("");

    function handleCloseModalConfig() {
        setIsOpen(false);
    }

    function handleEditItem(id: string){
        setIdMenu(id);
        setIsOpen(true);
    }

    return (
        <Container>
            <Header title="Conferência do Menu" />

            <FlatList 
                data={ingredient}
                style={{ paddingHorizontal:20, width: '100%' }}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <ItemConference 
                        itemName={item.name}
                        amountNecessary={item.amountstock}
                        amountStock={item.amountnecessary}
                        onPress={() => handleEditItem(item.id)}
                    />
                )}
            />
            
            <Modal visible={isOpen}>
                <ConfigMenu idMenu={idMenu} CloseModal={handleCloseModalConfig} />
            </Modal>
        </Container>
    )
}