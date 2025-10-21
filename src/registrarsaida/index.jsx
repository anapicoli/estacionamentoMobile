import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import api from "../services/api";
import { Container, Header, Logo, BackContainer, BackImage, BackText, ExitForm, Form, TitleTab, Label, Input, Button, ButtonText } from "./style";

export default function RegistrarSaida({ route, navigation }) {
  const { id } = route.params || {};

  const [plate, setPlate] = useState("");
  const [entrytime, setEntryTime] = useState("");
  const [entrydate, setEntryDate] = useState("");
  const [exitTime, setExitTime] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [valor, setValor] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchVehicle() {
      try {
        const response = await api.get(`/api/veiculos/id/${id}`);
        const veiculo = response.data;

        setPlate(veiculo.placa || "");
        setEntryTime(veiculo.horaEntrada || "");
        setEntryDate(veiculo.dataEntrada || "");
        setExitTime(veiculo.horaSaida || "");
        setExitDate(veiculo.dataSaida || "");
        setValor(veiculo.valorPago ? veiculo.valorPago.toFixed(2) : "");
      } catch (error) {
        console.error("Erro ao buscar veículo:", error?.response?.data || error.message);
        Alert.alert("Erro", "Não foi possível carregar os dados do veículo.");
      }
    }

    if (id) {
      fetchVehicle();
    }
  }, [id]);

  async function handleSaida() {
    setLoading(true);
    try {
      const payload = {
        id,
      };

      const response = await api.post("/api/veiculos/saida", payload);

      const valorFinal = response.data?.valorPago?.toFixed(2) || valor;

      Alert.alert("Sucesso", `Saída registrada. Total a pagar: R$ ${valorFinal}`);
      navigation.navigate("ListaVeiculos");
    } catch (error) {
      console.error("Erro registrar saída:", error?.response?.data || error.message);
      const msg =
        error?.response?.data?.message || "Não foi possível registrar a saída.";
      Alert.alert("Erro", msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <Logo
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </Header>

      <BackContainer>
        <BackImage source={require("../../assets/images/voltar.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("ListaVeiculos")}>
          <BackText>Voltar ao início</BackText>
        </TouchableOpacity>
      </BackContainer>

      <ExitForm>
        <TitleTab>SAÍDA</TitleTab>
        <Form>
          <Label>Placa:</Label>
          <Input value={plate ?? ""} editable={false} />

          <Label>Horário de entrada:</Label>
          <Input value={entrytime ?? ""} editable={false} />

          <Label>Data de entrada:</Label>
          <Input value={entrydate ?? ""} editable={false} />

          <Label>Horário de saída:</Label>
          <Input value={exitTime ?? ""} editable={false} />

          <Label>Data de saída:</Label>
          <Input value={exitDate ?? ""} editable={false} />

          <Label>Valor a ser pago:</Label>
          <Input value={valor ? `R$ ${valor}` : ""} editable={false} />

          <Button onPress={handleSaida} disabled={loading}>
            <ButtonText>{loading ? "Confirmando..." : "Confirmar"}</ButtonText>
          </Button>
        </Form>
      </ExitForm>
    </Container>
  );
}