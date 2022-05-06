import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(35)}px;
  background-color: ${({ theme }) => theme.colors.primary2};
  align-items: center;
`;

export const Logo = styled(Image)`
  position: relative;
  /* top: ${RFValue(163)}px;
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px; */
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: ${RFPercentage(65)}px;
  padding-bottom: ${RFValue(10)}px;
  justify-content: flex-end;
  align-items: center;
`;

