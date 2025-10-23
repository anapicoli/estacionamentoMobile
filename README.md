# 🚗 Sistema de Estacionamento - App Mobile

Aplicativo mobile desenvolvido em **React Native com Expo**, conectado a uma **API RESTful em Spring Boot**, com o objetivo de **gerenciar a entrada e saída de veículos em um estacionamento**.  

O sistema permite registrar novas entradas e saídas, visualizar veículos ativos e calcular automaticamente o valor a ser pago de acordo com o tempo de permanência.

---

## 🧩 Funcionalidades

### 🔐 Autenticação
- Login e cadastro de usuários.
- Validação via API (`/auth/login` e `/auth/register`).
- Sessão segura com verificação de usuário logado (`/auth/me`).

### 🚘 Veículos
- **Registrar entrada:** insere uma nova entrada com a placa informada e data/hora automática do sistema.
- **Registrar saída:** busca as informações do veículo e calcula automaticamente o valor a ser pago, enviando apenas a placa para o backend.
- **Listar veículos ativos:** exibe todos os veículos atualmente estacionados.

### 💰 Cálculo automático de valor
- O valor da saída é calculado pelo backend com base no tempo de permanência (tarifa: **R$ 10,60 por hora**).

---

## ⚙️ Tecnologias Utilizadas

### 🧱 Backend
- **Java 17**
- **Spring Boot**
- **JPA / Hibernate**
- **MySQL**
- **Spring Security (JWT)**

### 📱 Frontend (App Mobile)
- **React Native (Expo)**
- **React Navigation**
- **Styled Components**
- **Axios (para requisições à API)**
- **Expo Splash Screen**
- **Custom Fonts (Bebas Neue, Inter, Nunito)**

---

## 🗂️ Estrutura de Pastas (Frontend)

```
📁 src
 ┣ 📁 cadastro
 ┣ 📁 login
 ┣ 📁 listaveiculos
 ┣ 📁 registrarentrada
 ┣ 📁 registrarsaida
 ┣ 📁 services
 ┃ ┗ api.js
 ┗ 📁 assets
     ┗ 📁 images
```

---

## 🔌 Endpoints Principais (API)

| Método   | Rota                          | Descrição                             |
|----------|-------------------------------|---------------------------------------|
| **POST** | `/auth/login`                 | Realiza login do usuário              |
| **POST** | `/auth/register`              | Cadastra novo usuário                 |
| **GET**  | `/auth/me`                    | Retorna informações do usuário logado |
| **POST** | `/api/veiculos/entrada`       | Registra entrada de veículo           |
| **POST** | `/api/veiculos/saida`         | Registra saída e calcula o valor      |
| **GET**  | `/api/veiculos`               | Lista veículos ativos                 |
| **GET**  | `/api/veiculos/placa/{placa}` | Busca registros por placa             |
| **GET**  | `/api/veiculos/id/{id}`       | Busca veículo específico por ID       |

---

## 📱 Telas do Aplicativo

| Tela                  | Descrição                                          |
|-----------------------|----------------------------------------------------|
| **Login**             | Acesso ao sistema com autenticação                 |
| **Cadastro**          | Criação de novo usuário                            |
| **Lista de Veículos** | Exibe veículos atualmente estacionados             |
| **Registrar Entrada** | Registra a entrada de um novo veículo              |
| **Registrar Saída**   | Registra a saída e mostra o valor total a ser pago |
| **Splash Screen**     | Animação de carregamento inicial                   |

---

## 💡 Destaques Técnicos

- Layout responsivo e estilizado com **Styled Components**  
- Ícones e imagens personalizadas  
- Campos de formulário com **placeholders**, **sombras internas** e **efeitos sutis**  
- Integração completa com a API de estacionamento

---

## 🚀 Como Executar o Projeto

### 📦 Pré-requisitos
- Node.js instalado
- Expo CLI (`npm install -g expo-cli`)
- Backend (Spring Boot) em execução

### ▶️ Executar o app mobile
```bash
# Instalar dependências
npm install

# Rodar o app
npx expo start
```
Abra o app no seu emulador ou escaneie o QR Code no Expo Go (Android/iOS).
---

## 👩‍💻 Desenvolvido por
**Ana Picoli**
