"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AreaStats } from "@/types/stats.types";
import Sidebar from "@/components/sidebar/Sidebar";

const MapContainer = dynamic(() => import("@/components/map/map-container"), {
  ssr: false,
});

export default function Home() {
  const [stats, setStats] = useState<AreaStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-zinc-950">
      {/* Map - 60% */}
      <div className="flex-1 h-full">
        <MapContainer onStatsLoad={setStats} onLoading={setIsLoading} />
      </div>

      {/* Sidebar - 40% */}
      <div className="w-[400px] h-full shrink-0">
        <Sidebar stats={stats} isLoading={isLoading} />
      </div>
    </main>
  );
}
