# 🗺️ Atividade Censos — Visualização Geográfica do Censo Demográfico 2022

Este projeto fullstack tem como objetivo representar visualmente os dados do Censo Demográfico 2022 para cidades do estado de São Paulo. A aplicação permite a análise territorial por **setores censitários** utilizando mapas interativos.

## 📁 Estrutura do Projeto

AtividadeCensos/
├── backend/ → API em Node.js + Express com leitura de dados GeoJSON e rotas REST
├── frontend/ → Aplicação em React com visualização interativa dos mapas
├── data/ → Arquivos GeoJSON e scripts SQL com dados do IBGE

markdown
Copiar
Editar

## 🚀 Funcionalidades

- 🔍 Seleção de municípios (Campinas, Jacareí, Sorocaba, entre outros)
- 🗺️ Mapa interativo com setores censitários coloridos dinamicamente
- ℹ️ Informações detalhadas por setor ao clicar no mapa
- 🗃️ Integração com banco PostgreSQL + PostGIS
- ⚛️ Sistema modular com Context API para filtros e estado global

## 🧰 Tecnologias Utilizadas

### Frontend

- React + Vite
- TypeScript
- React Leaflet
- Styled Components
- Context API

### Backend

- Node.js
- Express
- TypeScript
- PostgreSQL com PostGIS
- Manipulação de arquivos `.geojson`

## 🗄️ Banco de Dados

Os dados geográficos utilizados são provenientes do Censo 2022, no formato GeoJSON. Utilizamos **PostgreSQL com a extensão PostGIS** para armazenar e consultar informações espaciais. A importação é feita via script SQL localizado na pasta `data`.

## ▶️ Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/AtividadeCensos.git
cd AtividadeCensos
2. Instale e inicie o backend
bash
Copiar
Editar
cd backend
npm install
# Crie um arquivo .env com suas variáveis de conexão com o PostgreSQL
npm run dev
3. Instale e inicie o frontend
bash
Copiar
Editar
cd ../frontend
npm install
npm run dev
4. Acesse a aplicação
Abra o navegador e vá até: http://localhost:5173

🧠 Créditos
Esta aplicação foi desenvolvida como parte da disciplina Desenvolvimento Web II (Fatec Jacareí), com foco na integração entre frontend, backend e dados geográficos do Censo Brasileiro.

