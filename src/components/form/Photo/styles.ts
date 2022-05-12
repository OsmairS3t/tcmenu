import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Image = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
`;

export const Placeholder = styled.View`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
    border: 1px dashed ${({ theme }) => theme.colors.text};
    align-items: center;
    justify-content: center;
`;

export const PlaceholderTitle = styled.Text`
    font-style: italic; 
    text-align: center;
    font-size: ${RFValue(12)}px;
`;
