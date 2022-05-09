import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const TitleButton = styled.Text``;

export const HeaderPage = styled.View`
    width: 100%;
    padding: 5px 20px;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const Texto = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;
