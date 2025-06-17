import Mapa from "../src/components/MapView";
import { CidadeSelector } from "../src/components/CitySelector";
import { CensoProvider } from "./context/CensoProvider";

export default function App() {
  return (
    <CensoProvider>
      <CidadeSelector />
      <Mapa />
    </CensoProvider>
  );
}