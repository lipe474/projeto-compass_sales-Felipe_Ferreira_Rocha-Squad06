import {
  Container,
  ContainerImageBackground,
  ContainerTagNew,
  TagNewText
} from "./styles";

export function ProductCard() {
  return (
    <Container>
      <ContainerImageBackground
        source={require("@assets/images/image.png")}
        resizeMode="cover"
      />

      <ContainerTagNew>
        <TagNewText>New</TagNewText>
      </ContainerTagNew>
    </Container>
  );
}
