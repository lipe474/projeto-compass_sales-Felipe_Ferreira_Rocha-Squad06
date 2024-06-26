import React, { useState } from "react";

import { useTheme } from "styled-components/native";

import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

import { CreateUser } from "@requests/index";
import { signUpSchema } from "@utils/validation/schemaCreateUser";
import { UserDTO } from "@dtos/UserDTO";
import { FormCreateUserDTO } from "@dtos/FormCreateUserDTO";

import { AuthProps } from "@routes/auth.routes";

import Toast from "react-native-root-toast";
import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";
import { TouchableText } from "@components/TouchableText";
import { CustomButton } from "@components/Button";
import { FooterButtons } from "@components/FooterButtons";

import {
  Container,
  ContentButtons,
  ContentFooter,
  ContentFooterButtons,
  ContentHeader,
  ContentInputs,
  ContentReturnLogin,
  Title
} from "./styles";

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const navigation = useNavigation<AuthProps>();
  const { COLORS } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormCreateUserDTO>({
    resolver: yupResolver(signUpSchema)
  });

  function handleGoBack() {
    navigation.goBack();
    setEmailErrorMessage("");
  }

  function handleGoToLogin() {
    navigation.navigate("login");
    setEmailErrorMessage("");
  }

  async function handleCreateAccount({
    displayName,
    email,
    password
  }: UserDTO) {
    try {
      setIsLoading(true);
      await CreateUser({ displayName, email, password });

      Toast.show("User created successfully.", {
        duration: 3000,
        position: 30,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });

      navigation.navigate("login");

      setIsLoading(false);
    } catch (error: any) {
      let message = error.message;

      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        message = "Email already in use, try another one";
        setEmailErrorMessage(message);
      } else {
        message =
          "Error creating account, check email and password fields and try again";

        Toast.show(message, {
          duration: 3000,
          position: 30,
          backgroundColor: COLORS.RED_200,
          textColor: COLORS.WHITE
        });
      }

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <ContentHeader>
        <Header title="Sign up" showBackButton onPress={handleGoBack} />
      </ContentHeader>

      <ContentInputs>
        <Controller
          control={control}
          name="displayName"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Name"
              keyboardType="default"
              autoCapitalize="words"
              showIcon
              formSubmitted={isSubmitSuccessful}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.displayName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              showIcon
              formSubmitted={isSubmitSuccessful}
              onChangeText={onChange}
              value={value}
              onChange={() => {
                errors.email?.message ?? setEmailErrorMessage("");
              }}
              errorMessage={errors.email?.message ?? emailErrorMessage ?? ""}
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
              showIcon
              formSubmitted={isSubmitSuccessful}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Confirm password"
              secureTextEntry
              showIcon
              formSubmitted={isSubmitSuccessful}
              onChangeText={onChange}
              value={value}
              returnKeyType="none"
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />
      </ContentInputs>

      <ContentButtons>
        <ContentReturnLogin>
          <TouchableText
            label="Already have an account?"
            icon
            source={require("@assets/icons/arrow-right.png")}
            onPress={handleGoToLogin}
          />
        </ContentReturnLogin>

        <CustomButton
          title="SIGN UP"
          onPress={handleSubmit(handleCreateAccount)}
          isLoading={isLoading}
          onPressOut={() => setIsSubmitSuccessful(true)}
          height={48}
        />
      </ContentButtons>

      <ContentFooter>
        <Title>Or sign up with social account</Title>

        <ContentFooterButtons>
          <FooterButtons source={require("@assets/icons/google.png")} />
          <FooterButtons source={require("@assets/icons/facebook.png")} />
        </ContentFooterButtons>
      </ContentFooter>
    </Container>
  );
}
