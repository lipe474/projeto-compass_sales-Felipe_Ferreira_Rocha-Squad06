import React from "react";
import { BackButton, BackIcon, Container, Spacer, Title } from "./styles";

type Props = {
  title: string;
  showBackButton?: boolean;
  onPress?: () => void;
};

export function Header({ title, showBackButton = false, onPress }: Props) {
  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={onPress}>
          <BackIcon />
        </BackButton>
      ) : (
        <Spacer />
      )}

      <Title>{title}</Title>
    </Container>
  );
}
