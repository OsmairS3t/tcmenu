import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface SelectIngredientProps {
    isSelected: boolean;
}

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
`;

export const Icon = styled<any>(Feather)`
    margin-right: 10px;
`;

export const IngedientName = styled.Text<SelectIngredientProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    text-decoration: ${({ isSelected }) => isSelected ? 'line-through' : 'none'}
`;