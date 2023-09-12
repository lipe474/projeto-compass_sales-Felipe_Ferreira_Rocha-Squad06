import React from "react";

import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";
import { CustomButton } from "@components/Button";
import { TouchableText } from "@components/TouchableText";

import {
  Container,
  ContentHeader,
  ContentButtons,
  ContentInputs,
  ContentFooter,
  Title,
  ContentFooterButtons
} from "./styles";
import { FooterButtons } from "@components/FooterButtons";

export function Login() {
  return (
    <Container>
      <ContentHeader>
        <Header title="Login" />
      </ContentHeader>
      <ContentInputs>
        <CustomInput label="Email" keyboardType="email-address" showIcon />
        <CustomInput label="Password" secureTextEntry={true} />
      </ContentInputs>
      <ContentButtons>
        <TouchableText label="Forgot your password?" />
        <CustomButton title="LOGIN" />
      </ContentButtons>
      <ContentFooter>
        <Title>Or login with social account</Title>
        <ContentFooterButtons>
          <FooterButtons icon="google" />
          <FooterButtons icon="facebook" />
        </ContentFooterButtons>
      </ContentFooter>
    </Container>
  );
}
