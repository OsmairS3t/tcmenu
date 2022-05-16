import { RFValue } from "react-native-responsive-fontsize";
import styled, { ThemeContext } from "styled-components/native";

interface FieldProps{
    size: number;
}

export const Container = styled.View`
`;

export const Form = styled.View`
    width: 100%;
    padding: 0px 20px;
`;

export const Fields = styled.View`
    height: ${RFValue(60)}px;
    margin: 10px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
    
export const Field = styled.View<FieldProps>`
    width: ${({ size }) => size }px;
`;

export const TextLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

