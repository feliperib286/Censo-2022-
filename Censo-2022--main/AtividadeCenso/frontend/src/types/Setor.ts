// types/Setor.ts
export interface Setor {
  cd_setor: string;
  nm_mun: string;
  situacao: string;
  area_km2: number;
    id: number;
  nome: string;
  codigo: string;
  geom: string;
  cidade: string;
  populacao?: number;
  renda_media?: number;
  densidade_demografica?: number;
  [key: string]: unknown; // opcional: caso queira aceitar outros campos dinâmicos
}
