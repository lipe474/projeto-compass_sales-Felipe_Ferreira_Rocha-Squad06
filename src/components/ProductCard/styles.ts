import styled from "styled-components/native";

export const Container = styled.View`
  min-height: 266px;
  max-height: 266px;
  min-width: 148px;
  max-width: 148px;
  background-color: transparent;
  margin-right: 16px;
`;

export const ContainerImageBackground = styled.Image`
  min-height: 184px;
  max-height: 184px;
  min-width: 148px;
  max-width: 148px;
  border-radius: 5px;
`;

export const ContainerTagNew = styled.View`
  position: absolute;
  min-height: 24px;
  max-height: 24px;
  min-width: 40px;
  max-width: 40px;
  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  border-radius: 20px;
  justify-content: center;
  align-items: center;

  top: 8px;
  left: 8px;
`;

export const TagNewText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-transform: uppercase;
`;
