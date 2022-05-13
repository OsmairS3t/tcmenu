import React from "react";
import { Header } from "../../components/header";
import { ItemConference } from "../../components/ItemConference";
import {
    Container
} from './styles';

export function ConferenceMenu() {
    return (
        <Container>
            <Header title="Conferência do Menu" />
            <ItemConference />
        </Container>
    )
}