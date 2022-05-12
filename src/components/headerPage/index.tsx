import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";

import {
    Container,
    TitlePage,
    RegisterButton,
    TitleButton,
    IconButton
} from './styles';

interface Props {
    onPress?: ()=>void;
    titlePage?: string;
    titleButton?: string;
    iconButton?: string;
}
export function HeaderPage({titlePage, titleButton, iconButton, onPress}:Props) {
    return (
        <Container>
            <TitlePage>{titlePage}</TitlePage>
            <RegisterButton onPress={onPress}>
                {titleButton && <TitleButton>{titleButton}</TitleButton>}
                {iconButton && <IconButton name={iconButton} size={20} />}
            </RegisterButton>
        </Container>
    )
}