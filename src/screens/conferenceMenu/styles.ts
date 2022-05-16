import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BlockConfig = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary2};
`;

export const ButtonConfig = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 20px;
`;

export const TextConfig = styled.Text`
  margin-right: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background};
`;

export const Config = styled<any>(Feather)`
  color: ${({ theme }) => theme.colors.background};
`;

export const ModalConfig = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
`;
