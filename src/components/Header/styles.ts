import styled, { css } from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  height: 104px;
  margin-bottom: 62px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
  text-align: center;
  padding-top: 18px;
  padding-left: 14px;
  padding-bottom: 2px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  width: 44px;
  height: 44px;
`;

export const Spacer = styled.View`
  height: 44px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.BLACK_700
}))``;
