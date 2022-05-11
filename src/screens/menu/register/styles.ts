import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView``;

export const TitleButton = styled.Text``;

export const HeaderPage = styled.View`
    width: 100%;
    padding: 5px 20px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px 0px;
`;

export const TitlePage = styled<any>(Feather)`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled<any>(Feather)`
    width: 20px;
    height: 20px;
`;

export const Form = styled.View`
    width: 100%;
    padding: 0px 20px;
    margin-bottom: ${RFValue(20)}px;
`;

export const Field = styled.View`
`;
