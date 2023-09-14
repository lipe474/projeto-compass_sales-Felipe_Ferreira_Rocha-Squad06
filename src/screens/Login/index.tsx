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
import { LoginUser } from "@requests/index";
import { FormLoginDTO } from "@dtos/FormLoginDTO";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthProps>();
  const { COLORS } = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormLoginDTO>();

  async function handleLogin({ email, password }: FormLoginDTO) {
    try {
      setIsLoading(true);

      await LoginUser(email, password);

      reset({ email: "", password: "" });
    } catch (error: any) {
      const message =
        "Erro ao fazer login, verifique seu e-mail e senha." || error.message;

      setIsLoading(false);

      Toast.show(message, {
        duration: 3000,
        position: 30,
        backgroundColor: COLORS.RED_200,
        textColor: COLORS.WHITE
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleForgotPassword() {
    console.log("Forgot password");
  }

  function handleCreateAccount() {
    navigation.navigate("signUp");
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
          rules={{ required: "Informe o e-mail" }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="done"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Informe a senha" }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Password"
              secureTextEntry
              returnKeyType="send"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
      </ContentInputs>

      <ContentButtons>
        <ContentButtonLogin>
          <TouchableText
            label="Forgot your password?"
            icon
            onPress={handleForgotPassword}
            source={require("@assets/arrow-right.png")}
          />
          <CustomButton
            title="LOGIN"
            onPress={handleSubmit(handleLogin)}
            isLoading={isLoading}
          />
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
          <FooterButtons source={require("@assets/google.png")} />
          <FooterButtons source={require("@assets/facebook.png")} />
        </ContentFooterButtons>
      </ContentFooter>
    </Container>
  );
}
