import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { HoshiProps } from "react-native-textinput-effects";

import {
  Container,
  SuccessIcon,
  InputContainer,
  ErrorText,
  ErrorIcon
} from "./styles";

type Props = TextInputProps &
  HoshiProps & {
    label: string;
    showIcon?: boolean;
    errorMessage?: string | null;
    formSubmitted?: boolean;
  };

export function CustomInput({
  label,
  showIcon,
  onChangeText,
  value,
  errorMessage,
  formSubmitted,
  ...rest
}: Props) {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value && value.trim() !== "";

  const labelStyle = {
    fontSize: isFocused || hasValue ? FONT_SIZE.XS : FONT_SIZE.SM,
    fontFamily:
      isFocused || hasValue ? FONT_FAMILY.REGULAR : FONT_FAMILY.MEDIUM,
    top: isFocused || hasValue ? 10 : -2
  };

  const labelStyleError = {
    color: errorMessage ? COLORS.RED_100 : COLORS.GRAY_300,
    ...labelStyle
  };

  return (
    <>
      <Container>
        {errorMessage ? (
          <InputContainer
            label={label}
            labelStyle={labelStyleError}
            style={{
              borderColor: "red"
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={onChangeText}
            value={value}
            {...rest}
          />
        ) : (
          <InputContainer
            label={label}
            labelStyle={labelStyle}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={onChangeText}
            value={value}
            {...rest}
          />
        )}
        {formSubmitted && !errorMessage && hasValue && showIcon ? (
          <SuccessIcon />
        ) : (
          errorMessage && showIcon && <ErrorIcon />
        )}
      </Container>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
}
