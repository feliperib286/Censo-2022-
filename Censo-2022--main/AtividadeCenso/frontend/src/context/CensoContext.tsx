// src/context/CensoContext.ts
import { createContext } from "react";

export interface Setor {
  geom: string;
}

export interface Centroid {
  latitude: number;
  longitude: number;
}

export interface CensoContextType {
  cidadeSelecionada: string;
  setores: Setor[];
  centro: Centroid | null;
  selecionarCidade: (cidade: string) => void;
}

export const CensoContext = createContext<CensoContextType>({} as CensoContextType);
