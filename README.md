# Sistema de Estacionamento - App Mobile
  Aplicativo mobile desenvolvido em React Native com Expo, conectado a uma API RESTful em Spring Boot, com o objetivo de gerenciar a entrada e saída de veículos em um estacionamento.
  
  O sistema permite registrar novas entradas e saídas, visualizar veículos ativos e calcular automaticamente o valor a ser pago de acordo com o tempo de permanência.

# Funcionalidades
  • Autenticação
    ⋄ Login e Cadastro de usuários.
    ⋄ Validação via API (/auth/login e /auth/register).
    ⋄ Sessão segura com verificação de usuário logado (/auth/me).
  
  • Veículos
    ⋄ Registrar entrada: insere uma nova entrada com a placa informada e data/hora automática do sistema.
    ⋄ Registrar saída: busca as informações do veículo e calcula automaticamente o valor a ser pago, enviando apenas a placa para o backend.
    ⋄ Listar veículos ativos: exibe todos os veículos atualmente estacionados.
  
  • Cálculo automático de valor
    ⋄ O valor da saída é calculado pelo backend com base no tempo de permanência.
  
# Tecnologias Utilizadas
  • Backend
    ⋄ Java 17
    ⋄ Spring Boot
    ⋄ JPA / Hibernate
    ⋄ MySQL
    ⋄ Spring Security (JWT)
  
  • Frontend
    ⋄ React Native (Expo)
    ⋄ React Navigation
    ⋄ Styled Components
    ⋄ Axios
    ⋄ Custom Fonts (Bebas Neue, Inter, Nunito)

# Estrutura de pastas
  - src
    - cadastro
      - index.jsx
      - style.js
    - login
      - index.jsx
      - style.js
    - listaveiculos
      - index.jsx
      - style.js
    - registrarentrada
      - index.jsx
      - style.js
    - registrarsaida
      - index.jsx
      - style.js
    - services
      - api.js
    - assets
      - images
      - fonts
  - App.js

# Endpoints Principais (API)
  Método                Rota                               Descrição
  POST                  /auth/login                        Realiza login do usuário
  POST                  /auth/register                     Cadastra novo usuário
  GET                   /auth/me                           Retorna informações do usuário logado
  POST                  /api/veiculos/entrada              Registra entrada de veículos
  POST                  /api/veiculos/saida                Registra saída e calcula o valor
  GET                   /api/veiculos                      Lista veículos ativos
  GET                   /api/veiculos/placa/{placa}        Busca registros por placa
  GET                   /api/veiculos/id/{id}              Busca veículo específico por ID

# Telas do Aplicativo
  Tela                      Descrição
  Login                     Acesso ao sistema com autenticação
  Cadastro                  Criação de novo usuário
  Lista Veículos            Exibe veículos atualmente estacionados
  Registrar Entrada         Registra a entrada de um novo veículo
  Registrar Saída           Registra a saída e mostra o valor total a ser pago

# Destaques Técnicos
  • Layout responsivo e estilizado com Styled Components
  • Ícones e imagens personalizadas
  • Campos de formulário com placeholders, sombras e efeitos sutis
  • Integração completa com a API de estacionamento

# Como executar o projeto
  • Pré Requisitos
    ⋄ Node.js instalado
    ⋄ Expo CLI (npm install -g expo-cli)
    ⋄ Backend (Spring Boot) em execução

  • Excutar o app mobile
    ⋄ Utilizando Git Bash:
      # Instalar dependências:
        npm install
      # Rodar o app:
        npx expo start

## Projeto Desenvolvido por
  Ana Picoli
