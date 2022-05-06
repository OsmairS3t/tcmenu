import { TouchableOpacity } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(8)}px;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.background};
`;
