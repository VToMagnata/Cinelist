# Cinelist - Aplicativo de Filmes em Next.js

Cinelist é um projeto front-end desenvolvido com **Next.js, TypeScript e Tailwind CSS**, que consome a API do [The Movie Database (TMDb)](https://www.themoviedb.org/) para exibir filmes em alta e detalhes de cada filme.

## Funcionalidades

- Lista de filmes em alta (`Trending`) e populares (`Popular`).
- Página de detalhes com resumo e poster do filme.
- Interface responsiva, estilizada com Tailwind CSS.
- Navegação entre páginas usando **Next.js Link**.
- Cards interativos com efeito de hover para destaque.
- Consumo de API externa usando **Axios** com autenticação via Bearer Token.
- Uso de **TypeScript** para tipagem de dados da API.

## Tecnologias

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- TMDb API

## Estrutura do Projeto

- `pages/` → Páginas principais (Home, Filmes em Alta, Detalhes do Filme)  
- `components/` → Componentes reutilizáveis (Card, Grid, Header)  
- `lib/api/` → Serviços para requisições à API TMDb  
- `types/` → Tipagens TypeScript para os dados de filmes  

## Como usar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cinelist.git
