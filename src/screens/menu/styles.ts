import { RFValue } from "react-native-responsive-fontsize";
import styled, {css} from "styled-components/native";
import { TouchableOpacity } from 'react-native';

interface ListProps{
    index: number;
}

export const Container = styled.View``;

export const HeaderPage = styled.View`
    width: 100%;
    padding: 5px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitlePage = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;

export const RegisterButton = styled.TouchableOpacity`
    padding: 5px ${RFValue(10)}px;
`;

export const TitleButton = styled.Text`
    padding: 5px 10px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.success};
`;

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
