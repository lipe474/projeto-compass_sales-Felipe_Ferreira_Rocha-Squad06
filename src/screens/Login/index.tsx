import React, { useState } from "react";

import { Controller, useForm } from "react-hook-form";

import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";
import { CustomButton } from "@components/Button";
import { TouchableText } from "@components/TouchableText";
import { FooterButtons } from "@components/FooterButtons";

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
import { LoginUser } from "@requests/index";

type FormData = {
  email: string;
  password: string;
};

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  async function handleLogin({ email, password }: FormData) {
    try {
      setIsLoading(true);

      const response = await LoginUser(email, password);
      // const response = await createUserWithEmailAndPassword(auth, email, password);

      reset({ email: "", password: "" });

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

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
