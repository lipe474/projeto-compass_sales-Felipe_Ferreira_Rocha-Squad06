import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};
export function CustomButton({ title, isLoading = false, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <>
      {isLoading ? (
        <Container style={{ opacity: 0.5 }} disabled {...rest}>
          <ActivityIndicator size="small" color={COLORS.BLACK_600} />
        </Container>
      ) : (
        <Container {...rest}>
          <Title>{title}</Title>
        </Container>
      )}
    </>
  );
}
