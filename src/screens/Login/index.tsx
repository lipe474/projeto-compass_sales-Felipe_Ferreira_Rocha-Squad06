import React from "react";

import { Header } from "@components/Header";
import { CustomInput } from "@components/Input";
import { TouchableText } from "@components/TouchableText";

import { Container, Content } from "./styles";

export function Login() {
  return (
    <Container>
      <Header title="Login" />
      <Content>
        <CustomInput label="Email" keyboardType="email-address" showIcon />
        <CustomInput label="Password" secureTextEntry={true} />
        <TouchableText label="Forgot your password?" />
      </Content>
    </Container>
  );
}
