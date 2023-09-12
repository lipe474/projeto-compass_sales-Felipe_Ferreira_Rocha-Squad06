import { Header } from "@components/Header";
import {
  Container,
  ContentButtons,
  ContentFooter,
  ContentFooterButtons,
  ContentHeader,
  ContentInputs,
  Title
} from "./styles";
import { CustomInput } from "@components/Input";
import { TouchableText } from "@components/TouchableText";
import { CustomButton } from "@components/Button";
import { FooterButtons } from "@components/FooterButtons";

export function SignUp() {
  return (
    <Container>
      <ContentHeader>
        <Header title="Sign up" showBackButton />
      </ContentHeader>
      <ContentInputs>
        <CustomInput
          label="Name"
          keyboardType="default"
          autoCapitalize="words"
          showIcon
        />
        <CustomInput
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CustomInput label="Password" secureTextEntry={true} />
      </ContentInputs>
      <ContentButtons>
        <TouchableText label="Already have an account?" />
        <CustomButton title="SIGN UP" />
      </ContentButtons>
      <ContentFooter>
        <Title>Or sign up with social account</Title>
        <ContentFooterButtons>
          <FooterButtons icon="google" />
          <FooterButtons icon="facebook" />
        </ContentFooterButtons>
      </ContentFooter>
    </Container>
  );
}
