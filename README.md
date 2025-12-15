# CineList 🎬

CineList é um **site de catálogo de filmes** desenvolvido com **Next.js 13**, **TypeScript** e **Tailwind CSS**. O projeto consome dados da **API TMDB** para exibir filmes em alta do dia, oferecendo uma interface simples e moderna.

---

## Funcionalidades

- Exibe filmes em alta do dia usando a API TMDB.  
- Grid dinâmico de filmes com imagens e títulos.  
- Header fixo com links de navegação: Home e Em Alta.  
- Design responsivo e clean usando Tailwind CSS.  

---

## Tecnologias utilizadas

- [Next.js 13](https://nextjs.org) (App Router)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Axios](https://axios-http.com/) para requisições à API TMDB  

---

## Estrutura do projeto

- `app/Filmes/em-alta/page.tsx` → Página que lista filmes em alta.  
- `app/components/Header.tsx` → Header do site com navegação.  
- `app/components/Grid.tsx` → Grid de exibição dos filmes.  
- `lib/call.ts` → Funções para buscar dados da API TMDB.  

---

## Como rodar o projeto

1. Clone o repositório:  

```bash
git clone https://github.com/VToMagnata/Cinelist.git
cd Cinelist
