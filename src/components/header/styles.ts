import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(80)}px;
    background-color: ${({theme})=>theme.colors.primary2};
    justify-content: flex-end;
    align-items: center;
    padding-bottom: ${RFValue(15)}px;
`;
    
export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.background};
`;

export const Exit = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: transparent;
`;

export const Icon = styled<any>(Feather)`
    color: ${({theme})=>theme.colors.background};
`;