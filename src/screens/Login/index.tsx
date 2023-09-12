import React from "react";

import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";
import { CustomButton } from "@components/Button";
import { TouchableText } from "@components/TouchableText";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import {
  Container,
  ContentHeader,
  ContentButtons,
  ContentInputs,
  ContentFooter,
  Title,
  ContentFooterButtons,
  ContentRegister,
  ContentButtonLogin
} from "./styles";
import { FooterButtons } from "@components/FooterButtons";

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleForgotPassword() {
    console.log("Forgot password");
  }

  function handleCreateAccount() {
    navigation.navigate("signUp");
  }

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
        <ContentButtonLogin>
          <TouchableText
            label="Forgot your password?"
            icon
            onPress={handleForgotPassword}
          />
          <CustomButton title="LOGIN" />
        </ContentButtonLogin>

        <ContentRegister>
          <Title>Not registered? </Title>
          <TouchableText
            label="Create your account here!"
            onPress={handleCreateAccount}
          />
        </ContentRegister>
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
