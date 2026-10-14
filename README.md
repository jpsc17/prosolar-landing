<div align="center">

# ☀️ Pró-Solar Engenharia & Soluções Renováveis

**Landing Page de Alta Conversão com Simulador Solar em Tempo Real**

Uma plataforma moderna desenvolvida para apresentar projetos solares fotovoltaicos, dimensionar sistemas instantaneamente e conectar clientes residenciais, comerciais, rurais e industriais a engenheiros especialistas.

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://prosolar-landing.vercel.app)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react)](https://react.dev/)
[![TanStack](https://img.shields.io/badge/TanStack_Start-1.168-FF4154?style=for-the-badge&logo=tanstack)](https://tanstack.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[🚀 Demonstração Online](https://prosolar-landing.vercel.app) · [✨ Funcionalidades](#-funcionalidades) · [🛠️ Tecnologias](#️-tecnologias) · [📦 Execução Local](#-execução-local)

</div>

---

## 🌟 Visão Geral

A **Pró-Solar** é projetada com foco em experiência do usuário (UX), altíssima performance e conversão de leads. Através de um simulador financeiro interativo, o visitante descobre na hora a potência recomendada, o número de painéis necessários, a economia estimada em 25 anos, o tempo de payback e a redução de pegada de carbono.

### 🌐 Demonstração em Produção
Acesse a aplicação no ar: **[https://prosolar-landing.vercel.app](https://prosolar-landing.vercel.app)**

---

## ✨ Funcionalidades

- **⚡ Simulador Solar Interativo (Cockpit Financeiro):**
  - Segmentos: Residencial, Comercial, Rural e Industrial.
  - Ajuste dinâmico de valor da conta de energia mensal (R$).
  - Estimativa em tempo real de potência instalada (kWp), módulos necessários, economia anual e acumulada em 25 anos.
  - Indicador de Retorno sobre Investimento (Payback) e CO₂ evitado.
- **📸 Galeria de Obras e Instalações Reais:**
  - Fotos em alta definição de instalações concluídas em telhados coloniais, metálicos, lajes e usinas de solo.
  - Detalhamento de potência, economia obtida e localização de cada obra.
- **📱 Integração Direta com WhatsApp:**
  - Botão de atendimento direto com mensagem pré-preenchida contendo os dados calculados no simulador.
- **🎨 Design Responsivo e Premium:**
  - Efeitos de glassmorphism, microanimações suaves e paleta energética otimizada para o segmento solar.
  - Tipografia moderna e navegação fluida em celulares, tablets e desktops.

---

## 🛠️ Tecnologias

- **Framework:** [TanStack Start](https://tanstack.com/start) com Server-Side Rendering (SSR) e Streaming.
- **Core:** [React 19](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/).
- **Estilização:** [TailwindCSS v4](https://tailwindcss.com/) com design system customizado.
- **Componentes & Ícones:** [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/).
- **Gráficos & Visualização:** [Recharts](https://recharts.org/).
- **Build & Bundler:** [Vite](https://vitejs.dev/).
- **Hospedagem & CI/CD:** [Vercel](https://vercel.com).

---

## 📁 Estrutura de Pastas

```text
prosolar-landing/
├── public/                 # Imagens públicas, brasões e fotos reais de projetos
│   └── projetos/           # Galeria de fotos de instalações solares
├── src/
│   ├── components/
│   │   ├── landing/        # Header, Hero, Simulator, SocialProof, WhyProsolar, Footer
│   │   └── ui/             # Componentes base Radix/Tailwind (botões, cards, sliders)
│   ├── routes/             # Rotas TanStack Start
│   └── styles.css          # Configuração global de estilos e temas
├── package.json
└── vite.config.ts
```

---

## 📦 Execução Local

### Pré-requisitos
- **Node.js** 20+ ou **Bun** instalado.
- Gerenciador de pacotes `npm`, `pnpm` ou `bun`.

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/jpsc17/prosolar-landing.git

# 2. Acesse a pasta do projeto
cd prosolar-landing

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

---

## 👨‍💻 Autor

Desenvolvido por **[João Paulo Gomes](https://github.com/jpsc17)**.
