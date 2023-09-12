import React from "react";
import { Container, Box, Content, Icon } from "./styles";

type Props = {
  icon?: boolean;
  label: string;
  onPress?: () => void;
};
export function TouchableText({ label, icon = false, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Box>
        <Content>{label}</Content>
        {icon && <Icon />}
      </Box>
    </Container>
  );
}
