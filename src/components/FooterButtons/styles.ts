import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const ContainerIcon = styled(TouchableOpacity)`
  min-height: 64px;
  max-height: 64px;
  min-width: 92px;
  max-width: 92px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  elevation: 1;
`;

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BLACK_700
}))``;
