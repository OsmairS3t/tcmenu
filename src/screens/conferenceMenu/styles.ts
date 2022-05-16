import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View``;

export const ButtonConfig = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 20px;
`;

export const TextConfig = styled.Text`
  margin-right: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Config = styled<any>(Feather)`
  color: ${({ theme }) => theme.colors.primary};
`;
