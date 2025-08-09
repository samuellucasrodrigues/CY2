# 🎬 CY2 - Rede Social para Amantes de Séries e Desenhos

<div align="center">

![CY2 Logo](src/assets/logo.svg)

**A rede social para os amantes de séries e desenhos**

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC.svg)](https://tailwindcss.com/)

</div>

---

## 📖 Sobre o Projeto

O **CY2** é uma plataforma web moderna desenvolvida em React que funciona como uma rede social especializada para amantes de séries de TV e desenhos animados. O projeto oferece uma interface intuitiva e elegante para que os usuários possam:

- ✅ **Acompanhar** as séries e desenhos que já assistiu
- 💾 **Salvar** aqueles que deseja ver no futuro
- 📢 **Compartilhar** com amigos suas recomendações
- 🔍 **Descobrir** novos conteúdos através da busca
- 🚀 **Navegar** entre páginas com sistema de roteamento moderno

### 🎯 Funcionalidades Atuais

- **Sistema de Roteamento**: Navegação entre páginas com TanStack React Router
- **Página de Login**: Interface de autenticação (em desenvolvimento)
- **Header Responsivo**: Navegação principal com logo, menu de navegação e barra de pesquisa
- **Landing Page Atraente**: Apresentação clara do propósito da plataforma
- **Design Moderno**: Interface escura com elementos visuais de séries populares
- **Componentes Modulares**: Estrutura organizada e reutilizável

### 🎨 Design e UX

- **Tema Escuro**: Interface com fundo preto para melhor experiência visual
- **Tipografia Clara**: Fonte Inter para excelente legibilidade
- **Elementos Visuais**: Logos de séries populares como Breaking Bad, Prison Break, Naruto, etc.
- **Call-to-Action**: Botão verde destacado para conversão de usuários

---

## 🚀 Tecnologias Utilizadas

| Tecnologia                | Versão  | Propósito                   |
| ------------------------- | ------- | --------------------------- |
| **React**                 | 19.1.0  | Framework principal para UI |
| **Vite**                  | 7.0.4   | Build tool e dev server     |
| **Tailwind CSS**          | 4.1.11  | Framework CSS utilitário    |
| **Lucide React**          | 0.525.0 | Ícones modernos             |
| **FontAwesome**           | 7.0.0   | Biblioteca de ícones        |
| **TanStack React Router** | 1.130.8 | Roteamento moderno          |

---

## 📁 Estrutura do Projeto

```
CY2/
├── 📄 index.html                 # Página HTML principal
├── 📄 package.json               # Dependências e scripts
├── 📄 vite.config.js             # Configuração do Vite
├── 📄 router.jsx                 # Configuração central de rotas
├── 📄 README.md                  # Este arquivo
│
├── 📁 public/                    # Arquivos públicos
│   └── 📄 vite.svg              # Logo do Vite
│
├── 📁 routes/                    # Páginas da aplicação
│   ├── 📄 Home.jsx              # Página inicial
│   ├── 📄 Login.jsx             # Página de login
│   ├── 📄 SignUp.jsx            # Página de cadastro
│   ├── 📄 Series.jsx            # Página de séries
│   └── 📄 Animation.jsx         # Página de animações/desenhos
│
└── 📁 src/                       # Código fonte
    ├── 📄 main.jsx              # Ponto de entrada da aplicação
    ├── 📄 index.css             # Estilos globais (Tailwind)
    │
    ├── 📁 assets/               # Recursos estáticos
    │   ├── 📄 logo.svg          # Logo da aplicação
    │   ├── 📄 bb.svg            # Breaking Bad
    │   ├── 📄 pb.svg            # Prison Break
    │   ├── 📄 himym.svg         # How I Met Your Mother
    │   ├── 📄 naruto.svg        # Naruto
    │   ├── 📄 bob.svg           # Bob Esponja
    │   └── 📄 st.svg            # Stranger Things
    │
    └── 📁 components/           # Componentes React
        ├── 📁 Header/           # Cabeçalho da aplicação
        │   └── 📄 index.jsx     # Componente Header
        ├── 📁 Main/             # Conteúdo principal e variações
        │   ├── 📄 index.jsx     # Componente Main da landing page
        │   ├── 📄 login.jsx     # Seção/variante de login
        │   └── 📄 signup.jsx    # Seção/variante de cadastro
        └── 📁 Forms/            # Componentes de formulário reutilizáveis
            ├── 📄 input.jsx
            └── 📄 inputSignUp.jsx
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone [URL_DO_REPOSITORIO]
cd CY2
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Acesse a aplicação**

```
http://localhost:5173
```

### Scripts Disponíveis

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera build de produção               |
| `npm run preview` | Visualiza o build de produção        |

---

## 🎨 Componentes e Páginas Principais

### Router Configuration

- **Localização**: `router.jsx`
- **Funcionalidade**: Configuração centralizada de rotas
- **Características**:
  - Roteamento baseado em TanStack React Router
  - Estrutura de rotas hierárquica
  - Suporte a navegação programática
  - Rotas atuais:
    - `/` → `Home`
    - `/login` → `Login`
    - `/signup` → `SignUp`
    - `/series` → `Series`
    - `/animations` → `Animation`

### Home Page

- **Localização**: `routes/Home.jsx`
- **Funcionalidade**: Página inicial da aplicação
- **Características**:
  - Integração dos componentes Header e Main
  - Landing page principal

### Login Page

- **Localização**: `routes/Login.jsx`
- **Funcionalidade**: Página de autenticação
- **Características**:
  - Interface básica de login (em desenvolvimento)
  - Navegação de volta para home

### SignUp Page

- **Localização**: `routes/SignUp.jsx`
- **Funcionalidade**: Página de cadastro de usuários
- **Características**:
  - Campos e validações iniciais (em desenvolvimento)
  - Integração com componentes de formulário

### Series Page

- **Localização**: `routes/Series.jsx`
- **Funcionalidade**: Listagem/exploração de séries
- **Características**:
  - Estrutura base para futura integração com APIs

### Animation Page

- **Localização**: `routes/Animation.jsx`
- **Funcionalidade**: Listagem/exploração de animações/desenhos
- **Características**:
  - Estrutura base para futura integração com APIs

### Header Component

- **Localização**: `src/components/Header/index.jsx`
- **Funcionalidade**: Navegação principal com logo, menu e busca
- **Características**:
  - Logo da aplicação
  - Links de navegação (Entrar, Criar Conta, Séries, Desenhos)
  - Barra de pesquisa com ícone

### Main Component

- **Localização**: `src/components/Main/index.jsx`
- **Funcionalidade**: Conteúdo principal da landing page
- **Características**:
  - Mensagens de apresentação
  - Call-to-action principal
  - Galeria de logos de séries populares

### Forms Components

- **Localização**: `src/components/Forms/`
- **Funcionalidade**: Campos de formulário reutilizáveis para telas de autenticação e cadastro
- **Arquivos**:
  - `input.jsx`
  - `inputSignUp.jsx`

---

## 🎯 Roadmap e Próximos Passos

### Funcionalidades Planejadas

- [x] Sistema de roteamento básico
- [x] Página de login (estrutura básica)
- [ ] Sistema de autenticação completo
- [ ] Perfil de usuário
- [ ] Sistema de avaliação de séries
- [ ] Lista de favoritos
- [ ] Recomendações personalizadas
- [ ] Sistema de comentários
- [ ] Integração com APIs de séries

### Melhorias Técnicas

- [x] Sistema de roteamento implementado
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Otimização de performance
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👥 Autores

- **Desenvolvedor Principal** - João Victor e Samuel

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

</div>
