import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
};
export function CustomButton({
  title,
  width,
  height,
  isLoading = false,
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  return (
    <>
      {isLoading ? (
        <Container
          style={{ opacity: 0.5, height: height, width: width }}
          disabled
          {...rest}
        >
          <ActivityIndicator size="small" color={COLORS.BLACK_600} />
        </Container>
      ) : (
        <Container style={{ height: height, width: width }} {...rest}>
          <Title>{title}</Title>
        </Container>
      )}
    </>
  );
}
