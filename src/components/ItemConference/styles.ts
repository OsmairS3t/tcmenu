import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';


interface Props{
    amountNecessary: number;
    amountStock: number;
    isNecessary: boolean;
}

export const Container = styled.View<Props>`
    padding: 0px 20px;
    height: ${RFValue(80)}px;
    padding: 10px;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme, amountStock, amountNecessary, isNecessary }) => 
        (amountStock >= amountNecessary) ? 
          theme.colors.backgroundSuccess : 
          theme.colors.backgroundAttention};
`;

export const Title = styled.Text`
    width: 100%;
    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.regular};
`;
    
export const GroupButtonStatus = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonIdeal = styled.TouchableOpacity``;

export const DescriptionAmount = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    text-decoration: underline;
`;

export const ButtonsAction = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Buttons = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    margin: 5px;
    border:1px solid gray;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-left: ${RFValue(15)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const IconButtonPlus = styled<any>(Feather)`
    color: ${({ theme }) => theme.colors.background};
`;

export const IconButtonLess = styled<any>(Feather)`
    color: ${({ theme }) => theme.colors.background};
`;

