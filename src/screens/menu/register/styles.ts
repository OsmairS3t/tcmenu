import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonSend } from '../../../components/Form/Button';

export const Container = styled.ScrollView``;

export const TitleButton = styled.Text``;

export const Form = styled.View`
    width: 100%;
    padding: 0px 20px;
    margin-bottom: ${RFValue(20)}px;
`;

export const Field = styled.View`
`;

export const Upload = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
`;

export const PickImageButton = styled(ButtonSend)`
    max-width: 90px;
    margin-left: 32px;
`;

