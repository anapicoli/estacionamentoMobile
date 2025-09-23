import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Header, Logo, Form, TitleTab, Label, Input, Button, ButtonText } from "./style";

export default function RegistrarEntrada({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.svg")} resizeMode="contain" />
      </Header>

      <Form>
        <TitleTab>ENTRADA</TitleTab>

        <Label>Placa:</Label>
        <Input placeholder="Insira a placa do veículo" placeholderTextColor="#8C8C8C" />

        <Label>Horário:</Label>
        <Input placeholder="Insira o horário de entrada do veículo" placeholderTextColor="#8C8C8C" />

        <Label>Data:</Label>
        <Input placeholder="Insira a data de entrada do veículo" placeholderTextColor="#8C8C8C" />

        <Button onPress={() => navigation.navigate("ListaVeiculos")}>
          <ButtonText>Confirmar</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}