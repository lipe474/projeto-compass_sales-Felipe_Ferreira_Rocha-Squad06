import React from "react";
import { Container, Box, Content, Icon } from "./styles";
import { ImageSourcePropType } from "react-native";

type Props = {
  icon?: boolean;
  label: string;
  onPress?: () => void;
  source?: ImageSourcePropType;
};
export function TouchableText({ label, icon = false, onPress, source }: Props) {
  return (
    <Container onPress={onPress}>
      <Box>
        <Content>{label}</Content>
        {icon && <Icon source={source!} />}
      </Box>
    </Container>
  );
}
