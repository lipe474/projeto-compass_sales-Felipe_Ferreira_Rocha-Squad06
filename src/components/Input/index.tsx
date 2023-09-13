import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { HoshiProps } from "react-native-textinput-effects";

import { Container, SuccessIcon, InputContainer } from "./styles";

type Props = TextInputProps &
  HoshiProps & {
    label: string;
    showIcon?: boolean;
    errorMessage?: string | null;
  };

export function CustomInput({ label, showIcon, ...rest }: Props) {
  const { FONT_SIZE, FONT_FAMILY } = useTheme();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (text: string) => {
    setInputValue(text);
  };

  const labelStyle = {
    fontSize: isFocused || inputValue ? FONT_SIZE.XS : FONT_SIZE.SM,
    fontFamily:
      isFocused || inputValue ? FONT_FAMILY.REGULAR : FONT_FAMILY.MEDIUM,
    top: isFocused || inputValue ? 10 : 0
  };

  return (
    <Container>
      <InputContainer
        label={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        labelStyle={labelStyle}
        {...rest}
      />
      {showIcon && <SuccessIcon />}
    </Container>
  );
}
