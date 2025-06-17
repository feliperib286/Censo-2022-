import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";
import { useCenso } from "../context/useCenso";
import { getSetorByPoint } from "../service/censoservice";
import { useEffect, useMemo, useState } from "react";
import * as wellknown from "wellknown";
import L from "leaflet";
import { InfoBox } from "./InfoBox";
import type {
  FeatureCollection,
  Feature,
  Geometry,
  GeoJsonProperties,
} from "geojson";
import type { Setor } from "../types/Setor";

// Ajusta a visão do mapa com base nos polígonos carregados
function AjustarVisaoPoligonos({
  features,
}: {
  features: Feature<Geometry, GeoJsonProperties>[];
}) {
  const map = useMap();

  useEffect(() => {
    const layerGroup = L.geoJSON({
      type: "FeatureCollection",
      features,
    } as FeatureCollection);
    const bounds = layerGroup.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [features, map]);

  return null;
}

export default function MapView() {
  const { setores } = useCenso();
  const [info, setInfo] = useState<Setor | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const geojsonFeatures = useMemo(() => {
    return setores
      .map((s, i): Feature<Geometry, GeoJsonProperties> | null => {
        try {
          const parsed = wellknown.parse(s.geom);
          if (
            parsed?.type === "Polygon" ||
            parsed?.type === "MultiPolygon"
          ) {
            return {
              type: "Feature",
              geometry: parsed,
              properties: { id: i },
            };
          }
        } catch (err) {
          console.error("Erro ao converter WKT:", err);
        }
        return null;
      })
      .filter((f): f is Feature<Geometry, GeoJsonProperties> => f !== null);
  }, [setores]);

  if (!geojsonFeatures.length)
    return <div>Carregando setores...</div>;

  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: geojsonFeatures,
  };

  return (
    <MapContainer
      center={[-23.3, -46.3]}
      zoom={8}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON
        key={`geojson-${geojsonFeatures.length}-${selectedId}`}
        data={featureCollection}
        style={(feature) => ({
          color:
            feature?.properties?.id === selectedId ? "red" : "#0078FF",
          weight: 2,
          fillOpacity: 0.3,
        })}
        eventHandlers={{
          click: async (e) => {
            const latlng = e.latlng;
            const res = await getSetorByPoint(latlng.lng, latlng.lat);
            setInfo(res);

            const clickedFeature = e.sourceTarget.feature as Feature<Geometry, GeoJsonProperties>;
            const id = clickedFeature?.properties?.id;
            if (typeof id === "number") {
              setSelectedId(id);
            }
          },
        }}
      />

      <AjustarVisaoPoligonos features={geojsonFeatures} />
      {info && <InfoBox info={info} />}
    </MapContainer>
  );
}
