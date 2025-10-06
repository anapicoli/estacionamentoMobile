import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Container, Header, Logo, BackContainer, BackImage, BackText, ExitForm, Form, TitleTab, Label, Input, Button, ButtonText} from "./style";

export default function RegistrarSaida({ route, navigation }) {
  const { plate, entrytime, entrydate } = route.params || {};

  const [exitTime, setExitTime] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [valor, setValor] = useState("");

    useEffect(() => {
    const atualizarSaida = () => {
      const now = new Date();

      const horaSaida = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const dataSaida = now.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      setExitTime(horaSaida);
      setExitDate(dataSaida);

      if (entrydate && entrytime) {
        const [dia, mes, ano] = entrydate.split("/");
        const [hora, minuto] = entrytime.split(":");
        const entrada = new Date(ano, mes - 1, dia, hora, minuto);

        const diffMs = now - entrada;
        const diffHoras = diffMs / 1000 / 60 / 60;

        const valorCalculado = (Math.max(diffHoras, 1) * 5).toFixed(2);
        setValor(valorCalculado);
      }
    };

    atualizarSaida();

    const intervalo = setInterval(atualizarSaida, 1000);

    return () => clearInterval(intervalo);
  }, [entrytime, entrydate]);

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
      </Header>

      <BackContainer>
        <BackImage source={require("../../assets/images/voltar.png")}/>
        <TouchableOpacity onPress={() => navigation.navigate("ListaVeiculos")}>
          <BackText>Voltar ao início</BackText>
        </TouchableOpacity>
      </BackContainer>

      <ExitForm>
        <TitleTab>SAÍDA</TitleTab>
        <Form>
          <Label>Placa:</Label>
          <Input value={plate} editable={false} />

          <Label>Horário de entrada:</Label>
          <Input value={entrytime} editable={false} />

          <Label>Data de entrada:</Label>
          <Input value={entrydate} editable={false} />

          <Label>Horário de saída:</Label>
          <Input value={exitTime} editable={false} />

          <Label>Data de saída:</Label>
          <Input value={exitDate} editable={false} />

          <Label>Valor a ser pago:</Label>
          <Input value={`R$ ${valor}`} editable={false} />

          <Button onPress={() => navigation.navigate("ListaVeiculos")}>
            <ButtonText>Confirmar</ButtonText>
          </Button>
        </Form>
      </ExitForm>
    </Container>
  );
}