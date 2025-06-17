// src/context/CensoProvider.tsx
import { useState, useEffect } from "react";
import { getSetores } from "../service/censoservice";
import { CensoContext } from "./CensoContext";
import type { Setor, Centroid } from "./CensoContext";



export const CensoProvider = ({ children }: { children: React.ReactNode }) => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState("Jacareí");
  const [setores, setSetores] = useState<Setor[]>([]);
  const [centro, setCentro] = useState<Centroid | null>(null);

  useEffect(() => {
    getSetores(cidadeSelecionada).then(({ polygons, centroid }) => {
      setSetores(polygons);
      setCentro(centroid);
    });
  }, [cidadeSelecionada]);

  const selecionarCidade = (cidade: string) => setCidadeSelecionada(cidade);

  return (
    <CensoContext.Provider value={{ cidadeSelecionada, setores, centro, selecionarCidade }}>
      {children}
    </CensoContext.Provider>
  );
};
