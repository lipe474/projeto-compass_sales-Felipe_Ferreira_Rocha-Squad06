import { Check } from "phosphor-react-native";
import styled from "styled-components/native";
import { Hoshi } from "react-native-textinput-effects";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputContainer = styled(Hoshi).attrs(({ theme }) => ({
  borderHeight: 0,
  inputPadding: 20,
  maxWidth: "80%",
  inputStyle: {
    color: theme.COLORS.BLACK_600,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    bottom: 1
  }
}))`
  flex: 1;

  min-height: 64px;
  max-height: 64px;

  border-color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  text-align: left;
  justify-content: flex-start;

  max-width: 100%;

  border-radius: 6px;

  elevation: 1;
`;

export const SuccessIcon = styled(Check).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.GREEN,
  weight: "bold"
}))`
  position: absolute;
  right: 20px;
`;
