import { Container, Content } from "./styles";
import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";

export function Login() {
  return (
    <Container>
      <Header title="Login" />
      <Content>
        <CustomInput label="Email" keyboardType="email-address" showIcon />
        <CustomInput label="Password" secureTextEntry={true} />
      </Content>
    </Container>
  );
}
