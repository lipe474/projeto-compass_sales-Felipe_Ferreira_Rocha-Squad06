import React from "react";
import {
  Container,
  ContentButtons,
  ContentFooter,
  ContentFooterButtons,
  ContentHeader,
  ContentInputs,
  Title
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { CustomInput } from "@components/Input";
import { TouchableText } from "@components/TouchableText";
import { CustomButton } from "@components/Button";
import { FooterButtons } from "@components/FooterButtons";
import { Header } from "@components/Header";

import { auth } from "@services/FirebaseConfig";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleCreateAccount() {
    try {
    } catch (error) {}
  }

  return (
    <Container>
      <ContentHeader>
        <Header title="Sign up" showBackButton onPress={handleGoBack} />
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
        <TouchableText label="Already have an account?" icon />
        <CustomButton title="SIGN UP" />
      </ContentButtons>
      <ContentFooter>
        <Title>Or sign up with social account</Title>
        <ContentFooterButtons>
          <FooterButtons source={require("@assets/google.png")} />
          <FooterButtons source={require("@assets/facebook.png")} />
        </ContentFooterButtons>
      </ContentFooter>
    </Container>
  );
}
