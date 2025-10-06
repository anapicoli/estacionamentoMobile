import React from "react";
import {FlatList} from "react-native";
import { Container, Header, Logo, Title, ListTitle, SearchInput, CardsContainer, Card, CardRow, ButtonRow,PlateText, DateText, RegisterButton, RegisterButtonText, RegisterEntryText } from "./style";

const sampleData = [
  { id: "1", plate: "HSU8926", entrydate: "24/08/2025", entrytime: "18:59" },
  { id: "2", plate: "LWD9926", entrydate: "26/08/2025", entrytime: "10:36" },
  { id: "3", plate: "KFC3965", entrydate: "27/08/2025", entrytime: "08:05" },
  { id: "4", plate: "MUO8916", entrydate: "28/08/2025", entrytime: "02:42" },
  { id: "5", plate: "NDP2985", entrydate: "30/08/2025", entrytime: "01:02" },
  { id: "6", plate: "NEM9473", entrydate: "01/09/2025", entrytime: "01:15" },
];


export default function ListaVeiculos({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
      </Header>

      <ListTitle>
        <Title>VEÍCULOS ATIVOS</Title>
        <SearchInput placeholder="buscar placa" placeholderTextColor="#8C8C8C" />
      </ListTitle>

      <CardsContainer>
        <FlatList
          data={sampleData}
          keyExtractor={(i) => i.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "flex-start" }}
          renderItem={({ item }) => (
            <Card>
                <CardRow>
                    <DateText>{item.entrydate} · {item.entrytime}</DateText>
                </CardRow>
                <ButtonRow>
                    <PlateText>{item.plate}</PlateText>
                    <RegisterButton onPress={() => navigation.navigate("RegistrarSaida", { plate: item.plate, entrytime: item.entrytime, entrydate: item.entrydate})}>
                        <RegisterButtonText>registrar saída</RegisterButtonText>
                    </RegisterButton>
                </ButtonRow>
            </Card>
          )}
        />
      </CardsContainer>

      <RegisterButton style={{ alignSelf: "center", marginTop:400, width: 130, height: 40 }} onPress={() => navigation.navigate("RegistrarEntrada")}>
        <RegisterEntryText>registrar entrada</RegisterEntryText>
      </RegisterButton>
    </Container>
  );
}