import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { forgotPasswordSchema } from "@utils/validation/schemaForgotPassword";

import { AuthProps } from "@routes/auth.routes";

import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";

import {
  Container,
  ContentButtons,
  ContentHeader,
  ContentInputs,
  ContentText,
  Subtitle
} from "./styles";
import { CustomButton } from "@components/Button";
import { SendEmailForgotPassword } from "@requests/index";
import Toast from "react-native-root-toast";
import { useTheme } from "styled-components/native";

type ForgotPasswordProps = {
  email: string;
};

export function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const navigation = useNavigation<AuthProps>();
  const { COLORS } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordProps>({
    resolver: yupResolver(forgotPasswordSchema)
  });

  async function handleSendEmailForgotPassword({ email }: ForgotPasswordProps) {
    try {
      setIsLoading(true);
      await SendEmailForgotPassword(email);

      Toast.show("Password reset email sent successfully", {
        duration: 3000,
        position: 30,
        backgroundColor: COLORS.GREEN,
        textColor: COLORS.WHITE
      });
      setIsLoading(false);
    } catch (error: any) {
      const message =
        "Error sending password reset email. Check your email and try again" ||
        error.message;

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
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ContentHeader>
        <Header title="Forgot password" showBackButton onPress={handleGoBack} />
      </ContentHeader>

      <ContentText>
        <Subtitle>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Subtitle>
      </ContentText>

      <ContentInputs>
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
              errorMessage={errors.email?.message}
            />
          )}
        />
      </ContentInputs>

      <ContentButtons>
        <CustomButton
          title="SEND"
          onPress={handleSubmit(handleSendEmailForgotPassword)}
          isLoading={isLoading}
          onPressOut={() => setIsSubmitSuccessful(true)}
          height={48}
        />
      </ContentButtons>
    </Container>
  );
}
