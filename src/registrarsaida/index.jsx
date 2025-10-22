import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import api from "../services/api";
import {
  Container,
  Header,
  Logo,
  BackContainer,
  BackImage,
  BackText,
  ExitForm,
  Form,
  TitleTab,
  Label,
  Input,
  Button,
  ButtonText,
} from "./style";

export default function RegistrarSaida({ route, navigation }) {
  const { plate } = route.params || {};
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchVehicle() {
    try {
      setLoading(true);
      const response = await api.put(`/api/veiculos/saida`, {
        placa: plate.trim(),
      });
      setData(response.data);
      console.log(response)

      // Exibe mensagem do retorno
      if (response.data?.mensagem) {
       
      }
    } catch (error) {
      console.error(
        "Erro ao buscar veículo:",
        error?.response?.data || error.message
      );
     
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (plate) {
      fetchVehicle();
    }
  }, [plate]);

  const veiculo = data?.veiculo || {};

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
          <Input value={veiculo.placa ?? plate ?? ""} editable={false} />

          <Label>Data de entrada:</Label>
          <Input value={veiculo.dataEntrada || ""} editable={false} />

          <Label>Horário de entrada:</Label>
          <Input value={veiculo.horarioEntrada || ""} editable={false} />

          <Label>Data de saída:</Label>
          <Input value={veiculo.dataSaida || ""} editable={false} />

          <Label>Horário de saída:</Label>
          <Input value={veiculo.horarioSaida || ""} editable={false} />

          <Label>Valor a ser pago:</Label>
          <Input
            value={
              veiculo.valorPago !== undefined
                ? `R$ ${Number(veiculo.valorPago).toFixed(2)}`
                : ""
            }
            editable={false}
          />

          <Button
            onPress={() => navigation.navigate("ListaVeiculos")}
            disabled={loading}
          >
            <ButtonText>
              {loading ? "Confirmando..." : "Confirmar"}
            </ButtonText>
          </Button>
        </Form>
      </ExitForm>
    </Container>
  );
}
