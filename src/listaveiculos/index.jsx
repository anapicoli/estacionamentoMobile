// src/listaveiculos/index.jsx
import React, { useEffect, useState, useCallback } from "react";
import { FlatList, Alert, RefreshControl } from "react-native";
import api from "../services/api";
import { Container, Header, Logo, Title, ListTitle, SearchInput, CardsContainer, Card, CardRow, ButtonRow, PlateText, DateText, RegisterButton, RegisterButtonText, RegisterEntryText } from "./style";

export default function ListaVeiculos({ navigation }) {
  const [veiculos, setVeiculos] = useState([]);
  const [busca, setBusca] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const carregarVeiculos = async () => {
    try {
      const response = await api.get("/api/veiculos");
      const data = response.data || [];
      setVeiculos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao carregar veículos:", error?.response?.data || error.message);
      Alert.alert("Erro", "Não foi possível carregar os veículos.");
    }
  };

  useEffect(() => {
    carregarVeiculos();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await carregarVeiculos();
    setRefreshing(false);
  }, []);

  const filtrados = veiculos.filter((v) => {
    const placa = (v.placa || v.placaVeiculo || "").toString();
    return placa.toLowerCase().includes(busca.toLowerCase());
  });

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
      </Header>

      <ListTitle>
        <Title>VEÍCULOS ATIVOS</Title>
        <SearchInput
          placeholder="buscar placa"
          placeholderTextColor="#8C8C8C"
          value={busca}
          onChangeText={setBusca}
        />
      </ListTitle>

      <CardsContainer>
        <FlatList
          data={filtrados}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          keyExtractor={(item) => String(item.id ?? item.codigo ?? item._id ?? item.placa)}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "flex-start" }}
          renderItem={({ item }) => {
            const placa = item.placa || item.placaVeiculo || "";
            const entrydate = item.dataEntrada || item.dataEntradaFormatada || item.data || item.entrydate || "";
            const entrytime = item.horaEntrada || item.hora || item.entrytime || "";
            return (
              <Card>
                <CardRow>
                  <DateText>{entrydate} · {entrytime}</DateText>
                </CardRow>
                <ButtonRow>
                  <PlateText>{placa}</PlateText>
                  <RegisterButton
                    onPress={() =>
                      navigation.navigate("RegistrarSaida", {
                        plate: placa,
                      })
                    }
                  >
                    <RegisterButtonText>registrar saída</RegisterButtonText>
                  </RegisterButton>
                </ButtonRow>
              </Card>
            );
          }}
        />
      </CardsContainer>

      <RegisterButton
        style={{ alignSelf: "center", marginTop: 20, width: 130, height: 40 }}
        onPress={() => navigation.navigate("RegistrarEntrada")}
      >
        <RegisterEntryText>registrar entrada</RegisterEntryText>
      </RegisterButton>
    </Container>
  );
}