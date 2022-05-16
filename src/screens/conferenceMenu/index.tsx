import React, { useState } from "react";
import { FlatList, Modal } from "react-native"; 
import { Header } from "../../components/Header";
import { ItemConference } from "../../components/ItemConference";
import { ConfigMenu } from "./ConfigMenu";
import { ingredient } from '../../utils/data';

import {
    Container,
    BlockConfig,
    ButtonConfig,
    TextConfig,
    Config
} from './styles';

export function ConferenceMenu() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModalConfig() {
        setIsOpen(true);
    }

    function handleCloseModalConfig() {
        setIsOpen(false);
    }

    return (
        <Container>
            <Header title="Conferência do Menu" />
            <BlockConfig>
                <ButtonConfig onPress={handleOpenModalConfig}>
                    <TextConfig>Configurar</TextConfig>
                    <Config name="settings" size={20} />
                </ButtonConfig>
            </BlockConfig>

            <FlatList 
                data={ingredient}
                style={{ paddingHorizontal:20, width: '100%' }}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <ItemConference 
                        amountNecessary={item.amount}
                        amountStock={item.amountnecessary}
                    />
                )}
            />
            
            <Modal visible={isOpen}>
                <ConfigMenu CloseModal={handleCloseModalConfig} />
            </Modal>
        </Container>
    )
}