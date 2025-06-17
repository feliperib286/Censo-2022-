// src/context/useCenso.ts
import { useContext } from "react";
import { CensoContext } from "./CensoContext";

export const useCenso = () => useContext(CensoContext);