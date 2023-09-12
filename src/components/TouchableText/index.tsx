import React from "react";
import { Container, Box, Content, Icon } from "./styles";

type Props = {
  label: string;
};
export function TouchableText({ label }: Props) {
  return (
    <Container>
      <Box>
        <Content>{label}</Content>
        <Icon />
      </Box>
    </Container>
  );
}
