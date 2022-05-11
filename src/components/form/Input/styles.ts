import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px;
  font-size: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.backgroundBlock};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 10px;
`;
