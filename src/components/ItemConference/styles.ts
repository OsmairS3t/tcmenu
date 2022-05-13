import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    padding: 0px 20px;
    height: ${RFValue(80)}px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.foreGroundPrimary};
`;

export const Information = styled.View`
    flex: 1;
    justify-content: space-around;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    `;
    
export const DescriptionAmount = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme})=>theme.fonts.regular};
`;

export const GroupButtonStatus = styled.View`
    justify-content: space-between;
`;

export const ButtonStatus = styled.View`
    width: 120px;
    height: ${RFValue(30)}px;
    padding: 5px;
    border-radius: 8px;
    background-color: ${({theme})=>theme.colors.secondary};
    align-items: center;
    justify-content: center;
`;

export const TextButtonStatus = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ButtonsAction = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Buttons = styled.View`
    width: 30px;
    height: 30px;
    border:1px solid gray;
    border-radius: 2px;
`;
