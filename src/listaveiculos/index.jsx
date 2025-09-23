import React from "react";
import { TouchableOpacity, FlatList, Text } from "react-native";
import { Container, Header, Logo, Title, SearchContainer, SearchInput, CardsContainer, Card, CardRow, ButtonRow,PlateText, DateText, RegisterButton, RegisterButtonText } from "./style";

const sampleData = [
  { id: "1", plate: "HSU8926", date: "24/08/2025", time: "18:59" },
  { id: "2", plate: "LWD9926", date: "26/08/2025", time: "10:36" },
  { id: "3", plate: "KFC3965", date: "27/08/2025", time: "08:05" },
  { id: "4", plate: "MUO8916", date: "28/08/2025", time: "02:42" },
  { id: "5", plate: "NDP2985", date: "30/08/2025", time: "01:02" },
  { id: "6", plate: "NEM9473", date: "01/09/2025", time: "01:15" },
];

export default function ListaVeiculos({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.svg")} resizeMode="contain" />
      </Header>

      <Title>VEÍCULOS ATIVOS</Title>

      <SearchContainer>
        <SearchInput placeholder="buscar placa" placeholderTextColor="#8C8C8C" />
      </SearchContainer>

      <CardsContainer>
        <FlatList
          data={sampleData}
          keyExtractor={(i) => i.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "flex-start" }}
          renderItem={({ item }) => (
            <Card>
                <CardRow>
                    <DateText>{item.date} · {item.time}</DateText>
                </CardRow>
                <ButtonRow>
                    <PlateText>{item.plate}</PlateText>
                    <RegisterButton onPress={() => navigation.navigate("RegistrarSaida", { plate: item.plate })}>
                        <RegisterButtonText>registrar saída</RegisterButtonText>
                    </RegisterButton>
                </ButtonRow>
            </Card>
          )}
        />
      </CardsContainer>

      <RegisterButton style={{ alignSelf: "center", marginTop:400, width: 130, height: 40 }} onPress={() => navigation.navigate("RegistrarEntrada")}>
        <RegisterButtonText>registrar entrada</RegisterButtonText>
      </RegisterButton>
    </Container>
  );
}