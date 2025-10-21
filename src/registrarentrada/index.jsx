// src/registrarentrada/index.jsx
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import api from "../services/api";
import { Container, Header, Logo, BackContainer, BackImage, BackText, EntryForm, Form, TitleTab, Label, Input, Button, ButtonText } from "./style";

export default function RegistrarEntrada({ navigation }) {
  const [placa, setPlaca] = useState("");
  const [hora, setHora] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const agora = new Date();
    const horaAtual = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const dataAtual = agora.toLocaleDateString("pt-BR");
    setHora(horaAtual);
    setData(dataAtual);
  }, []);

  async function handleEntrada() {
    if (!placa.trim()) {
      return Alert.alert("Atenção", "Preencha a placa.");
    }

    setLoading(true);
    try {
      await api.post("/api/veiculos/entrada", {
        placa: placa.trim(),
        dataEntrada: data,
        horaEntrada: hora,
      });

      Alert.alert("Sucesso", "Entrada registrada com sucesso!");
      navigation.navigate("ListaVeiculos");
    } catch (error) {
      console.error("Erro registrar entrada:", error?.response?.data || error.message);
      const msg = error?.response?.data?.message || "Não foi possível registrar a entrada.";
      Alert.alert("Erro", msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
      </Header>

      <BackContainer>
        <BackImage source={require("../../assets/images/voltar.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("ListaVeiculos")}>
          <BackText>Voltar ao início</BackText>
        </TouchableOpacity>
      </BackContainer>

      <EntryForm>
        <TitleTab>ENTRADA</TitleTab>
        <Form>
          <Label>Placa:</Label>
          <Input placeholder="Insira a placa do veículo" placeholderTextColor="#8C8C8C" value={placa} onChangeText={setPlaca} />

          <Label>Horário:</Label>
          <Input placeholder="Horário" placeholderTextColor="#8C8C8C" value={hora} onChangeText={setHora} />

          <Label>Data:</Label>
          <Input placeholder="Data" placeholderTextColor="#8C8C8C" value={data} onChangeText={setData} />

          <Button onPress={handleEntrada} disabled={loading}>
            <ButtonText>{loading ? "Enviando..." : "Confirmar"}</ButtonText>
          </Button>
        </Form>
      </EntryForm>
    </Container>
  );
}