import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Header, Logo, Form, TitleTab, Label, Input, Button, ButtonText } from "./style";

export default function Cadastro({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.svg")} resizeMode="contain" />
      </Header>

      <Form>
        <TitleTab>CADASTRO</TitleTab>

        <Label>Nome completo:</Label>
        <Input placeholder="Insira seu nome completo" placeholderTextColor="#8C8C8C" />

        <Label>Email:</Label>
        <Input placeholder="Insira seu email" placeholderTextColor="#8C8C8C" />

        <Label>Senha:</Label>
        <Input placeholder="Insira uma senha" placeholderTextColor="#8C8C8C" secureTextEntry />

        <Label>Confirme sua senha:</Label>
        <Input placeholder="Confirme sua senha" placeholderTextColor="#8C8C8C" secureTextEntry />

        <Button onPress={() => navigation.replace("ListaVeiculos")}>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}