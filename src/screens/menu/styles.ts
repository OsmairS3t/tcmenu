import { RFValue } from "react-native-responsive-fontsize";
import styled, {css} from "styled-components/native";

interface ListProps{
    index: number;
}

export const Container = styled.View``;

export const ListMenu = styled.View<ListProps>`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    ${({ index }) => index % 2 === 0 && css`
        background-color: ${({ theme }) => theme.colors.backgroundBlock};
    `}
`;

export const TextListMenu = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`;
