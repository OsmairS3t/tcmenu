import React from "react";
import { Header } from "../../components/Header";
import { HeaderPage } from "../../components/HeaderPage";
import { ItemConference } from "../../components/ItemConference";
import {
    Container,
    ButtonConfig,
    TextConfig,
    Config
} from './styles';

export function ConferenceMenu() {
    return (
        <Container>
            <Header title="Conferência do Menu" />
            <ButtonConfig>
                <Config name="settings" size={20} />
            </ButtonConfig>

            <ItemConference 
                amountNecessary={20}
                amountStock={18}
            />
        </Container>
    )
}