import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
    border: 1px dashed ${({ theme }) => theme.colors.text};
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    text-align: center;
    font-style: italic; 
`;

export const Label = styled.Text`
    margin: 5px 0px;
`;
