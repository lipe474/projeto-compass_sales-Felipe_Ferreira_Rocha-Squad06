import { BackButton, BackIcon, Container, Spacer, Title } from "./styles";

type Props = {
  title: string;
  showBackButton?: boolean;
};

export function Header({ title, showBackButton = false }: Props) {
  function handleGoBack() {
    console.log("handleGoBack");
  }

  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      ) : (
        <Spacer />
      )}

      <Title>{title}</Title>
    </Container>
  );
}
