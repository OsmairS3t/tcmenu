import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
    padding: 5px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
`;

export const TitlePage = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;

export const RegisterButton = styled.TouchableOpacity`
    padding: 0px;
`;

export const TitleButton = styled.Text`
    padding: 5px 10px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.success};
`;

export const IconButton = styled<any>(Feather)`
    width: 20px;
    height: 20px;
`;

