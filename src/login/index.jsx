import React from "react";
import { TouchableOpacity } from "react-native";
import {Container, Header, Logo, LoginForm, Form, TitleTab, Label, Input, Button, ButtonText, Row, LinkText, Forgot} from "./style";


export default function Login({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
      </Header>

      <LoginForm>
        <TitleTab>LOGIN</TitleTab>
        <Form>
          <Label>Email:</Label>
          <Input placeholder="Insira seu email" placeholderTextColor="#8C8C8C" />

          <Label>Senha:</Label>
          <Input placeholder="Insira sua senha" placeholderTextColor="#8C8C8C" secureTextEntry />

          <Forgot rowRight>
            <TouchableOpacity>
              <LinkText>Esqueci a senha</LinkText>
            </TouchableOpacity>
          </Forgot>

          <Row>
            <Button onPress={() => navigation.replace("ListaVeiculos")}>
              <ButtonText>Entrar</ButtonText>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
              <LinkText>Não tenho cadastro</LinkText>
            </TouchableOpacity>
          </Row>
        </Form>
      </LoginForm>
    </Container>
  );
}