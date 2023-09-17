import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.RED_200};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
