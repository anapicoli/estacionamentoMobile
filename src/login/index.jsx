import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {Container, Header, Logo, Form, TitleTab, Label, Input, Button, ButtonText, Row, LinkText} from "./style";

export default function Login({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.svg")} resizeMode="contain" />
      </Header>

      <Form>
        <TitleTab>LOGIN</TitleTab>

        <Label>Email:</Label>
        <Input placeholder="Insira seu email" placeholderTextColor="#8C8C8C" />

        <Label>Senha:</Label>
        <Input placeholder="Insira sua senha" placeholderTextColor="#8C8C8C" secureTextEntry />

        <Row rowRight>
          <TouchableOpacity>
            <LinkText>Esqueci a senha</LinkText>
          </TouchableOpacity>
        </Row>

        <Button onPress={() => navigation.replace("ListaVeiculos")}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <Row>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <LinkText>Não tenho cadastro</LinkText>
          </TouchableOpacity>
        </Row>
      </Form>
    </Container>
  );
}