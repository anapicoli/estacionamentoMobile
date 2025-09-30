import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Header, Logo, Form, TitleTab, Label, Input, Button, ButtonText } from "./style";

export default function RegistrarSaida({ route, navigation }) {
  const { plate } = route.params || {};

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.svg")} resizeMode="contain" />
      </Header>

      <ExitForm>
        <TitleTab>SAÍDA</TitleTab>
        <Form>
          <Label>Placa:</Label>
          <Input value={plate} editable={false} />

          <Label>Horário de entrada:</Label>
          <Input placeholder="" placeholderTextColor="#8C8C8C" />

          <Label>Data de entrada:</Label>
          <Input placeholder="" placeholderTextColor="#8C8C8C" />

          <Label>Horário de saída:</Label>
          <Input placeholder="" placeholderTextColor="#8C8C8C" />

          <Label>Data de saída:</Label>
          <Input placeholder="" placeholderTextColor="#8C8C8C" />

          <Label>Valor a ser pago:</Label>
          <Input placeholder="" placeholderTextColor="#8C8C8C" />

          <Button onPress={() => navigation.navigate("ListaVeiculos")}>
            <ButtonText>Confirmar</ButtonText>
          </Button>
        </Form>
      </ExitForm>
    </Container>
  );
}