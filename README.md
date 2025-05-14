# Outdoor Recipes App

> Um aplicativo em React Native com Expo CLI que exibe uma lista de receitas típicas brasileiras.

## Índice
- [Visão Geral](#vis%C3%A3o-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Instalação](#instala%C3%A7%C3%A3o)
- [Uso](#uso)
- [Tecnologias](#tecnologias)
- [Customização Visual](#customiza%C3%A7%C3%A3o-visual)

## Visão Geral
Este projeto é um aplicativo em React Native, criado com Expo CLI, que apresenta uma lista de receitas para serem preparadas ao ar livre. O usuário pode visualizar informações básicas de cada receita e, ao selecionar uma delas, acessar instruções completas de preparo.

## Funcionalidades
- Exibir uma lista de **7 receitas** na tela inicial (Home).
- Cada item da lista utiliza o componente externo `RecipeCard`.
- Ao clicar em uma receita, navega para `DetailScreen` exibindo:
  - Nome da receita
  - Instruções completas de preparo
- Dados das receitas armazenados em `data/recipes.js`.
- Navegação por stack usando React Navigation Native Stack.

## Estrutura de Pastas
```
├── components
│   └── RecipeCard.js
├── screens
│   ├── HomeScreen.js
│   └── DetailScreen.js
├── data
│   └── recipes.js
├── App.js
└── README.md
```

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/outdoor-recipes-app.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd outdoor-recipes-app
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o Expo:
   ```bash
   npm start
   ```

## Uso
- **HomeScreen**: lista todas as receitas.
- **RecipeCard**: componente reutilizável que recebe props (`title`, `shortDescription`) e renderiza cada item.
- **DetailScreen**: recebe parâmetros de navegação (`route.params`) e exibe o título e instruções completas.

## Tecnologias
- React Native com Expo CLI
- React Navigation (Native Stack)

## Customização Visual
Adicione cores, fontes e emojis para tornar a experiência mais divertida! Exemplos:
- 🎨 Cores vibrantes para botões
- 🖋️ Fontes customizadas para títulos
- 🌿 Emojis de comida ou natureza nas descrições
