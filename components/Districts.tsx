"use client";

import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import * as L from "leaflet";


interface DistrictsProps {
  data: any;
}

const Districts: React.FC<DistrictsProps> = ({ data }) => {
  const map = useMap();
  const geoJsonLayerRef = useRef<any>(null); // keep ref as any to avoid L.Layer issues

  useEffect(() => {
    if (!data || !map) return;

    if (geoJsonLayerRef.current) {
      geoJsonLayerRef.current.remove();
    }

    geoJsonLayerRef.current = L.geoJSON(data, {
      style: () => ({
        color: "blue",
        weight: 1,
        fillOpacity: 0.1,
      }),
      onEachFeature: (feature: any, layer: any) => {
        if (feature.properties?.name) {
          layer.bindPopup(feature.properties.name);
        }
      },
    }).addTo(map);
  }, [data, map]);

  return null;
};

export default Districts;
