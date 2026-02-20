"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { useAreaStats } from "@/hooks/useAreaStats";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

interface MapContainerProps {
  onStatsLoad: (stats: any) => void;
  onLoading: (loading: boolean) => void;
}

export default function MapContainer({
  onStatsLoad,
  onLoading,
}: MapContainerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const { mutate, isPending } = useAreaStats();

  useEffect(() => {
    onLoading(isPending);
  }, [isPending]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [31.2357, 30.0444],
      zoom: 11,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });

    map.addControl(draw, "top-left");
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("draw.create", (e: any) => {
      console.log("draw.create fired", e);
      const feature = e.features[0];
      if (!feature) return;

      const coordinates = feature.geometry.coordinates as number[][][];

      mutate(coordinates, {
        onSuccess: (data) => {
          onStatsLoad(data);
        },
      });
    });

    map.on("draw.delete", () => {
      onStatsLoad(null);
    });

    mapRef.current = map;

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className="w-full h-full" />;
}
