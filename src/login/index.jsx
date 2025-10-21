import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { Container, Header, Logo, LoginForm, Form, TitleTab, Label, Input, Button, ButtonText, Row, LinkText, Forgot } from "./style";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      return Alert.alert("Atenção", "Informe email e senha.");
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/login", {
        email: email.trim(),
        senha: senha.trim(),
      });

      const token = response.data?.token || response.data?.data?.token || null;
      if (token) {
        await AsyncStorage.setItem("token", token);
        
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        Alert.alert("Sucesso", "Login realizado!");
        navigation.replace("ListaVeiculos");
      } else {
        Alert.alert("Erro", "Não foi possível recuperar token. Verifique credenciais.");
      }
    } catch (error) {
      console.error("Login error:", error?.response?.data || error.message);
      Alert.alert("Falha no login", "Email ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
      </Header>

      <LoginForm>
        <TitleTab>LOGIN</TitleTab>
        <Form>
          <Label>Email:</Label>
          <Input
            placeholder="Insira seu email"
            placeholderTextColor="#8C8C8C"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Label>Senha:</Label>
          <Input
            placeholder="Insira sua senha"
            placeholderTextColor="#8C8C8C"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <Forgot rowRight>
            <TouchableOpacity>
              <LinkText>Esqueci a senha</LinkText>
            </TouchableOpacity>
          </Forgot>

          <Row>
            <Button onPress={handleLogin} disabled={loading}>
              <ButtonText>{loading ? "Entrando..." : "Entrar"}</ButtonText>
            </Button>

            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={{ marginLeft: 5 }}>
              <LinkText>Não tenho cadastro</LinkText>
            </TouchableOpacity>
          </Row>
        </Form>
      </LoginForm>
    </Container>
  );
}