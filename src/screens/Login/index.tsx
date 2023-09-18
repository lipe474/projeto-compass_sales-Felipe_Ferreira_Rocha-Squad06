import React, { useState } from "react";

import Toast from "react-native-root-toast";

import { Controller, useForm } from "react-hook-form";

import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";
import { CustomButton } from "@components/Button";
import { TouchableText } from "@components/TouchableText";
import { FooterButtons } from "@components/FooterButtons";

import { useTheme } from "styled-components/native";

import { useNavigation } from "@react-navigation/native";

import { AuthProps } from "@routes/auth.routes";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  ContentHeader,
  ContentButtons,
  ContentInputs,
  ContentFooter,
  Title,
  ContentFooterButtons,
  ContentRegister,
  ContentButtonLogin,
  ContentForgotPassword
} from "./styles";
import { LoginUser } from "@requests/index";
import { FormLoginDTO } from "@dtos/FormLoginDTO";
import { loginSchema } from "@utils/validation/schemaLogin";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(undefined);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const navigation = useNavigation<AuthProps>();
  const { COLORS } = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormLoginDTO>({
    resolver: yupResolver(loginSchema)
  });

  async function handleLogin({ email, password }: FormLoginDTO) {
    try {
      setIsLoading(true);

      await LoginUser(email, password);

      reset({ email: "", password: "" });

      setIsLoading(false);
      setIsSubmitSuccessful(true);
    } catch (error: any) {
      let message = error.message;

      if (error.message === "Firebase: Error (auth/user-not-found).") {
        message = "This email is not registered";
        setEmailErrorMessage(message);
      } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        message = "Your password is incorrect";
        setPasswordErrorMessage(message);
      } else {
        message = "Error logging in, check your email and password";
      }

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  function handleForgotPassword() {
    navigation.navigate("forgotPassword");
    setEmailErrorMessage(undefined);
    setPasswordErrorMessage("");
    reset({ email: "", password: "" });
  }

  function handleNavigateToCreateAccount() {
    navigation.navigate("signUp");
    setEmailErrorMessage(undefined);
    setPasswordErrorMessage("");
    reset({ email: "", password: "" });
  }

  return (
    <Container>
      <ContentHeader>
        <Header title="Login" />
      </ContentHeader>

      <ContentInputs>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="done"
              formSubmitted={isSubmitSuccessful}
              showIcon
              value={value}
              onChangeText={onChange}
              onChange={() => {
                errors.email?.message ?? setEmailErrorMessage(undefined);
              }}
              errorMessage={
                errors.email?.message
                  ? errors.email?.message
                  : emailErrorMessage
                  ? emailErrorMessage
                  : ""
              }
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Password"
              secureTextEntry
              returnKeyType="none"
              value={value}
              formSubmitted={isSubmitSuccessful}
              showIcon
              onChangeText={onChange}
              onChange={() => {
                errors.password?.message ?? setPasswordErrorMessage("");
              }}
              errorMessage={
                errors.password?.message
                  ? errors.password?.message
                  : passwordErrorMessage
                  ? passwordErrorMessage
                  : ""
              }
            />
          )}
        />
      </ContentInputs>

      <ContentButtons>
        <ContentButtonLogin>
          <ContentForgotPassword>
            <TouchableText
              label="Forgot your password?"
              icon
              onPress={handleForgotPassword}
              source={require("@assets/icons/arrow-right.png")}
            />
          </ContentForgotPassword>
          <CustomButton
            title="LOGIN"
            onPress={handleSubmit(handleLogin)}
            isLoading={isLoading}
            onPressOut={() => setIsSubmitSuccessful(true)}
            height={48}
          />
        </ContentButtonLogin>

        <ContentRegister>
          <Title>Not registered? </Title>
          <TouchableText
            label="Create your account here!"
            onPress={handleNavigateToCreateAccount}
            emphasis
          />
        </ContentRegister>
      </ContentButtons>

      <ContentFooter>
        <Title>Or login with social account</Title>

        <ContentFooterButtons>
          <FooterButtons source={require("@assets/icons/google.png")} />
          <FooterButtons source={require("@assets/icons/facebook.png")} />
        </ContentFooterButtons>
      </ContentFooter>
    </Container>
  );
}
