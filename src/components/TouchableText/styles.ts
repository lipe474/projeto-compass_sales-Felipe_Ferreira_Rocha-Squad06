import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 24px;
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK_700};
  text-align: center;
  margin-right: 3px;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
