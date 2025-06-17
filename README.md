🌍 Projeto: Visualização Geográfica — Censo Demográfico 2022
Este sistema fullstack foi desenvolvido com o objetivo de representar espacialmente os dados do Censo de 2022 para municípios do estado de São Paulo. Através de mapas interativos, o usuário pode explorar os setores censitários de diferentes cidades e analisar informações diretamente no território.

📦 Organização dos Diretórios
graphql
Copiar
Editar
AtividadeCensos/
├── backend/    → API com Node.js e Express, responsável pela manipulação dos dados geográficos
├── frontend/   → Interface React com TypeScript e Leaflet para visualização dinâmica dos setores
├── data/       → Contém arquivos GeoJSON e scripts SQL com informações das cidades paulistas
🎯 Recursos Implementados
Escolha de municípios com base no Censo (ex: Campinas, Jacareí, Sorocaba)

Mapa com visualização interativa dos setores censitários usando Leaflet

Aplicação de estilos e informações dinâmicas por setor

Integração direta com banco espacial via PostGIS

Uso de Context API para gerenciamento global de estado

🛠️ Tecnologias Utilizadas
Frontend

React com Vite

TypeScript

React Leaflet

Styled Components

Context API

Backend

Node.js com Express

TypeScript

PostgreSQL com extensão PostGIS

Leitura e carregamento de dados GeoJSON

🗄️ Banco de Dados
O projeto utiliza arquivos GeoJSON contendo os setores censitários e os importa para o PostgreSQL com suporte a dados espaciais (PostGIS), por meio de um script (comandos.sql).

▶️ Instruções para Execução
1. Clonar o repositório

bash
Copiar
Editar
git clone https://github.com/seu-usuario/AtividadeCensos.git
cd AtividadeCensos
2. Iniciar o backend

bash
Copiar
Editar
cd backend
npm install
# Criar o arquivo .env com as configurações do banco
npm run dev
3. Iniciar o frontend

bash
Copiar
Editar
cd ../frontend
npm install
npm run dev
4. Acessar a aplicação

Abra no navegador: http://localhost:5173

🎓 Sobre o Projeto
Trabalho acadêmico realizado na disciplina Desenvolvimento Web II da Fatec Jacareí. Foco principal: integração entre tecnologias de front-end, back-end e bases geográficas com dados reais do IBGE.
