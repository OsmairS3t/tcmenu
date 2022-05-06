import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(35)}px;
  background-color: ${({ theme }) => theme.colors.primary2};
  align-items: center;
  z-index: 2;
`;

export const Logo = styled(Image)`
  position: absolute;
  top: ${RFValue(163)}px;
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  z-index: 10;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: ${RFValue(490)}px;
  padding-bottom: ${RFValue(50)}px;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
`;

