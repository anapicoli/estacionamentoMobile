// src/cadastro/index.jsx
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import api from "../services/api";
import { Container, Header, Logo, CadastroForm, Form, TitleTab, Label, Input, Button, ButtonText, BackContainer, BackImage, BackText } from "./style";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCadastro() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      return Alert.alert("Atenção", "Preencha todos os campos.");
    }
    if (senha !== confirmarSenha) {
      return Alert.alert("Erro", "As senhas não coincidem.");
    }

    setLoading(true);
    try {
      await api.post("/auth/register", {
        nome: nome.trim(),
        email: email.trim(),
        senha: senha.trim(),
      });

      Alert.alert("Sucesso", "Cadastro realizado!");
      navigation.replace("Login");
    } catch (error) {
      console.error("Cadastro error:", error?.response?.data || error.message);
      const msg = error?.response?.data?.message || "Erro no cadastro. Tente novamente.";
      Alert.alert("Erro no cadastro", msg);
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
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <BackText>Voltar ao início</BackText>
         </TouchableOpacity>
      </BackContainer>

      <CadastroForm>
        <TitleTab>CADASTRO</TitleTab>
        <Form>
          <Label>Nome completo:</Label>
          <Input value={nome} onChangeText={setNome} placeholder="Insira seu nome completo" placeholderTextColor="#8C8C8C" />

          <Label>Email:</Label>
          <Input value={email} onChangeText={setEmail} placeholder="Insira seu email" placeholderTextColor="#8C8C8C" autoCapitalize="none" keyboardType="email-address"/>

          <Label>Senha:</Label>
          <Input value={senha} onChangeText={setSenha} placeholder="Insira uma senha" placeholderTextColor="#8C8C8C" secureTextEntry />

          <Label>Confirme sua senha:</Label>
          <Input value={confirmarSenha} onChangeText={setConfirmarSenha} placeholder="Confirme sua senha" placeholderTextColor="#8C8C8C" secureTextEntry />

          <Button onPress={handleCadastro} disabled={loading}>
            <ButtonText>{loading ? "Enviando..." : "Enviar"}</ButtonText>
          </Button>
        </Form>
      </CadastroForm>
    </Container>
  );
}