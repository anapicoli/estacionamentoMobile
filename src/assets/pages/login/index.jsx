import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Container, Header, Logo, Title, Form, Input, Button, ButtonText, LinkText} from "./style";

export default function Login() {
    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <Logo source={require("../../images/logo.svg")} resizeMode="contain" />
            </Header>

            <Form>
                <Title>LOGIN</Title>
                <Input placeholder= "Insira seu email" keyboardType="email-address" />
                <Input placeholder="Insira sua senha" secureTextEntry />
                <Button onPress={() => navigation.replace("ListaVeiculos")} >
                    <ButtonText>Entrar</ButtonText>
                </Button>
                <LinkText onPress={() => navigation.navigate("Cadastro") }>
                    Não tenho cadastro
                </LinkText>
            </Form>
        </Container>
    );
}