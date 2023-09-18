import React from "react";
import { Container, Box, Content, Icon } from "./styles";
import { ImageSourcePropType, StyleProp, TextStyle } from "react-native";

type Props = {
  icon?: boolean;
  label: string;
  onPress?: () => void;
  source?: ImageSourcePropType;
  emphasis?: boolean;
};
export function TouchableText({
  label,
  icon = false,
  onPress,
  source,
  emphasis
}: Props) {
  const styleEmphasis: StyleProp<TextStyle> = emphasis
    ? { textDecorationLine: "underline" }
    : {};

  return (
    <Container onPress={onPress}>
      <Box>
        <Content style={styleEmphasis}>{label}</Content>
        {icon && <Icon source={source!} />}
      </Box>
    </Container>
  );
}
