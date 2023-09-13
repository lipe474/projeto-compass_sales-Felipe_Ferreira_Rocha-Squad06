import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { HoshiProps } from "react-native-textinput-effects";

import { Container, SuccessIcon, InputContainer } from "./styles";
import { set } from "react-hook-form";

type Props = TextInputProps &
  HoshiProps & {
    label: string;
    showIcon?: boolean;
    errorMessage?: string | null;
  };

export function CustomInput({
  label,
  showIcon,
  onChangeText,
  value,
  ...rest
}: Props) {
  const { FONT_SIZE, FONT_FAMILY } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value && value.trim() !== "";

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelStyle = {
    fontSize: isFocused || hasValue ? FONT_SIZE.XS : FONT_SIZE.SM,
    fontFamily:
      isFocused || hasValue ? FONT_FAMILY.REGULAR : FONT_FAMILY.MEDIUM,
    top: isFocused || hasValue ? 10 : 0
  };

  return (
    <Container>
      <InputContainer
        label={label}
        labelStyle={labelStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        value={value}
        {...rest}
      />
      {showIcon && <SuccessIcon />}
    </Container>
  );
}
