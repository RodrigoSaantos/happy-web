
# Happy - WEB

# 😃 O que é o Happy?
---

A Next Level Week é um evento online gratuito promovido pela Rocketsat, em que durante 5 dias desenvolvemos uma aplicação completa. Na trilha Omni, a proposta foi criar uma aplicação web e mobile em que lares adotivos podem cadastrar seus endereços e informações para pessoas visitarem.

# 🛠️ Como usar?
---

## 🏋🏽‍♂️ Pré-requisitos

É necessário ter instalado na sua máquina para execução desse projeto:

- NodeJS
- Gerenciador de pacotes (Npm ou Yarn)

## ♊ Clonando o Rositório (frontend, backend e mobile)

Repositório [FRONTEND](https://github.com/RodrigoSaantos/happy-web).

Repositório [BACKEND](https://github.com/RodrigoSaantos/happy-backend).

Repositório [MOBILE](https://github.com/RodrigoSaantos/happy-mobile).

```bash
$ git clone https://github.com/RodrigoSaantos/happy-web.git
$ git clone https://github.com/RodrigoSaantos/happy-backend.git
$ git clone https://github.com/RodrigoSaantos/happy-mobile.git

# entre na pasta do projeto
```

## 💻 Rodando o Happy web

Entre na pasta

```bash
$ cd happy-web
```

Instale as dependências

```bash
$ yarn

# ou, caso use npm

$ npm install
```

Rode a aplicação

```bash
$ yarn start

# ou, caso use npm

$ npm start
```

# 🌎 Mapbox ou Openstreetmap
---

## 🗺️ Mapbox

Siga as instruções para usar o mapbox no lugar do openstreetmap.

- Caso você tenha uma conta no [mapbox](https://www.mapbox.com/), pode usar seu token para utilizar o mapa da aplicação. No entanto, se você não quiser ter este trabalho, sem problemas, por padrão já tem um mapa configurado para uso.
- Em "[https://account.mapbox.com/](https://account.mapbox.com/)", copie seu token.
- Na raiz do projeto web crie um arquivo chamado ".env"
- Dentro desse arquivo, digite "REACT_APP_MAPBOX_TOKEN =" e cole seu token logo depois.

## 🗾 Openstreetmap

Se você não quer ter esse trabalho de criar uma conta no mapbox, sem problemas.

- Entre no arquivo "OrphanagesMap.tsx", descomente o trecho de código correspondente a linha 46.
- No mesmo arquivo, comente a linha 47.

## 🌐 Rodando o Servidor

Entre na pasta

```bash
$ cd backend
```

Instale as dependências

```bash
$ yarn

# ou, caso use npm

$ npm install
```

Rode o servidor

```bash
$ yarn dev

# ou, caso use npm

$ npm dev
```

# 📖 Resultado
---
![Alt Text](https://raw.githubusercontent.com/RodrigoSaantos/gifs/main/happy_web.gif)

---

# 🏅 Happy Web 2.0 
Agora colocarei mostrarei a minha versão do projeto proposto pela @Rocketseat para dar um salto ainda maior!

## 🏡 Cadastrando novos orfanatos
---
![Alt Text](https://github.com/RodrigoSaantos/gifs/blob/main/happy-web-2.0-register-new-orphanage.gif)

## 🔒 Acesso Restrito
---
![Alt Text](https://github.com/RodrigoSaantos/gifs/blob/main/happy-web-2.0-restrict.gif)