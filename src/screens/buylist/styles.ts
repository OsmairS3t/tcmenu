import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ListItemProps {
    isClicked: boolean;
}

export const Container = styled.View``;

export const Title = styled.Text``;

export const ListItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
`;
    
export const TextListItem = styled.Text<ListItemProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    text-decoration: ${({ isClicked }) => !isClicked ? 'line-through' : 'none'};
`;
    
export const IconListBlockItem = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;

export const IconListItem = styled<any>(Feather)`
    color: ${({ theme }) => theme.colors.background};
`;
